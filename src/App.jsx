import React, {useMemo, useState} from "react";
import {FormConsumer} from "./form/context/FormContext";
import {TextInput} from "./form/features/items/components/inputs/text/TextInput";
import {formValidationPhaseIds} from "./form/features/validation/constants";
import {FieldContextCapsValidator} from "./form/features/validation/components/FieldContextCapsValidator";
import {transformToUpper} from "./form/features/items/util/transformers/toUpper";
import {Form} from "./form/Form";
import {Log} from "./util/components/Log";
import {FormDataRenderer} from "./form/util/FormDataRenderer";


function App() {
    const [value1, onValue1Change] = useState();
    const [value2, onValue2Change] = useState();
    const formValidators = useMemo(() => (
        {
            [formValidationPhaseIds.ON_FORM_ITEM_CHANGE]:
                [
                    {
                        id: 'random validator',
                        validate: form => {
                            const hit = Date.now() % Math.floor(Math.random() * 100) === 7;
                            hit && alert('hey!')
                            return hit && {message: 'something'}
                        }
                    }
                ]
        }
    ), []);

    return (
        <div className="App">
            <TextInput name="no-context" onChange={onValue1Change}/>
            <Form validators={formValidators}>
                <FieldContextCapsValidator itemIndex="with-context"/>
                <TextInput name="with-context" onChange={onValue2Change} valueMapper={transformToUpper}/>
                <FormConsumer render={FormDataRenderer}/>
            </Form>
            <Log console={null}>{{value1, value2}}</Log>
        </div>
    );
}

export default App;
