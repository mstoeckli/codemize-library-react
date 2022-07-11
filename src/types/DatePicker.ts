import { DefaultTheme } from "styled-components";
import { ButtonType } from "./Button";

/** @public
 *  @desc Defines the properties of each datepicker element */
export interface IDatePickerProps {
    theme?: DefaultTheme,
    text?: string,
    month?: number,
    year?: number,
    startDate?: Date|null,
    endDate?: Date|null,
    iconSrcLeft?: JSX.Element,
    iconSrcRight?: JSX.Element,
    iso8601?: boolean,
    reset: {
        text?: string,
        type?: ButtonType,
        iconSrc?: JSX.Element,
        onClick: () => void
    }
    apply: {
        text?: string,
        type?: ButtonType,
        iconSrc?: JSX.Element,
        onClick: () => void
    }
}

/** @public
 *  @desc Defines the properties of datepicker state object */
export interface IDatePickerStateProps {
    month: number,
    year: number,
    startDate: Date|null,
    endDate: Date|null,
    initStartDate: Date|null,
    initEndDate: Date|null,
    iso8601: boolean,
    datesBetween: Date[]
}

/** @public
 *  @desc Defines the theme properties for all the copyright config */
export type DatePickerConfigTheme = {
    fontSize: string, // -> 0.65rem
    fontWeight: number // -> 500
}