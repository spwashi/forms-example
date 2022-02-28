import React, {useContext, useEffect, useMemo} from "react";
import {FormContext} from "../../../context/FormContext";
import {formValidationActions} from "../actions";
import {formValidationPhaseIds, formValidationStepKinds} from "../constants";
import {UpdateFormItemDataAction} from "../../data/actions/kinds/update";


function getValidationResult(value) {

    if (!isNaN(parseInt(value))) {
        return {
            errorLevel: 0,
            message: 'This seems to be a number',
        }
    }

    return (value !== `${value}`.toUpperCase())
        ? {
            errorLevel: 10,
            errors: {capitalizationError: 'Should be Valid',},
            expected: `${value}`.toUpperCase(),
            received: `${value}`
        }
        : {
            errorLevel: 0,
            errors: {capitalizationError: null,},
            expected: `${value}`.toUpperCase(),
            received: `${value}`
        };
}

function validateFormItemDataUpdate(currValidationStep, currentValue, nextValue) {
    let value;
    switch (currValidationStep) {
        case formValidationStepKinds.POST_DISPATCH:
            value = currentValue;
            break;
        case formValidationStepKinds.PRE_DISPATCH:
            value = nextValue;
            break;
        default:
            return true;
    }

    return getValidationResult(value);
}

const getAllCapsValidator = (itemIndex) => (
    {
        id: itemIndex,
        validate: (state, action) => {
            if (!itemIndex) return true;

            // only run this on UpdateDataActions
            if (action.type !== UpdateFormItemDataAction.type) {
                return true;
            }

            const currValidationStep = formValidationActions._meta.selectValidationStep(action);
            const currentValue = state.data[itemIndex];
            const nextValue = UpdateFormItemDataAction.selectData(action);

            return validateFormItemDataUpdate(
                currValidationStep,
                currentValue,
                nextValue
            );
        }
    }
);

/**
 * Checks a Field for validity
 *
 * - a Field at the itemIndex must be all caps
 *
 * @param itemIndex
 * @returns {JSX.Element}
 * @constructor
 */
export function FieldContextCapsValidator({itemIndex}) {
    const form = useContext(FormContext);
    const dispatchOnForm = form.dispatch;

    const allCapsValidator = useMemo(() => getAllCapsValidator(itemIndex), [itemIndex]);

    useEffect(() => {
        if (!dispatchOnForm) return
        const appendValidator = formValidationActions.addValidator(formValidationPhaseIds.ON_FORM_ITEM_CHANGE, allCapsValidator);
        dispatchOnForm(appendValidator);

        return () => {
            dispatchOnForm(formValidationActions.removeValidator(formValidationPhaseIds.ON_FORM_ITEM_CHANGE, allCapsValidator))
        }
    }, [dispatchOnForm, allCapsValidator, itemIndex]);

    return <></>
}