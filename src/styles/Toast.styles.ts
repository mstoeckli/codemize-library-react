import styled, { css } from 'styled-components';
import { IToastProps, ToastType } from "../types";

/** @public
 *  @desc Initialize style properties and set their default values */
export const getDefaultValues = (props: IToastProps) => ({
    timeMS: props?.timeMS || 5000,
    type: props?.type || "information"
});

/** @private */
interface IStyledToastProps {
    timeMS: number,
    type: ToastType
}

/** @public */
export const StyledToast = styled("div")<IStyledToastProps>`
  & .toast-container {
    position: absolute;
    top: 25px;
    right: 30px;
    border-radius: 12px;
    background: #fff;
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
    border-left: 6px solid ${props => props.theme.toast.colors[props.type].color};
    overflow: hidden;
    transform: translateX(calc(100% + 30px));
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
  }
  
  & .toast-active {
    transform: translateX(0%) !important;
  }
  
  & .toast-content{
    display: flex;
    align-items: center;
        
    & .toast-content-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      width: 28px;
      min-width: 28px;
      min-height: 28px;
      background-color: ${props => props.theme.toast.colors[props.type].color};
      border-radius: 50%;
            
      & > svg {
        color: #fff;
        font-size: 1rem;
      }
    }
    
    & .toast-content-message{
      display: flex;
      flex-direction: column;
      min-width: 275px;
      max-width: 300px;
      margin: 0 8px;

      & > h4 {
        font-size: 0.75rem;
        font-weight: 600;
        color: #3b4148;
      }

      & > span {
        font-size: 0.75rem;
        color: #767676;
      }
    }
  }

  & .toast-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 8px;
    padding-left: calc(28px + 8px);
  }

  & .toast-close {
    position: absolute;
    top: 4px;
    right: 12px;
    padding: 4px;
    cursor: pointer;
    opacity: 0.7;
    color: #a9b2bb;
  }
  
  & .toast-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: #fff;
    
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background: ${props => props.theme.toast.colors[props.type].color};
    }
  }

  & .toast-progress-active:before{
    animation: progress ${props => props.timeMS}ms linear forwards;
  }

  @keyframes progress {
    100%{
      right: 100%;
    }
  }
`