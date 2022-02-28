import React, {createContext} from "react";


/**
 *
 * @param formId
 * @param validators
 * @param initialStatus
 * @returns {FormState}
 */
export const initFormContext = ({formId, validators = {onChange: []}} = {}) => ({
    formId,
    key: 0,
    data: {},
    initialData: {},
    messages: {},
    initialMessages: {},
    status: {},
    initialStatus: {},
    validators,
});

export const FormContext = createContext(initFormContext(undefined));

export function FormConsumer({render}) {
    return <FormContext.Consumer>{render}</FormContext.Consumer>
}