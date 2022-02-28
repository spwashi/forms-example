import React, {useContext} from "react";
import {useInputBlurHandler, useInputChangeHandler, useInputFocusHandler} from "./dom/hooks/handlers";
import {PlainInput} from "./dom/PlainInput";
import {FormItemContext} from "../../../context/FormItemContext";
import {ResetStatusButton} from "../../buttons/ResetStatusButton.jsx";
import {ResetDataButton} from "../../buttons/ResetDataButton";
import {FormItemLogger} from "../../FormItemLogger";
import {FormItem} from "../../../FormItem";

/**
 *
 * @returns {JSX.Element}
 */
function TextInputControl() {
    const [state, controller] = useContext(FormItemContext);

    const {itemIndex, localStatus, localValue} = state;
    const {updateData, updateStatus} = controller;

    const handleChange = useInputChangeHandler(updateData);
    const handleFocus = useInputFocusHandler(updateStatus, localStatus || {});
    const handleBlur = useInputBlurHandler(updateStatus, localStatus || {});

    return (
        <PlainInput
            name={itemIndex}
            onChange={handleChange}
            onFocusCapture={handleFocus}
            onBlur={handleBlur}
            value={localValue}
        />
    );
}

/**
 * Text Input
 *
 * @returns {JSX.Element}
 */
export function TextInput({name, onChange, valueMapper}) {
    return (
        <FormItem name={name} onChange={onChange} valueMapper={valueMapper}>
            <TextInputControl/>

            <ResetStatusButton/>
            <ResetDataButton/>

            <FormItemLogger/>
        </FormItem>
    )
}