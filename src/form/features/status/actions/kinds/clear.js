const actionItemStatusClear = 'form/item/status.clear';

/**
 *
 * @param {FormItemIndex} itemIndex
 * @returns {{payload, type: string}}
 */
export function ClearFormItemStatusAction(itemIndex) {
    return {
        type: actionItemStatusClear,
        payload: itemIndex,
    };
}

ClearFormItemStatusAction.type = actionItemStatusClear;
