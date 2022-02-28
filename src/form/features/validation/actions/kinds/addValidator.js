export const addValidatorActionType = 'form/validator/add';

/**
 *
 * @param index
 * @param validator
 * @returns {{payload: *[], type: string}}
 */
export function AddFormValidatorAction(index, validator) {
    return {
        type: addValidatorActionType, payload: [index, validator]
    };
}

AddFormValidatorAction.type = addValidatorActionType;
