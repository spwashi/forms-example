import {useFormActionValidation} from "./useFormActionValidation";
import {useCallback} from "react";
import {formValidationStepKinds} from "../constants";
import {formValidationActions} from "../actions";
import {describeActionForValidation} from "../util";


const canContinueAfterPreValidation = () => {
}

/**
 * Provides a callback that performs an Action Dispatch in for a Form Context
 */
export function useValidatedFormDispatch(formState, dispatchFormAction) {
    const validateAction = useFormActionValidation(formState);

    // validate the form, and dispatch the
    return useCallback((action) => {

        // run action pre-validations

        const preValidatedAction = describeActionForValidation(action, formValidationStepKinds.PRE_DISPATCH);
        const preValidationResult = validateAction(preValidatedAction);
        const preValidationAction = formValidationActions.setValidationResults(preValidationResult);
        preValidationAction && dispatchFormAction(preValidationAction);

        // handle val
        const THRESHOLD = 2;
        if (Object.values(preValidationResult.errorLevels).reduce((total, curr) => total + curr, 0) > THRESHOLD) {
            console.log('NOT DISPATCHING ACTION... FORM NOT VALIDATED')
            return;
        }

        // dispatch the action

        dispatchFormAction(action);

        // run action post-validations

        const postValidatedAction = describeActionForValidation(
            action,
            formValidationStepKinds.POST_DISPATCH
        );
        const postValidationResult = validateAction(postValidatedAction);
        const postValidationAction = formValidationActions.setValidationResults(postValidationResult);
        postValidationAction && dispatchFormAction(postValidationResult);


    }, [validateAction, dispatchFormAction]);
}