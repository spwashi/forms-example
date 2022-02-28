import {formItemDataActions} from "./actions";


/**
 * Reducer for Form Data
 *
 * @param {FormDataState} formState
 * @param {FormContextDataAction} action
 * @returns {FormDataState}
 */
export const formDataReducer = (formState = {}, action = {}) => {
    switch (action.type) {
        case formItemDataActions.updateData.type: {
            const [itemIndex, itemData] = action.payload;
            return {
                ...formState,
                data: {
                    ...formState.data,
                    [itemIndex]: itemData
                }
            };
        }
        case formItemDataActions.resetData.type:
        case formItemDataActions.clearData.type: {
            const itemIndex = action.payload;
            const itemInitialState =
                action.type === formItemDataActions.resetData.type
                    ? null
                    : formState.initialData[itemIndex] ?? undefined;

            return {
                ...formState,
                data: {
                    ...formState.data,
                    [itemIndex]: itemInitialState
                }
            };
        }
        default:
            return formState;
    }
}