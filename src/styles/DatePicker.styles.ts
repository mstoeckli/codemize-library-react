import styled, { css } from 'styled-components';

/** @private */
interface IStyledDatePickerProps {}

/** @public */
export const StyledDatePicker = styled("div")<IStyledDatePickerProps>`
  & .datepicker-calendar {
    & header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 275px;

      & button {
        height: ${props => props.theme.datePicker.config.header.height};

        & span.button-text {
          line-height: ${props => props.theme.datePicker.config.header.height};
        }
      }

      & svg {
        color: ${props => props.theme.datePicker.colors.header.iconDefault};
      }
      
      & .datepicker-calendar-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${props => props.theme.datePicker.config.header.borderRadius};
        background: ${props => props.theme.datePicker.colors.header.backgroundColorHeaderNav};
        width: ${props => props.theme.datePicker.config.header.height};
        height: ${props => props.theme.datePicker.config.header.height};
        cursor: pointer;
      }
      
      & .datepicker-calendar-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
      }
    }
    
    & main {
      padding: ${props => props.theme.datePicker.config.main.padding};
      
      & .datepicker-calendar-week {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        place-items: center;
        padding: ${props => props.theme.datePicker.config.main.paddingWeek};
        
        & span {
          font-size: ${props => props.theme.datePicker.config.main.fontSizeWeek};
          font-weight: ${props => props.theme.datePicker.config.main.fontWeightWeek};
          color: ${props => props.theme.datePicker.colors.main.colorWeek};
        }
      }

      & .datepicker-calendar-days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 2px;

        & span {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: ${props => props.theme.datePicker.config.main.borderRadiusDay};
          font-size: ${props => props.theme.datePicker.config.main.fontSizeDay};
          font-weight: ${props => props.theme.datePicker.config.main.fontWeightDay};
          background: ${props => props.theme.datePicker.colors.main.active.backgroundDay};
          color: ${props => props.theme.datePicker.colors.main.active.colorDay};
          padding: ${props => props.theme.datePicker.config.main.paddingDay};
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;

          &:hover {
            font-weight: ${props => props.theme.datePicker.config.main.fontWeightDayHover};
            background: ${props => props.theme.datePicker.colors.main.hover.backgroundDay};
            color: ${props => props.theme.datePicker.colors.main.hover.colorDay};
          }
        }

        & .datepicker-current,
        & .datepicker-active {
          display: inline-grid;
        }

        & .datepicker-active {
          background: ${props => props.theme.datePicker.colors.main.backgroundActive};
          color: ${props => props.theme.datePicker.colors.main.colorActive};
          font-weight: ${props => props.theme.datePicker.config.main.fontWeightActive};
        }

        & .datepicker-current {
          background: ${props => props.theme.datePicker.colors.main.backgroundCurrent};
          color: ${props => props.theme.datePicker.colors.main.colorCurrent};
          font-weight: ${props => props.theme.datePicker.config.main.fontWeightCurrent};
        }

        & .datepicker-prevOrNext {
          color: ${props => props.theme.datePicker.colors.main.colorPrevOrNext};
        }

        & .datepicker-hover {
          background: ${props => props.theme.datePicker.colors.main.backgroundRangeSelectionHover};
        }

        & .datepicker-hover-prevOrNext {
          background: ${props => props.theme.datePicker.colors.main.backgroundRangeSelectionPrevOrNextHover};
        }
      }
      
      & .datepicker-calendar-months,  
      & .datepicker-calendar-years {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: grid;
        grid-template-columns: repeat(3, auto);
        background: ${props => props.theme.datePicker.colors.main.active.backgroundMonthYear};
        padding: 8px;
        gap: 8px;
        z-index: 1;
        transform: scale(1.5);
        visibility: hidden;
        pointer-events: none;
        transition: all 0.2s ease-in-out;

        & > span {
          display: grid;
          place-items: center;
          cursor: pointer;
          color: ${props => props.theme.datePicker.colors.main.active.colorMonthYear};
          font-size: ${props => props.theme.datePicker.config.main.fontSizeMonthYear};
          font-weight: ${props => props.theme.datePicker.config.main.fontWeightMonthYear};
          border-radius: ${props => props.theme.datePicker.config.main.borderRadiusMonthYear};
          padding-left: 0;

          &:hover {
            background: ${props => props.theme.datePicker.colors.main.hover.backgroundMonthYear};
            color: ${props => props.theme.datePicker.colors.main.hover.colorMonthYear};
          }
        }
      }

      & .datepicker-calendar-months.show,
      & .datepicker-calendar-years.show {
        transform: scale(1);
        visibility: visible;
        pointer-events: visible;
      }
    }
    
    & footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      width: 275px;

      & div, button {
        width: 100%;
      }
    }
  }
`