import styled, { css } from 'styled-components';
import { ButtonType, IButtonProps } from '../types';

/** @public
 *  @desc Initialize style properties and set their default values */
export const getDefaultValues = (props: IButtonProps) => ({
    dropdownFloat: props?.dropdownFloat || "left",
    innerType: props?.type || "default",
    disabled: props?.disabled || false,
    hasText: !!props.text,
    showBadge: props?.showBadge || false
});

/** @private */
interface IStyledButtonProps {
    innerType: ButtonType,
    disabled: boolean,
    hasText: boolean,
    showBadge: boolean,
    clientRectWidth: number
}

/** @public */
export const StyledButton = styled("button")<IStyledButtonProps>`
  position: relative;
  display: inline-flex;
  height: ${props => props.theme.button.config.height};
  width: ${props => props.theme.button.config.width};
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
    color: ${props => props.theme.button.colors.active.icon[props.innerType]};
    padding-right: ${props => props.hasText ? "0.5rem" : "0"};
  }

  & > span.button-text {
    font-size: ${props => props.theme.button.config.fontSize};
    font-weight: ${props => props.theme.button.config.fontWeight};
    color: ${props => props.theme.button.colors.active.text[props.innerType]};
  }

  ${props => props.disabled ? `cursor: initial;` : ""}

  ${props => props.showBadge && css`
    &::before {
      content: attr(data-badgeValue);
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