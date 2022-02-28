const actionItemStatusUpdate = 'form/item/status.update';

/**
 *
 * @param itemIndex
 * @param status
 * @returns {{payload: *[], type: string}}
 */
export function UpdateFormItemStatusAction(itemIndex, status) {
    return {
        type: actionItemStatusUpdate,
        payload: [itemIndex, status],
    };
}

UpdateFormItemStatusAction.type = actionItemStatusUpdate;
