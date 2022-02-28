import {useContext, useMemo} from "react";
import {FormContext} from "../../context/FormContext";
import {useFormItem} from "./hooks/useFormItem/useFormItem";
import {useBlurStatusChangeListenerEffect, useOnChangeListenerEffect} from "./components/inputs/text/hooks/effects";
import {FormItemContext} from "./context/FormItemContext";

/**
 *
 */
export const FormItem = ({children, name, valueMapper, onChange}) => {
    const form = useContext(FormContext);
    const [state, controller] = useFormItem(form, name, valueMapper);
    const field = useMemo(() => [state, controller], [state]);

    useBlurStatusChangeListenerEffect(state.localStatus, controller);

    const {localValue, value} = state;
    useOnChangeListenerEffect(onChange, localValue, value);

    return (
        <FormItemContext.Provider value={field}>
            {children}
        </FormItemContext.Provider>
    )
}