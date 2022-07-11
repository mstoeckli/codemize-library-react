import { IReturnStartEndOfWeek, IReturnDaysOfMonth, IDaysOfMonthClassName } from "../types";

/** @public */
export const getDaysLeapMonth = (iYear: number): number => isLeapYear(iYear) ? 29 : 28;

/** @public */
export const getCurrentDate = (): Date => new Date();

/** @public */
export const getCurrentMonth = (): number => getCurrentDate().getMonth();

/** @public */
export const getCurrentYear = (): number => getCurrentDate().getFullYear();

/** @public */
export const getFirstDay = (iMonth: number = getCurrentMonth(), iYear: number = getCurrentYear()): number => new Date(iYear, iMonth, 1).getDay();

/** @public */
export const getLastDay = (iMonth: number = getCurrentMonth(), iYear: number = getCurrentYear()): number => new Date(iYear, iMonth + 1, 0).getDay();

/** @public */
export const getDayCountOfMonth = (iYear: number): number[] => ([31, getDaysLeapMonth(iYear), 31, 30, 31, 30, 31, 31, 30, 31, 30]);

/** @public */
export const getStartEndOfWeek = (dDate: Date = getCurrentDate()): IReturnStartEndOfWeek  => {
    /** @desc Determine first and last day of week */
    const iFirst = dDate.getDate() - dDate.getDay();
    return {
        first: new Date(dDate.setDate(iFirst)),
        last: new Date(dDate.setDate(iFirst + 6))
    }
};

/** @public */
export const getDaysOfWeek = (bISO8601: boolean = true): Array<string> => bISO8601
    ? ["Global.WeekDays.monday", "Global.WeekDays.tuesday", "Global.WeekDays.wednesday", "Global.WeekDays.thursday", "Global.WeekDays.friday", "Global.WeekDays.saturday", "Global.WeekDays.sunday"]
    : ["Global.WeekDays.sunday", "Global.WeekDays.monday", "Global.WeekDays.tuesday", "Global.WeekDays.wednesday", "Global.WeekDays.thursday", "Global.WeekDays.friday", "Global.WeekDays.saturday"];

/** @public */
export const getMonthTranslationKey = (iMonth: number = getCurrentMonth()): string => (["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"])[iMonth];

/** @private */
export const getDatesBetween = (dStartDate: Date, dEndDate: Date): Date[] => {
    /** @desc Checking the importing parameters for correct typing */
    if (dStartDate !instanceof Date && dEndDate !instanceof Date) {
        const aDatesBetween = [];
        const dDate = new Date(dStartDate.getTime());

        /** @desc Exclude start date */
        dDate.setDate(dDate.getDate() + 1);

        /** @desc Exclude end date */
        while (dDate < dEndDate) {
            aDatesBetween.push(new Date(dDate));
            dDate.setDate(dDate.getDate() + 1);
        } return aDatesBetween;
    } else return [];
}

/** @public */
export const getDaysOfMonth = (iYear: number = getCurrentYear(), iMonth: number = getCurrentMonth(), dStartDate:Date|null = null, dEndDate:Date|null = null, aDatesBetween:Date[]|[] = []): IReturnDaysOfMonth[] => {
    /** @desc 0 = Sunday; 1 = Monday; ... 6 = Saturday */
    const aPrevDays = [];
    const aDays = [];
    const aNextDays = [];

    const iFirstDay = getFirstDay(iMonth, iYear);
    const iLastDay = getLastDay(iMonth, iYear);
    const iDaysOfMonth = getDayCountOfMonth(iYear)[iMonth - 1] + 1;

    for (let i = iFirstDay === 0 ? iDaysOfMonth - 6 : (iDaysOfMonth - iFirstDay) + 1; i <= getDayCountOfMonth(iYear)[iMonth - 1]; i++) {
        /** @desc Determine class name for previous days and add days */
        aPrevDays.push({
            day: i,
            month: iMonth - 1,
            year: iYear,
            className: _getClassName({
                year: iYear,
                month: iMonth - 1,
                day: i,
                startDate: dStartDate,
                endDate: dEndDate,
                datesBetween: aDatesBetween,
                prevOrNext: true
            }),
            prevOrNext: true
        });
    }

    for (let i = getDayCountOfMonth(iYear)[iMonth]; i > 0; i--) {
        /** @desc Determine class name for current days of month and add days */
        aDays.unshift({
            day: i,
            month: iMonth,
            year: iYear,
            className: _getClassName({
                year: iYear,
                month: iMonth,
                day: i,
                startDate: dStartDate,
                endDate: dEndDate,
                datesBetween: aDatesBetween
            }),
            prevOrNext: false
        });
    }

    if (iLastDay !== 0) {
        for (let i = 1; i <= 7 - iLastDay; i++) {
            /** @desc Determine class name for following days and add days */
            aNextDays.push({
                day: i,
                month: iMonth + 1,
                year: iYear,
                className: _getClassName({
                    year: iYear,
                    month: iMonth + 1,
                    day: i,
                    startDate: dStartDate,
                    endDate: dEndDate,
                    datesBetween: aDatesBetween,
                    prevOrNext: true
                }),
                prevOrNext: true
            });
        }
    }

    return [...aPrevDays, ...aDays, ...aNextDays];
};

/** @public */
export const isLeapYear = (iYear: number): boolean => (iYear % 4 === 0 && iYear % 100 !== 0 && iYear % 400 !== 0) || (iYear % 100 === 0 && iYear % 400 === 0);

/** @public */
export const compareDates = (dDate1: Date|null|undefined, dDate2: Date|null|undefined): boolean => {
    if (dDate1 instanceof Date && dDate2 instanceof Date) return dDate1.toDateString().valueOf() === dDate2.toDateString().valueOf()
    else return false;
};

/** @private */
const _getClassName = ({ year, month, day, startDate, endDate, datesBetween = [], prevOrNext = false }: IDaysOfMonthClassName): string => {
    debugger;
    /** @desc Check for current date */
    let sClassName = getCurrentDate().getDate() === day && getCurrentYear() === year && getCurrentMonth() === month ? "datepicker-current": String();

    /** @desc Compare start or end date with current date of for loop for displaying as active if the dates are equal */
    if (compareDates(startDate, new Date(year, month, day)) || compareDates(endDate, new Date(year, month, day))) {
        sClassName = "datepicker-active";
    } else {
        for (const dDate of datesBetween) {
            if (compareDates(dDate, new Date(year, month, day))) {
                sClassName = prevOrNext ? "datepicker-hover-prevOrNext" : "datepicker-hover";
            }
        }
    } return sClassName;
};