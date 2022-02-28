import {ClearFormItemStatusAction} from "./kinds/clear";
import {ResetFormItemStatusAction} from "./kinds/reset";
import {UpdateFormItemStatusAction} from "./kinds/update";


export const formItemStatusActions =
    {
        clearStatus: ClearFormItemStatusAction,
        resetStatus: ResetFormItemStatusAction,
        updateStatus: UpdateFormItemStatusAction,
    };