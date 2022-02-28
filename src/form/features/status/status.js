/**
 *
 * @param {FormState} form
 * @param {FormItemIndex} itemIndex
 * @return {*|undefined}
 */
export const selectFormItemStatus = (form, itemIndex) => {
    return form.status ? form.status[itemIndex] : undefined;
};

/**
 *
 * @param {FormState} form
 * @param {FormItemIndex} itemIndex
 * @return {*|undefined}
 */
export const selectFormItemInitialStatus = (form, itemIndex) => {
    return form.initialStatus ? form.initialStatus[itemIndex] : undefined;
};