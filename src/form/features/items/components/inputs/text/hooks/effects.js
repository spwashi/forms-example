import {usePrev} from "../../../../../../../util/hooks/usePrev";
import {useEffect, useMemo, useRef} from "react";

/**
 * Responds to change in the blurred and focused status attributes
 *
 * @param status
 * @param controller
 */
export function useBlurStatusChangeListenerEffect(status, controller) {
    const prev = usePrev(status);
    const dispatcher = useMemo(() => ({
        addMessage: controller.addMessage,
        updateStatus: controller.updateStatus
    }), [controller.addMessage, controller.updateStatus]);

    useEffect(() => {
            const {addMessage, updateStatus} = dispatcher;

            const messageLocation = 'info.messages';
            if (!status) return;


            const {focused, firstFocus, blurred, firstBlur} = status;

            if (focused && !prev) {
                addMessage(messageLocation, 'first focus')
                updateStatus(status, {firstFocus: true});
                return;
            }

            if (blurred && !firstBlur) {
                addMessage(messageLocation, 'first blur')
                updateStatus(status, {firstBlur: true});
                return;
            }

            if (firstBlur && firstFocus && !blurred) {
                addMessage(messageLocation, undefined)
            }
        },
        [dispatcher, prev, status]
    );
}

const noop = () => {
}

/**
 * Runs the onChangeCallback when testVal changes
 *
 * @param onChangeCallback
 * @param testVal
 * @param payload
 */
export function useOnChangeListenerEffect(onChangeCallback, testVal, payload = undefined) {
    const prevValue = usePrev(testVal);
    const onChangeRef = useRef(noop);
    onChangeRef.current = onChangeCallback;

    useEffect(() => {
        if (prevValue === testVal) return;
        const onChange = onChangeRef.current;
        onChange && onChange(payload ?? testVal);
    }, [testVal, payload, prevValue]);

}