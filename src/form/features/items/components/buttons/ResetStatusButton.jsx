import React, {useContext} from "react";
import {FormItemContext} from "../../context/FormItemContext";

/**
 * Resets the Status in a FormItemContext
 *
 * @return {JSX.Element|null}
 * @constructor
 */
export function ResetStatusButton() {
    const [state, controller] = useContext(FormItemContext);
    if (!state.localStatus) return null;
    return <button onClick={controller.resetStatus}>reset status</button>
}