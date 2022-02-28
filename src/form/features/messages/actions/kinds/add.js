export const addMessageActionType = 'form/message/add';

export function AddMessageAction(messageId, message) {
    return {
        type: addMessageActionType,
        payload: [messageId, message]
    };
}

AddMessageAction.type = addMessageActionType;
