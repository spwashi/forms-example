import {useMemo, useState} from "react";

/**
 * Provides the internal state of a FormItem
 *
 * @return {FormItemInternalState}
 */
export function useFormItemInternalState(valueMapper = (value) => value || '', statusMapper = (value) => value) {
    const initialLocalValue = null;
    const initialLocalStatus = null;

    const [localValue, setLocalValue] = useState(initialLocalValue);
    const [localStatus, setLocalStatus] = useState(initialLocalStatus);

    /**
     * @type {FormItemInternalController}
     */
    const internalController = useMemo(() => ({
        updateData: data => setLocalValue(data),
        resetData: () => setLocalValue(initialLocalValue),
        clearData: () => setLocalValue(null),
        updateStatus: status => setLocalStatus(status),
        resetStatus: () => setLocalStatus(initialLocalStatus),
        clearStatus: () => setLocalStatus(null),
    }), []);

    return useMemo(() => ({
        initialValue: initialLocalValue,
        initialStatus: initialLocalStatus,
        status: localStatus,
        statusMapper,
        value: localValue,
        valueMapper,
        controller: internalController
    }), [internalController, localStatus, localValue]);
}