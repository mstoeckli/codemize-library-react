import styled, { css } from 'styled-components';
import {INavItemProps} from "../types";

/** @public
 *  @desc Initialize style properties and set their default values */
export const getDefaultValues = (props: INavItemProps) => ({
    iconColor: props?.icon?.color || "#455a64"
});

/** @private */
interface IStyledNavItemProps {
    iconColor: string
}

/** @public */
export const StyledNavItem = styled("div")<IStyledNavItemProps>`
  cursor: pointer;
  
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    height: 32px;
    
    & svg {
      font-size: 1.25rem;
      color: ${props => props.iconColor};
    }

    & span {
      font-size: 0.8rem;
      font-weight: 400;
      color: #3b4148;
      white-space: pre;
    }
  }
  
  & .navitem-logo {
    display: flex;
    align-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    
    & img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  
  & .navitem-separator {
    border-right: 1px solid #e9e9e9;
    border-radius: 6px;
    height: 80%;
  }

  & .navitem-title {
    & span {
      font-weight: 500;
      font-size: 0.85rem;
      color: #3b4148;
      cursor: default;
    }
  }
  
  &:hover {
    & svg,
    & span {
      color: #688ccd; 
    }

    & .navitem-title {
      & svg,
      & span {
        color: #3b4148;
      }
    }
  }
`