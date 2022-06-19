import styled, { css } from 'styled-components';

/** @private */
interface IStyledInputProps {
    hasLabel: boolean
}

/** @public */
export const StyledInput = styled("div")<IStyledInputProps>`
  position: relative;
  display: flex;
  width: ${props => props.theme.input.config.width};

  & > span.input-label {
    display: flex;
    align-items: ${props => props.theme.input.config.textAlignLabel};;
    text-align: ${props => props.theme.input.config.textAlignLabel};
    padding: ${props => props.theme.input.config.paddingLabel};
    font-size: ${props => props.theme.input.config.fontSizeLabel};
    font-weight: ${props => props.theme.input.config.fontWeightLabel};
    line-height: ${props => props.theme.input.config.lineHeight};
    color: ${props => props.theme.input.colors.label.active.color};
    border: 1px solid ${props => props.theme.input.colors.label.active.border};
    background: ${props => props.theme.input.colors.label.active.background};
    transition: background .3s ease, border .3s ease, color .3s ease;
  }
  
  & > input {
    position: relative;
    display: block;
    width: ${props => props.theme.input.config.width};
    min-width: ${props => props.theme.input.config.minWidth};
    max-width: ${props => props.theme.input.config.maxWidth};
    padding: ${props => props.theme.input.config.paddingInput};
    line-height: ${props => props.theme.input.config.lineHeight};
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

    &::placeholder {
      color: ${props => props.theme.input.colors.input.active.placeholder};
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