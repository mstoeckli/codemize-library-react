import styled, { css } from 'styled-components';
import { IInputProps } from "../types";

/** @public
 *  @desc Initialize style properties and set their default values */
export const getDefaultValues = (props: IInputProps) => ({
    width: props?.width || "300px",
    minWidth: props?.minWidth || "auto",
    maxWidth: props?.maxWidth || "auto",
    hasLabel: props.hasOwnProperty("label")
});

/** @private */
interface IStyledInputProps {
    width: string,
    minWidth: string,
    maxWidth: string,
    hasLabel: boolean
}

/** @public */
export const StyledInput = styled("div")<IStyledInputProps>`
  position: relative;
  display: flex;
  height: ${props => props.theme.input.config.height};
  width: ${props => props.width};

  & > span.input-label {
    display: flex;
    align-items: ${props => props.theme.input.config.textAlignLabel};;
    text-align: ${props => props.theme.input.config.textAlignLabel};
    padding: ${props => props.theme.input.config.paddingLabel};
    font-size: ${props => props.theme.input.config.fontSizeLabel};
    font-weight: ${props => props.theme.input.config.fontWeightLabel};
    color: ${props => props.theme.input.colors.label.active.color};
    border: 1px solid ${props => props.theme.input.colors.label.active.border};
    background: ${props => props.theme.input.colors.label.active.background};
    transition: background .3s ease, border .3s ease, color .3s ease;
  }
  
  & > input {
    position: relative;
    display: block;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    max-width: ${props => props.maxWidth};
    padding: ${props => props.theme.input.config.paddingInput};
    font-size: ${props => props.theme.input.config.fontSizeInput};
    font-weight: ${props => props.theme.input.config.fontWeightInput};
    border-radius: ${props => props.theme.input.config.borderRadius};
    color: ${props => props.theme.input.colors.input.active.color};
    border: 1px solid ${props => props.theme.input.colors.input.active.border};
    background: ${props => props.theme.input.colors.input.active.background};
    flex: 1 1 auto;
    margin-top: 0;
    margin-bottom: 0;
    transition: border .3s ease;
    
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props => props.theme.input.colors.input.active.placeholder};
      font-weight: ${props => props.theme.input.config.fontWeightInputPlaceholder};
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props => props.theme.input.colors.input.active.placeholder};
      font-weight: ${props => props.theme.input.config.fontWeightInputPlaceholder};
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props => props.theme.input.colors.input.active.placeholder};
      font-weight: ${props => props.theme.input.config.fontWeightInputPlaceholder};
    }
    

    &:hover,
    &:focus {
      outline: none;
      border-color: ${props => props.theme.input.colors.input.hover.border};;
    }
  }
  
  & > span.input-label, & input {
    white-space: nowrap;
    
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    
    &:first-child {
      ${props => props.hasLabel ? css`border-radius: ${props => props.theme.input.config.borderRadius} 0 0 ${props => props.theme.input.config.borderRadius};` : css`border-radius: ${props => props.theme.input.config.borderRadius};`};
    }
    
    &:last-child {
      ${props => props.hasLabel ? css`border-radius: 0 ${props => props.theme.input.config.borderRadius} ${props => props.theme.input.config.borderRadius} 0;` : css`border-radius: ${props => props.theme.input.config.borderRadius};`};
    }
    
    &:not(:first-child) {
      margin-left: -1px;
    }
  }
  
  &:hover,
  &:focus-within {
    & > span.input-label {
      color: ${props => props.theme.input.colors.label.hover.color};
      background: ${props => props.theme.input.colors.label.hover.background};
      border-color: ${props => props.theme.input.colors.label.hover.border};
    }
  }
`