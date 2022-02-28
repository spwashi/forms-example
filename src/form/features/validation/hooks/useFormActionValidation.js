import {useCallback, useRef} from "react";
import {getValidatorsForAction} from "../util";
import {mergeDeep} from "../../../../util/mergeDeep";


// eslint-disable-next-line no-unused-vars
// const getActionValidator = getValidatorForAction;


function initValidationCollector() {
    return {
        messages: {},
        errorLevels: {},
    };
}

function getActionValidationReducer(action, getFormState) {
    return (prevTopResult, currentValidator) => {
        const {id: validatorId, validate} = currentValidator;
        const stepResult = validate(getFormState(), action);

        let topResult = prevTopResult;
        topResult =
            updateValidationErrorState(
                topResult,
                stepResult,
                validatorId
            );

        topResult =
            updateValidationMessagesState(
                topResult,
                stepResult,
                validatorId,
            );

        return topResult;
    };

    function updateValidationErrorState(topResult, stepResult, validatorId) {
        if ([true].includes(stepResult)) {
            topResult.errorLevels[validatorId] = 0;
        } else if ([false].includes(stepResult)) {
            topResult.errorLevels[validatorId] = (topResult.errorLevels[validatorId] ?? 0) + 1;
        } else {
            topResult.errorLevels[validatorId] = (topResult.errorLevels[validatorId] ?? 0) + (stepResult.errorLevels ?? 0);
        }

        return topResult;
    }

    function updateValidationMessagesState(topResult, stepResult, validatorId) {
        if ([true].includes(stepResult)) {
            topResult.messages[validatorId] = null;
            return topResult;
        }

        const prev = topResult.messages[validatorId] || {};
        const curr =
            typeof stepResult === "object" && stepResult
                ? stepResult
                : ({message: stepResult});

        topResult.messages[validatorId] =
            mergeDeep(prev, curr);

        return topResult;
    }
}

/**
 *
 * @param {FormState} formState
 * @return {(function(*): ({errorLevels: {[k:string]: number},  messages: {}}))|*}
 */
export function useFormActionValidation(formState) {
    const formRef = useRef(formState);
    formRef.current = formState;

    return useCallback(actionToValidate => {
        const form = formRef.current;

        const validatorList = getValidatorsForAction(actionToValidate, form.validators);
        const validationCollector = initValidationCollector();

        if (!validatorList) {
            return validationCollector;
        }

        // run the validations

        return validatorList.reduce(
            getActionValidationReducer(
                actionToValidate,
                () => formRef.current,
            ),
            validationCollector
        );
    }, []);
}