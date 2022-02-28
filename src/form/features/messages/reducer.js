import {formMessageActions} from "./actions";

/**
 *
 * @param {FormState} formState
 * @param {FormContextDataAction} action
 * @returns {FormState|{}}
 */
export const formMessageReducer = (formState = {}, action) => {
    switch (action.type) {
        case formMessageActions.addMessage.type: {
            const [messageId, message] = action.payload;

            return {
                ...formState,
                messages: {
                    [messageId]: {
                        message: message
                    }
                }
            };
        }
        case formMessageActions.touchMessage.type: {
            const [messageId, interaction] = action.payload;
            const {type} = interaction;

            return {
                ...formState,
                messages: {
                    [messageId]: {
                        ...(formState.messages[messageId] ?? {}),
                        touched: {
                            timestamp: Date.now(),
                            type: type
                        }
                    }
                }
            }
        }
        default:
            return formState;
    }

}