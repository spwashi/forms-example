import {useCallback} from "react";

/**
 * Handler for when the Input is focused
 *
 * @param {function(status: *): void} updateStatus
 * @param {*} status
 */
export function useInputFocusHandler(updateStatus, status = {}) {
    return useCallback(e => !status.focused && updateStatus({
        ...status || {},
        blurred: null,
        focused: Date.now()
    }), [updateStatus, status]);
}

/**
 * Handler for when the Input is blurred
 *
 * @param {function(status: *): void} updateStatus
 * @param {*} status
 */
export function useInputBlurHandler(updateStatus, status = {}) {
    return useCallback(e => status.focused && updateStatus({
        ...status || {},
        focused: null,
        blurred: Date.now()
    }), [updateStatus, status]);
}

/**
 * Handler for when the Input value changes
 */
export function useInputChangeHandler(updateData) {
    return useCallback(e => {
        updateData(e.target.value);
    }, [updateData]);
}