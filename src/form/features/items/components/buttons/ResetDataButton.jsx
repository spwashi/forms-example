import React, {useContext} from "react";
import {FormItemContext} from "../../context/FormItemContext";

/**
 * Resets the Data in a FormItemContext
 *
 * @return {JSX.Element|null}
 * @constructor
 */
export function ResetDataButton() {
    const [state, controller] = useContext(FormItemContext);
    if (!state.localValue) return null;
    return <button onClick={controller.resetData}>reset data</button>
}