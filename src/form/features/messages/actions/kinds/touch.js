export const addTouchActionType = 'form/message/touch';

export function TouchMessageAction(messageId, payload = {touchType: 'dismiss'}) {
    return {
        type: addTouchActionType,
        payload: [messageId, payload]
    };
}

TouchMessageAction.type = addTouchActionType;