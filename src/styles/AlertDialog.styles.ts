import styled, { css } from 'styled-components';

import { AlertDialogType, IAlertDialogProps } from "../types";

/** @public
 *  @desc Initialize style properties and set their default values */
export const getDefaultValues = (props: IAlertDialogProps) => ({
    type: props?.type || "information"
});

/** @private */
interface IStyledAlertDialogProps {
    state: string,
    type: AlertDialogType
}

/** @public */
export const StyledAlertDialog = styled("div")<IStyledAlertDialogProps>`
  display: ${props => props.state || "flex"};
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 300px;
  min-width: 300px;
  max-width: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 16px;
  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;
  background-color: #fff;
  z-index: 99;

  & div.alert-dialog-type-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-bottom: 18px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.alertDialog.colors[props.type].color};
    
    & > svg {
      width: 24px;
      height: 24px;
      color: ${props => props.theme.alertDialog.colors[props.type].color};
    }
  }

  & svg.alert-dialog-close-icon {
    width: 10px;
    font-size: 1rem;
    color: #a9b2bb;
    align-self: flex-end;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  & > h4 {
    font-size: 0.85rem;
    font-weight: 600;
    color: ${props => props.theme.alertDialog.colors.title};
    text-align: center;
    margin-bottom: 12px;
  }

  & > span {
    font-size: 0.775rem;
    color: ${props => props.theme.alertDialog.colors.info};
    text-align: center;
  }
  
  & div.alert-dialog-buttons,
  & div.alert-dialog-custom-buttons,
  & div.alert-dialog-default-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  
  & div.alert-dialog-buttons {
    margin-top: 18px;
  }
`