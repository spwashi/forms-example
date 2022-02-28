import {
    formValidationActions
} from "./actions";


export const formValidationReducer = (formState = {}, action) => {
    switch (action.type) {
        case formValidationActions.addValidator.type: {
            const [index, validator] = action.payload;
            return {
                ...formState,
                validators: {
                    ...formState.validators || {},
                    [index]: [
                        ...formState.validators[index] || [],
                        validator
                    ]
                }
            }
        }
        case formValidationActions.removeValidator.type: {
            const [index, validator] = action.payload;
            return {
                ...formState,
                validators: {
                    ...formState.validators || {},
                    [index]: (formState.validators[index] || []).filter(v => v !== validator)
                }
            }
        }
        case formValidationActions.setValidationResults.type: {
            const validations = action.payload;
            return {
                ...formState,
                validations
            };
        }
        default: {
            return formState;
        }
    }
}