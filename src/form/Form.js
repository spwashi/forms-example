import React, {useReducer} from "react";
import {formReducer} from "./reducer";
import {useValidatedFormDispatch} from "./features/validation/hooks/useValidatedFormDispatch";
import {FormContext, initFormContext} from "./context/FormContext";

function useFormReducer(formId, validators) {
    return useReducer(
        formReducer,
        {formId, validators},
        initFormContext
    );
}

/**
 * Represents a Context that manages the flux of data
 *
 * @param children
 * @param formId
 * @param validators
 * @return {JSX.Element}
 */
export function Form({children, formId, validators}) {
    const [form, bareDispatch] = useFormReducer(formId, validators);

    form.dispatch = useValidatedFormDispatch(form, bareDispatch);

    return (
        <FormContext.Provider value={form}>
            {children}
        </FormContext.Provider>
    );
}