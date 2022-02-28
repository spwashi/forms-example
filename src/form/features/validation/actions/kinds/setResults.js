export const setValidationResultsActionType = 'form/validations/set';

/**
 *
 * @param validations
 * @returns {{payload, type: string}}
 */
export function SetFormValidationResultsAction(validations) {
    return {
        type: setValidationResultsActionType, payload: validations
    };
}

SetFormValidationResultsAction.type = setValidationResultsActionType;
