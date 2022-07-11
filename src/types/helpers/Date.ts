/** @public
 *  @desc Defines the properties of return object for method "getStartEndOfWeek" */
export interface IReturnStartEndOfWeek {
    first: Date,
    last: Date
}

/** @public
 *  @desc Defines the properties of return object for method "getDayOfMonth" */
export interface IReturnDaysOfMonth {
    day: number,
    month: number,
    year: number,
    className: string,
    prevOrNext: boolean
}

/** @public
 *  @desc Defines the properties for handling the styling of the days to month */
export type IDaysOfMonthClassName = {
    month: number,
    year: number,
    day: number
    startDate?: Date|null,
    endDate?: Date|null,
    datesBetween?: Date[]|[],
    prevOrNext?: boolean
}