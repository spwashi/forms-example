export const actionItemDataClear = 'form/item/data.clear';

/**
 * Creates an action to clear the data of a form item
 *
 * @param {FormItemIndex} itemIndex
 * @returns {{payload, type: string}}
 */
export function ClearFormItemDataAction(itemIndex) {
    return {
        type: actionItemDataClear,
        payload: itemIndex,
    };
}

ClearFormItemDataAction.type = actionItemDataClear;
