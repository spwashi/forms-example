export const removeValidatorActionType = 'form/validator/remove';

/**
 *
 * @param index
 * @param validator
 * @returns {{payload: *[], type: string}}
 */
export function RemoveFormValidatorAction(index, validator) {
    return {
        type: removeValidatorActionType, payload: [index, validator]
    };
}

RemoveFormValidatorAction.type = removeValidatorActionType;
