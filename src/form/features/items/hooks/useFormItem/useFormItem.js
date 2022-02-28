import {useFormItemInternalState} from "./useFormItemInternalState";
import {useFormItemState} from "./useFormItemState";
import {useFormItemController} from "./useFormItemController";

const defaultValueMapper = (value) => value || '';
const defaultStatusMapper = (value) => value;

/**
 * Defines a FormItem
 *
 * @param {FormState} form
 * @param {FormItemIndex} itemIndex
 * @param valueMapper
 * @param statusMapper
 * @returns {[FormItemState, FormItemController]}
 */
export function useFormItem(
    form,
    itemIndex,
    valueMapper = defaultValueMapper,
    statusMapper = defaultStatusMapper
) {
    const internalState = useFormItemInternalState(valueMapper, statusMapper);
    const state = useFormItemState(form, itemIndex, internalState);
    const controller = useFormItemController(form, itemIndex, internalState);
    return [state, controller];
}
