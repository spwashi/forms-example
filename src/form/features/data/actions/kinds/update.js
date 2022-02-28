export const actionItemDataUpdate = 'form/item/data.update';

/**
 * Creates an action to update the data of a form item
 *
 * @param {FormItemIndex} itemIndex
 * @param data
 * @returns {{payload: [string, *], type: string}}
 */
export function UpdateFormItemDataAction(itemIndex, data) {
    return {
        type: actionItemDataUpdate,
        payload: [itemIndex, data]
    };
}

UpdateFormItemDataAction.type = actionItemDataUpdate;
UpdateFormItemDataAction.selectData = (updateItemDataAction) => {
    const [, data] = updateItemDataAction.payload;
    return data;
};