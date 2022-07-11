import styled, { css } from 'styled-components';

/** @private */
interface IStyledDatePickerProps {

}

/** @public */
export const StyledDatePicker = styled("div")<IStyledDatePickerProps>`
  & .datepicker-calendar {
    & header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 275px;

      & button {
        height: 24px;

        & span.button-text {
          line-height: 24px;
        }
      }

      & svg {
        color: #3b4148;
      }
      
      & .datepicker-calendar-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        background-color: #f9f9f9;
        width: 24px;
        height: 24px;
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
      padding: 0.5rem 0;

      & span {
        font-size: 0.75rem;
        font-weight: 600;
        color: #3b4148;
      }
      
      & .datepicker-calendar-week {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        place-items: center;
        padding-bottom: 0.5rem;
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
          border-radius: 6px;
          font-weight: 500;
          color: #3b4148;
          padding: 5px;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;

          &:hover {
            font-weight: 600;
            background: #e0f3ff;
            color: #3f6ad8;
          }
        }

        & .datepicker-current,
        & .datepicker-active {
          display: inline-grid !important;
          background: #e0f3ff;
          color: #3f6ad8;
          font-weight: 600;
        }

        & .datepicker-current {
          background: #5379cd;
          color: #fff;
        }

        & .datepicker-prevOrNext {
          color: #e2e2e2;
        }

        & .datepicker-hover {
          background: #f1f1f1;
        }

        & .datepicker-hover-prevOrNext {
          background: #f8f8f8;
        }
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