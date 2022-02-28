import { formItemStatusActions } from "./actions";


export const formStatusReducer = (formState = {}, action = {}) => {
    switch (action.type) {
        case formItemStatusActions.updateStatus.type: {
            const [itemIndex, itemStatus] = action.payload;

            return {
                ...formState,
                status: {
                    ...formState.status,
                    [itemIndex]: itemStatus
                }
            }
        }
        case formItemStatusActions.clearStatus.type:
        case formItemStatusActions.resetStatus.type: {
            const itemIndex = action.payload;
            const itemInitialState =
                action.type === formItemStatusActions.clearStatus.type
                    ? null
                    : formState.initialStatus[itemIndex] ?? undefined;
            return {
                ...formState,
                status: {
                    ...formState.status,
                    [itemIndex]: itemInitialState
                }
            }
        }
        default:
            return formState;
    }
}