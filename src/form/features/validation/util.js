import {formValidationPhaseIds} from "./constants";
import {actionItemDataUpdate} from "../data/actions/kinds/update";

const checkFormHasBeenValidated = form => !!form.validations && form.validations.messages;


/**
 * Get the Validation Message for a Form Item
 *
 * @param form
 * @param itemIndex
 * @return {null|*}
 */
export const selectValidationMessageAtIndex = (form, itemIndex) => {
    if (!checkFormHasBeenValidated(form)) return null;

    return form.validations.messages[itemIndex];
}

/**
 * Get a list of Validators for a Form Phase, provided a registered set of validators
 *
 * @param availableValidators
 * @param phaseId
 * @return {*}
 */
const selectValidatorForPhase = (availableValidators, phaseId) => {
    return availableValidators[phaseId];
}

/**
 * Given an Action and a set of available Validators, return an array of Validators
 *
 * @param action
 * @param availableValidators
 * @return
 */
export const getValidatorsForAction = (action, availableValidators) => {
    if (!availableValidators) return null;

    switch (action && action.type) {
        case actionItemDataUpdate:
            const phaseId = formValidationPhaseIds.ON_FORM_ITEM_CHANGE;
            const changeValidators = selectValidatorForPhase(availableValidators, phaseId);

            return changeValidators ?? [];
        default:
            return null;
    }
};

/**
 * Returns a description of an action we're validating.
 * Used
 * @param action
 * @param validationStep
 * @return {{meta: {validationStep}, type}}
 */
export function describeActionForValidation(action, validationStep) {
    return {
        ...action,
        meta: {
            ...action.meta || {},
            validationStep: validationStep
        }
    };
}

/**
 * Check if an action has been associated with a validation step
 *
 * @param action
 * @return {*|null}
 */
export function selectValidationStepFromAction(action) {
    return action?.meta?.validationStep ?? null;
}