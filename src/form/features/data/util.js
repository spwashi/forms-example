/**
 * Selects the initial value of a form item
 *
 * @param form
 * @param itemIndex
 * @return {*|undefined}
 */
export const selectFormItemInitialValue = (form = {}, itemIndex = '') => form.initialData ? form.initialData[itemIndex] : undefined;

/**
 * Selects the current value of a form item
 *
 * @param form
 * @param itemIndex
 * @return {*|undefined}
 */
export const selectFormItemValue = (form = {}, itemIndex = '') => form.data ? form.data[itemIndex] : undefined;