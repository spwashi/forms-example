import React, {useContext} from "react";
import {FormItemContext} from "../context/FormItemContext";

/**
 * Displays the content of a FormItemContext
 *
 * @returns {JSX.Element}
 */
export function FormItemLogger() {
    const [fieldState] = useContext(FormItemContext);
    return <pre>{JSON.stringify(fieldState, null, 3)}</pre>;
}