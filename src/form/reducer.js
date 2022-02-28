import {formStatusReducer} from "./features/status/reducer";
import {formDataReducer} from "./features/data/reducer";
import {formMessageReducer} from "./features/messages/reducer";
import {formValidationReducer} from "./features/validation/reducer";

/**
 * Reducer
 */
/**
 *
 * @param {FormState|{}} formState
 * @param action
 * @returns {FormState | {}}
 */
export const formReducer = (formState = {}, action = {}) => {
    let nextFormState = formState;

    nextFormState = formDataReducer(nextFormState, action);
    nextFormState = formValidationReducer(nextFormState, action);
    nextFormState = formStatusReducer(nextFormState, action);
    nextFormState = formMessageReducer(nextFormState, action);

    return nextFormState;
}