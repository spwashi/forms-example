import {selectValidationMessageAtIndex} from "../../../validation/util";
import {selectFormItemInitialValue, selectFormItemValue} from "../../../data/util";
import {selectFormItemInitialStatus, selectFormItemStatus} from "../../../status/status";

/**
 * Provides the contextualized state of a FormItem
 *
 * @param {FormState} form
 * @param {FormItemIndex} itemIndex
 * @param {FormItemInternalState} internalState
 * @param {FormItemInternalState} internalState
 * @returns {FormItemState}
 */
export function useFormItemState(form, itemIndex, internalState) {
    const messages = form.messages;
    const validations = selectValidationMessageAtIndex(form, itemIndex);
    const initialValue = selectFormItemInitialValue(form, itemIndex);
    const initialStatus = selectFormItemInitialStatus(form, itemIndex)
    const value = selectFormItemValue(form, itemIndex);
    const status = selectFormItemStatus(form, itemIndex);

    return {
        itemIndex,
        value,
        initialValue,
        localValue: internalState.value,

        status,
        initialStatus,
        localStatus: internalState.status,

        messages,
        validations,
    };
}