import styled, { css } from 'styled-components';

import { AlertDialogType, IAlertDialogProps } from "../types";

/** @public
 *  @desc Initialize style properties and set their default values */
export const getDefaultValues = (props: IAlertDialogProps) => ({
    height: props?.height || "auto",
    width: props?.width || "auto",
    top: props?.top || "0",
    left: props?.left || "0",
    right: props?.right || "0",
    bottom: props?.bottom || "0",
    dialog: {
        width: props?.dialog?.width || "350px",
        minWidth: props?.dialog?.minWidth || "300px",
        maxWidth: props?.dialog?.maxWidth || "400px",
        type: props?.dialog?.type || "information",
    }
});

/** @private */
interface IStyledAlertDialogProps {
    state: string,
    height: string,
    width: string,
    top: string,
    left: string,
    right: string,
    bottom: string,
    dialog: {
        width: string,
        minWidth: string,
        maxWidth: string,
        type: AlertDialogType,
    }
}

/** @public */
export const StyledAlertDialog = styled("div")<IStyledAlertDialogProps>`
  display: ${props => props.state || "flex"};
  position: fixed;
  height: ${props => props.height};
  width: ${props => props.width};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  background: ${props => props.theme.alertDialog.colors.backgroundContainer};
  z-index: ${props => props.theme.alertDialog.config.zIndex};
  
  & .dialog {
    display: ${props => props.state || "flex"};
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: ${props => props.dialog.width};
    min-width: ${props => props.dialog.minWidth};
    max-width: ${props => props.dialog.maxWidth};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${props => props.theme.alertDialog.config.borderRadius};
    padding: ${props => props.theme.alertDialog.config.padding};
    box-shadow: ${props => props.theme.alertDialog.config.boxShadow};
    background-color: ${props => props.theme.alertDialog.colors.backgroundDialog};
    
    & div.alert-dialog-type-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${props => props.theme.alertDialog.config.containerIconType.size};
      height: ${props => props.theme.alertDialog.config.containerIconType.size};
      margin: ${props => props.theme.alertDialog.config.containerIconType.margin};
      border-radius: ${props => props.theme.alertDialog.config.containerIconType.borderRadius};
      border: 1px solid ${props => props.theme.alertDialog.colors.containerIconType[props.dialog.type].color};
        
      & > svg {
        width: ${props => props.theme.alertDialog.config.containerIconType.iconSize};
        height: ${props => props.theme.alertDialog.config.containerIconType.iconSize};
        color: ${props => props.theme.alertDialog.colors.containerIconType[props.dialog.type].color};
      }
    }
    
    & svg.alert-dialog-close-icon {
      width: ${props => props.theme.alertDialog.config.containerIconClose.width};
      font-size: ${props => props.theme.alertDialog.config.containerIconClose.fontSize};
      color: ${props => props.theme.alertDialog.colors.containerIconClose.color};
      padding: ${props => props.theme.alertDialog.config.containerIconClose.padding};
      align-self: flex-end;
      background: ${props => props.theme.alertDialog.colors.containerIconClose.background};
      border: ${props => props.theme.alertDialog.config.containerIconClose.border};
      cursor: ${props => props.theme.alertDialog.config.containerIconClose.cursor};
    }
    
    & > h4 {
      width: ${props => props.theme.alertDialog.config.containerTitle.width};
      font-size: ${props => props.theme.alertDialog.config.containerTitle.fontSize};
      font-weight: ${props => props.theme.alertDialog.config.containerTitle.fontWeight};
      color: ${props => props.theme.alertDialog.colors.title};
      text-align: ${props => props.theme.alertDialog.config.containerTitle.textAlign};
      padding: ${props => props.theme.alertDialog.config.containerTitle.padding};
    }
    
    & > span {
      width: ${props => props.theme.alertDialog.config.containerInfo.width};
      font-size: ${props => props.theme.alertDialog.config.containerInfo.fontSize};
      font-weight: ${props => props.theme.alertDialog.config.containerInfo.fontWeight};
      color: ${props => props.theme.alertDialog.colors.info};
      text-align: ${props => props.theme.alertDialog.config.containerInfo.textAlign};
      padding: ${props => props.theme.alertDialog.config.containerInfo.padding};
    }
      
    & div.alert-dialog-buttons,
    & div.alert-dialog-custom-buttons,
    & div.alert-dialog-default-buttons {
      display: flex;
      justify-content: ${props => props.theme.alertDialog.config.containerButtons.justifyContent};
      align-items: ${props => props.theme.alertDialog.config.containerButtons.alignItems};
      gap: ${props => props.theme.alertDialog.config.containerButtons.gap};
      flex-wrap: ${props => props.theme.alertDialog.config.containerButtons.flexWrap};
    }

    & div.alert-dialog-custom-buttons {
      flex-basis: 100%;
    }
      
    & div.alert-dialog-buttons {
      padding: ${props => props.theme.alertDialog.config.containerButtons.padding};
    }
  }
`