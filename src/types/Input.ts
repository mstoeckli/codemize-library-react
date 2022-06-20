import { DefaultTheme } from "styled-components";

/** @public
 *  @desc Defines the properties of each loader element */
export interface IInputProps {
    label?: string,
    position?: InputLabelPosition,
    theme?: DefaultTheme,
    inputProps?: object
}

/** @public
 *  @desc Defines the label position for different visualization */
export type InputLabelPosition = "right" | "left";

/** @public
 *  @desc Defines the theme properties for all the input colors */
export type InputColors = {
    color?: string,
    border: string,
    background?: string,
    placeholder?: string
}

export type InputConfigTheme = {
    height: string, // -> 32px
    width: string, // -> 100% | auto ...
    minWidth: string, // -> 100px | auto ...
    maxWidth: string, // -> 300px | auto ...
    paddingInput: string, // -> 8px 16px
    fontSizeInput: string, // -> 0.775rem
    fontWeightInput: number, // -> 500
    textAlignLabel: string, // -> center
    paddingLabel: string, // -> 8px 12px
    fontSizeLabel: string, // -> 0.75rem
    fontWeightLabel: number, // -> 600
    borderRadius: string // -> 6px
}