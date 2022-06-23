import styled, { css } from 'styled-components';
import { IToastProps, ToastType } from "../types";

/** @public
 *  @desc Initialize style properties and set their default values */
export const getDefaultValues = (props: IToastProps) => ({
    top: props?.top || "25px",
    right: props?.right || "25px",
    timeMS: props?.timeMS || 5000,
    type: props?.type || "information"
});

/** @private */
interface IStyledToastProps {
    top: string,
    right: string,
    timeMS: number,
    type: ToastType
}

/** @public */
export const StyledToast = styled("div")<IStyledToastProps>`
  & .toast-container {
    position: absolute;
    top: ${props => props.top};
    right: ${props => props.right};
    border-radius: ${props => props.theme.toast.config.container.borderRadius};
    background: ${props => props.theme.toast.colors.backgroundContainer};
    padding: ${props => props.theme.toast.config.container.padding};
    box-shadow: ${props => props.theme.toast.config.container.boxShadow};
    border-left: ${props => props.theme.toast.config.container.borderLeftSize} solid ${props => props.theme.toast.colors[props.type].color};
    overflow: hidden;
    transform: translateX(calc(100% + ${props => props.right}));
    transition: ${props => props.theme.toast.config.container.transition};
  }
  
  & .toast-active {
    transform: translateX(0%) !important;
  }
  
  & .toast-content{
    display: flex;
    align-items: center;
    overflow: hidden;
        
    & .toast-content-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: ${props => props.theme.toast.config.contentIcon.size};
      width: ${props => props.theme.toast.config.contentIcon.size};
      min-width: ${props => props.theme.toast.config.contentIcon.size};
      min-height: ${props => props.theme.toast.config.contentIcon.size};
      background-color: ${props => props.theme.toast.colors[props.type].color};
      border-radius: ${props => props.theme.toast.config.contentIcon.borderRadius};
            
      & > svg {
        color: ${props => props.theme.toast.colors.colorContentIcon};
        font-size: ${props => props.theme.toast.config.contentIcon.fontSize};
      }
    }
    
    & .toast-content-message{
      display: flex;
      flex-direction: column;
      align-items: ${props => props.theme.toast.config.contentMessage.alignItems};
      min-width: ${props => props.theme.toast.config.contentMessage.minWidth};
      max-width: ${props => props.theme.toast.config.contentMessage.maxWidth};
      margin: ${props => props.theme.toast.config.contentMessage.margin};

      & > h4 {
        font-size: ${props => props.theme.toast.config.contentMessage.fontSizeTitle};
        font-weight: ${props => props.theme.toast.config.contentMessage.fontWeightTitle};
        color: ${props => props.theme.toast.colors.colorContentMessageTitle};
      }

      & > span {
        font-size: ${props => props.theme.toast.config.contentMessage.fontSizeMessage};
        font-weight: ${props => props.theme.toast.config.contentMessage.fontWeightMessage};
        color: ${props => props.theme.toast.colors.colorContentMessageMessage};
      }
    }
  }

  & .toast-actions {
    display: flex;
    flex-wrap: wrap;
    gap: ${props => props.theme.toast.config.contentActions.gap};
    padding-top: ${props => props.theme.toast.config.contentActions.paddingTop};
    padding-left: calc(${props => props.theme.toast.config.contentIcon.size} + ${props => props.theme.toast.config.contentActions.paddingLeft});
  }

  & .toast-close {
    position: absolute;
    top: ${props => props.theme.toast.config.contentClose.top};
    right: ${props => props.theme.toast.config.contentClose.right};
    padding: ${props => props.theme.toast.config.contentClose.padding};
    cursor: ${props => props.theme.toast.config.contentClose.cursor};
    opacity: ${props => props.theme.toast.config.contentClose.opacity};
    color: ${props => props.theme.toast.colors.colorContentClose};
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