import styled, { css } from 'styled-components';
import { ButtonType, IButtonProps } from '../types';

/** @public
 *  @desc Initialize style properties and set their default values */
export const getDefaultValues = (props: IButtonProps) => ({
    width: props?.width || "auto",
    minWidth: props?.minWidth || "auto",
    maxWidth: props?.maxWidth || "auto",
    dropdownFloat: props?.dropdownFloat || "left",
    innerType: props?.type || "default",
    disabled: props?.disabled || false,
    hasText: !!props.text,
    timeoutClientRect: props?.timeoutClientRect || 500,
    showBadge: props?.showBadge || false
});

/** @private */
interface IStyledButtonProps {
    width: string,
    minWidth: string,
    maxWidth: string,
    innerType: ButtonType,
    disabled: boolean,
    hasText: boolean,
    showBadge: boolean
}

/** @public */
export const StyledButton = styled("button")<IStyledButtonProps>`
  position: relative;
  display: inline-flex;
  height: ${props => props.theme.button.config.height};
  width: ${props => props.width};
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
  border: 1px solid ${props => props.theme.button.colors.active.border[props.innerType]};
  border-radius: ${props => props.theme.button.config.borderRadius};
  justify-content: ${props => props.theme.button.config.justifyContent};
  align-items: ${props => props.theme.button.config.alignItems};
  padding: ${props => props.theme.button.config.padding};
  cursor: ${props => props.theme.button.config.cursor};
  background: ${props => props.theme.button.colors.active.background[props.innerType]};
  outline: none;
  transition: ${props => props.theme.button.config.transition};

  & > svg {
    font-size: ${props => props.theme.button.config.fontSizeSVG};
    color: ${props => props.theme.button.colors.active.icon[props.innerType]};
    padding-right: ${props => props.hasText ? "0.5rem" : "0"};
    line-height: ${props => props.theme.button.config.height};
  }

  & > span.button-text {
    font-size: ${props => props.theme.button.config.fontSize};
    font-weight: ${props => props.theme.button.config.fontWeight};
    color: ${props => props.theme.button.colors.active.text[props.innerType]};
    line-height: ${props => props.theme.button.config.height};
  }

  ${props => props.disabled ? `cursor: initial;` : ""}

  ${props => props.showBadge && css`
    &::before {
      content: attr(data-badgevalue);
      position: absolute;
      top: ${props => props.theme.button.config.badge.top};
      right: ${props => props.theme.button.config.badge.right};
      width: ${props => props.theme.button.config.badge.width};
      height: ${props => props.theme.button.config.badge.height};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${props => props.theme.button.config.badge.borderRadius};
      background: ${props => props.theme.button.colors.badge.background};
      color: ${props => props.theme.button.colors.badge.color};
      font-size: ${props => props.theme.button.config.badge.fontSize};
      font-weight: ${props => props.theme.button.config.badge.fontWeight};
      border: 1px solid ${props => props.theme.button.colors.badge.border};
      z-index: 9;
    }
  `}
  
  &:hover {
    border-color: ${props => props.theme.button.colors.hover.border[props.innerType]};
    background: ${props => props.theme.button.colors.hover.background[props.innerType]};

    & > span {
      color: ${props => props.theme.button.colors.hover.text[props.innerType]};
    }

    & > svg {
      color: ${props => props.theme.button.colors.hover.icon[props.innerType]};
    }
  }
`