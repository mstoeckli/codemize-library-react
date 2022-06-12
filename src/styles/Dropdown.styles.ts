import styled, { css } from 'styled-components';

import { IDropdownProps, DropdownFloat } from '../types';

/** @public
 *  @desc Initialize style properties and set their default values */
export const getDefaultValues = (props: IDropdownProps) => ({
    float: props?.float || "left",
    clientRectWidth: props.clientRectWidth,
    isActive: props?.isActive || false
});

/** @private */
interface IStyledDropdownProps {
    float: DropdownFloat,
    clientRectWidth: number,
    isActive: boolean
}

/** @public */
export const StyledDropdown = styled("div")<IStyledDropdownProps>`
  display: none;
  position: absolute;
  top: ${props => props.theme.dropdown.config.top};
  width: ${props => props.theme.dropdown.config.width};
  min-width: ${props => props.theme.dropdown.config.minWidth};
  max-width: ${props => props.theme.dropdown.config.maxWidth};
  border-radius: ${props => props.theme.dropdown.config.borderRadius};
  border-color: ${props => props.theme.dropdown.colors.borderColor};
  overflow: ${props => props.theme.dropdown.config.overflow};
  box-shadow: ${props => props.theme.dropdown.config.boxShadow};
  padding: ${props => props.theme.dropdown.config.padding};
  opacity: 0;
  transform: translateY(-10px);
  transition: ${props => props.theme.dropdown.config.transition};
  z-index: ${props => props.theme.dropdown.config.zIndex};
  background: ${props => props.theme.dropdown.colors.background};
  
  ${props => props.float === "left" ? css`left: 0;` : css`right: calc(100% - ${props.clientRectWidth}px);`}

  ${props => props.isActive && css`
      display: block !important;
      opacity: 1 !important;
      transform: translateY(0);
  `}
`