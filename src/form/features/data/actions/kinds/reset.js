export const actionItemDataReset = 'form/item/data.reset';

/**
 * Creates an action to reset the data of a form item
 *
 * @param {FormItemIndex} itemIndex
 * @returns {{payload: string, type: string}}
 */
export function ResetFormItemDataAction(itemIndex) {
    return {
        type: actionItemDataReset,
        payload: itemIndex,
    };
}

ResetFormItemDataAction.type = actionItemDataReset;
