import { AlertDialogIconType, ToastIconType } from "../types";

/** @public */
export const getIconByType = (): AlertDialogIconType|ToastIconType => ({
    information: "faInfo",
    success: "faCheckDouble",
    warning: "faExclamation",
    error: "faXmark"
});