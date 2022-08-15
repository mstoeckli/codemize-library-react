/** @public
 *  @desc Defines the properties of hook for handling element resizing */
import { RefObject } from "react";

export interface IResizeHandlerProps {
    refObj: any,
    callback: (oResizeObserverEntry: ResizeObserverEntry[]) => void
}