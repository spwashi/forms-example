import {useCallback, useMemo, useRef} from "react";
import {formItemDataActions} from "../../../data/actions";
import {formItemStatusActions} from "../../../status/actions";
import {formMessageActions} from "../../../messages/actions";

export const noop = () => {
    // console.error('calling a noop')
}

/**
 * Provides the methods of a FormItem
 *
 * @param {FormItemIndex} itemIndex
 * @param {FormState} form
 * @param {FormItemInternalState} internalState
 *
 * @returns {FormItemController}
 */
export function useFormItemController(form, itemIndex, internalState,) {
    /** @type {React.MutableRefObject<FormItemInternalState>} */
    const internalStateRef = useRef({});
    internalStateRef.current = internalState;

    const formRef = useRef(form);
    formRef.current = form;

    const updateData =
        useCallback((data) => {
            const internalState = internalStateRef.current;
            const form = formRef.current;

            internalState.controller.updateData(data);
            const mappedValue = internalState.valueMapper(data);
            const dispatch = form.dispatch || noop;
            dispatch(formItemDataActions.updateData(itemIndex, mappedValue))
        }, [itemIndex]);

    const clearData =
        useCallback(() => {
            const internalState = internalStateRef.current;
            const form = formRef.current;

            internalState.controller.clearData();
            const dispatch = form.dispatch || noop;
            dispatch(formItemDataActions.clearData(itemIndex));
        }, [itemIndex]);

    const resetData =
        useCallback(() => {
            const internalState = internalStateRef.current;
            const form = formRef.current;

            internalState.controller.resetData();
            const dispatch = form.dispatch || noop;

            dispatch(formItemDataActions.resetData(itemIndex))
        }, [itemIndex]);

    const updateStatus =
        useCallback((status, applied = {}) => {
            const internalState = internalStateRef.current;
            const form = formRef.current;

            Object.apply(status, applied);

            internalState.controller.updateStatus(status);

            const mappedStatus = internalState.statusMapper(status);
            const dispatch = form.dispatch || noop;

            dispatch(formItemStatusActions.updateStatus(itemIndex, mappedStatus))
        }, [itemIndex]);

    const clearStatus =
        useCallback(() => {
            const internalState = internalStateRef.current;
            const form = formRef.current;

            internalState.controller.clearStatus();

            const dispatch = form.dispatch || noop;
            dispatch(formItemStatusActions.clearStatus(itemIndex));
        }, [itemIndex]);

    const resetStatus =
        useCallback(() => {
            const internalState = internalStateRef.current;
            const form = formRef.current;

            internalState.controller.resetStatus();

            const dispatch = form.dispatch || noop;
            dispatch(formItemStatusActions.resetStatus(itemIndex))
        }, [itemIndex]);

    const addMessage =
        useCallback((messageId, message) => {
            const form = formRef.current;
            const dispatch = form.dispatch || noop;
            dispatch(formMessageActions.addMessage(messageId, message))
        }, []);

    const touchMessage =
        useCallback((messageId, payload) => {
        }, []);

    return useMemo(() => (
        {
            updateData,
            clearData,
            resetData,

            updateStatus,
            resetStatus,
            clearStatus,

            addMessage,
            touchMessage,
        }
    ), [
        addMessage,
        clearData,
        clearStatus,
        resetData,
        resetStatus,
        touchMessage,
        updateData,
        updateStatus,
    ]);
}