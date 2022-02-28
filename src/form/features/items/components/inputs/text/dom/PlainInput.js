import React from "react";
import {ENV_IS_TEST} from "../../../../../../../util/constants";

/**
 * An Input element
 *
 * @param props
 * @return {JSX.Element}
 */
export function PlainInput(props) {
    if (ENV_IS_TEST) {
        console.log('dom.input', props);
        return <>[check the console]</>
    }

    return (
        <input
            {...props}
            autoComplete={'off'}
            value={props.value || ''}
        />
    );
}