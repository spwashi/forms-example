const actionItemStatusReset = 'form/item/status.reset';

/**
 *
 * @param {FormItemIndex} itemIndex
 * @returns {{payload, type: string}}
 */
export function ResetFormItemStatusAction(itemIndex) {
    return {
        type: actionItemStatusReset,
        payload: itemIndex,
    };
}

ResetFormItemStatusAction.type = actionItemStatusReset;
