import { DefaultTheme } from "styled-components";
import { ButtonType } from "./Button";

/** @public
 *  @desc Defines the properties of each datepicker element */
export interface IDatePickerProps {
    width?: string,
    minWidth?: string,
    maxWidth?: string,
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
        onClick: (dStartDate: Date|null, dEndDate: Date|null) => void
    }
    apply: {
        text?: string,
        type?: ButtonType,
        iconSrc?: JSX.Element,
        onClick: (dStartDate: Date|null, dEndDate: Date|null) => void
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

export type DatePickerColors = {
    colorDay: string,
    backgroundDay: string,
    colorMonthYear: string,
    backgroundMonthYear: string,
}

/** @public
 *  @desc Defines the theme properties for all the copyright config */
export type DatePickerConfigTheme = {
    header: {
        height: string,
        borderRadius: string
    },
    main: {
        padding: string,
        fontSizeDay: string,
        fontWeightDay: number,
        fontWeightDayHover: number,
        paddingDay: string,
        borderRadiusDay: string,
        fontSizeWeek: string,
        fontWeightWeek: number,
        paddingWeek: string,
        fontSizeMonthYear: string,
        fontWeightMonthYear: number,
        borderRadiusMonthYear: string,
        fontWeightCurrent: number,
        fontWeightActive: number
    }
}

