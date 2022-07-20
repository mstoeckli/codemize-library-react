import React, { useState, useRef, forwardRef } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';

import { StyledDatePicker } from '../styles/DatePicker.styles';

import { IDatePickerProps, IDatePickerStateProps } from '../types';

import { Button } from './';

import { getStartEndOfWeek, getDaysOfWeek, getDaysOfMonth, getCurrentMonth, getCurrentYear, getMonthTranslationKey, getDatesBetween, getYears, getMonths } from '../helpers';

import { ThemeProvider } from '../theme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';

/** @public */
const DatePicker = forwardRef<HTMLDivElement, IDatePickerProps>((props, ref): JSX.Element => {
    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @desc Defines the initial state of a datepicker */
    const oInitialState: IDatePickerStateProps = {
        month: props?.startDate ? props.startDate.getMonth() : getCurrentMonth(),
        year: props?.startDate ? props.startDate.getFullYear() : getCurrentYear(),
        startDate: props?.startDate || null,
        endDate: props?.endDate || null,
        initStartDate: props?.startDate || null,
        initEndDate: props?.endDate || null,
        iso8601: props?.iso8601 || true,
        datesBetween: props?.startDate && props?.endDate ? getDatesBetween(props.startDate, props.endDate) : [],
    }

    /** @desc Returns a stateful value, and a function to update it. -> Update datepicker state */
    const [ datePicker, setDatePicker ] = useState<IDatePickerStateProps>(oInitialState);

    const monthsRefObj = useRef(null);
    const yearsRefObj = useRef(null);

    /** @private */
    const _onClickApply = (): void => props.apply.onClick(datePicker.startDate, datePicker.endDate);

    /** @private */
    const _onClickReset = (): void => {
        setDatePicker((oDatePicker) => ({
            ...oDatePicker,
            startDate: datePicker.initStartDate,
            endDate: datePicker.initEndDate,
            datesBetween: []
        }));

        /** @desc Call callback function for custom handling */
        props.reset.onClick(datePicker.initStartDate, datePicker.initEndDate)
    };

    /** @private */
    const _onClickPrev = (): void => {
        setDatePicker((oDatePickerProps) => ({
            ...oDatePickerProps,
            month: oDatePickerProps.month - 1 < 0 ? 11 : oDatePickerProps.month - 1,
            year: oDatePickerProps.month - 1 < 0 ? oDatePickerProps.year - 1 : oDatePickerProps.year
        }));
    };

    /** @private */
    const _onClickNext = (): void => {
        setDatePicker((oDatePickerProps) => ({
            ...oDatePickerProps,
            month: oDatePickerProps.month + 1 > 11 ? 0 : oDatePickerProps.month + 1,
            year: oDatePickerProps.month + 1 > 11 ? oDatePickerProps.year + 1 : oDatePickerProps.year
        }));
    };

    /** @private
     *  @ts-ignore */
    const _onClickYear = (): void => yearsRefObj.current.classList.add("show");

    /** @private
     *  @ts-ignore */
    const _onClickMonth = (): void => monthsRefObj.current.classList.add("show");

    /** @private */
    const _onClickToday = (): void => setDatePicker(() => (oInitialState));

    /** @private */
    const _onClickDay = (oEvt:React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
        /** @desc Determine the internal date of span element
         *  @ts-ignore */
        const dInternalDate = new Date(oEvt.currentTarget.getAttribute("data-internaldate"));
        if ((datePicker.startDate && datePicker.endDate) || (datePicker.startDate && dInternalDate < datePicker.startDate)) setDatePicker((oDatePickerProps) => ({
            ...oDatePickerProps,
            startDate: dInternalDate,
            endDate: null,
            datesBetween: []
        }));
        else setDatePicker((oDatePickerProps) => ({
            ...oDatePickerProps,
            startDate: !datePicker.startDate && !datePicker.endDate ? dInternalDate : datePicker.startDate,
            endDate: datePicker.startDate && !datePicker.endDate ? dInternalDate : datePicker.endDate,
            datesBetween: datePicker.startDate && datePicker.endDate ? [] : datePicker.datesBetween
        }));
    };

    /** @private */
    const _onClickMouseOver = (oEvt:React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
        if (datePicker.startDate && !datePicker.endDate) {
            /** @desc Get internal date for calculating days between and update state
             *  @ts-ignore */
            const dEndDate = new Date(oEvt.currentTarget.getAttribute("data-internaldate"));
            setDatePicker((oDatePickerProps) => ({
                ...oDatePickerProps,
                datesBetween: getDatesBetween(datePicker.startDate ? datePicker.startDate : dEndDate, dEndDate)
            }));
        }
    };

    /** @private */
    const _getText = (): string => {
        if (datePicker.startDate !== null && datePicker.endDate === null) return `${datePicker.startDate.toLocaleDateString()}`
        else if (datePicker.startDate !== null && datePicker.endDate !== null ) return `${datePicker.startDate.toLocaleDateString()} - ${datePicker.endDate.toLocaleDateString()}`;
        else {
            /** @desc Determine first and last day of week for building button text */
            let { first, last } = getStartEndOfWeek();
            if (datePicker.iso8601) {
                first.setDate(first.getDate() + 1);
                last.setDate(last.getDate() + 1);
            } return `${first.toLocaleDateString()} - ${last.toLocaleDateString()}`;
        }
    };

    /** @private */
    const _addMonths = (): JSX.Element[] => {
        const aMonths = [];
        for (let iMonth of getMonths()) {
            aMonths.push(<span
                onClick={() => {
                    /** @ts-ignore */
                    monthsRefObj.current.classList.remove("show");
                    setDatePicker((oDatePicker) => ({
                        ...oDatePicker,
                        month: iMonth,
                    }));
                }}>
                {t(`Global.Months.${getMonthTranslationKey(iMonth)}`)}
            </span>);
        } return aMonths;
    }

    /** @private */
    const _addYears = (): JSX.Element[] => {
        const aYears = [];
        for (let iYear of getYears(datePicker.year)) {
            aYears.push(<span
                onClick={() => {
                    /** @ts-ignore */
                    yearsRefObj.current.classList.remove("show");
                    setDatePicker((oDatePicker) => ({
                        ...oDatePicker,
                        year: iYear,
                    }));
                }}>
                {iYear}
            </span>);
        } return aYears;
    };

    /** @private */
    const _addDropdownContent = (): JSX.Element => (
        <div className="datepicker-calendar">
            {_addCalendarHeader()}
            {_addCalendarMain()}
            {_addCalendarFooter()}
        </div>
    );

    /** @private */
    const _addCalendarHeader = (): JSX.Element => (
        <header>
            <div
                className="datepicker-calendar-nav"
                onClick={_onClickPrev}>
                {props?.iconSrcNavLeft || <FontAwesomeIcon icon={FaSolidIcons["faAngleLeft"]}/>}
            </div>
            {_addHeaderButtons()}
            <div
                className="datepicker-calendar-nav"
                onClick={_onClickNext}>
                {props?.iconSrcNavRight || <FontAwesomeIcon icon={FaSolidIcons["faAngleRight"]} />}
            </div>
        </header>
    );

    /** @private */
    const _addCalendarMain = (): JSX.Element => (
        <main>
            <div>
                <div className="datepicker-calendar-week">
                    {getDaysOfWeek(datePicker.iso8601).map((sWeekDay) => (
                        <span>{t(sWeekDay)}</span>
                    ))}
                </div>
                <div className="datepicker-calendar-days">
                    {getDaysOfMonth(datePicker.year, datePicker.month, datePicker.startDate, datePicker.endDate, datePicker.datesBetween).map(({ day, month, year, className, prevOrNext }) => (
                        <span
                            data-internaldate={new Date(year, month, day)}
                            className={prevOrNext ? className.includes("datepicker-hover-prevOrNext") || className.includes("datepicker-active") ? className : "datepicker-prevOrNext" : className}
                            onClick={_onClickDay}
                            onMouseOver={_onClickMouseOver}>
                            {day}
                        </span>
                    ))}
                </div>
            </div>
            <div
                ref={monthsRefObj}
                className="datepicker-calendar-months">
                {_addMonths()}
            </div>
            <div
                ref={yearsRefObj}
                className="datepicker-calendar-years">
                {_addYears()}
            </div>
        </main>
    );

    /** @private */
    const _addCalendarFooter = (): JSX.Element => (
        <footer>
            <Button
                text={props.reset?.text || t("DatePicker.Reset.text")}
                type={props.reset?.type || "error"}
                iconSrc={props.reset?.iconSrc || <FontAwesomeIcon icon={FaSolidIcons["faCalendarXmark"]} /> }
                onClick={_onClickReset} />
            <Button
                text={props.apply?.text || t("DatePicker.Apply.text")}
                type={props.apply?.type || "create"}
                iconSrc={props.apply?.iconSrc || <FontAwesomeIcon icon={FaSolidIcons["faCalendarCheck"]} /> }
                onClick={_onClickApply} />
        </footer>
    );

    /** @private */
    const _addHeaderButtons = (): JSX.Element => (
        <div className="datepicker-calendar-buttons">
            <Button
                text={t(`Global.Months.${getMonthTranslationKey(datePicker.month)}`)}
                onClick={_onClickMonth} />
            <Button
                text={datePicker.year.toString()}
                onClick={_onClickYear} />
            <Button
                text={t("DatePicker.CalendarButtons.today")}
                onClick={_onClickToday} />
        </div>
    );

    return (
        <ThemeProvider theme={props?.theme}>
            <I18nextProvider i18n={i18n}>
                <StyledDatePicker ref={ref}>
                    <Button
                        width={props?.width}
                        minWidth={props?.minWidth}
                        maxWidth={props?.maxWidth}
                        text={props?.text || _getText()}
                        iconSrc={props?.iconSrc || <FontAwesomeIcon icon={FaSolidIcons["faCalendarDay"]} />}
                        dropdownContent={_addDropdownContent()}
                        onClick={() => {}} />
                </StyledDatePicker>
            </I18nextProvider>
        </ThemeProvider>
    )
});

export default DatePicker;