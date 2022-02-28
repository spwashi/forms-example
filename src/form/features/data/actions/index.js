import {UpdateFormItemDataAction} from "./kinds/update";
import {ResetFormItemDataAction} from "./kinds/reset";
import {ClearFormItemDataAction} from "./kinds/clear";

export const formItemDataActions = {
    clearData: ClearFormItemDataAction,
    updateData: UpdateFormItemDataAction,
    resetData: ResetFormItemDataAction,
}