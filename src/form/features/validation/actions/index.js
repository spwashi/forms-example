import {selectValidationStepFromAction} from "../util";
import {SetFormValidationResultsAction} from "./kinds/setResults";
import {AddFormValidatorAction} from "./kinds/addValidator";
import {RemoveFormValidatorAction} from "./kinds/removeValidator";


export const formValidationActions = {
    _meta: {
        selectValidationStep: selectValidationStepFromAction
    },
    addValidator: AddFormValidatorAction,
    removeValidator: RemoveFormValidatorAction,
    setValidationResults: SetFormValidationResultsAction
};
