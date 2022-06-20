import styled, { css } from 'styled-components';
import { ISearchProps } from "../types";

/** @public
 *  @desc Initialize style properties and set their default values */
export const getDefaultValues = (props: ISearchProps) => ({
    hideIconLeft: props?.hideIconLeft || false,
    hideIconRight: props?.hideIconRight || false
});

/** @private */
interface IStyledSearchProps {
    hideIconLeft: boolean,
    hideIconRight: boolean
}

/** @public */
export const StyledSearch = styled("div")<IStyledSearchProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${props => props.theme.search.config.height};
  width: ${props => props.theme.search.config.width};
  min-width: ${props => props.theme.search.config.minWidth};
  max-width: ${props => props.theme.search.config.maxWidth};
  border: 1px solid ${props => props.theme.search.colors.active.border};
  border-radius: ${props => props.theme.search.config.borderRadius};
  background: ${props => props.theme.search.colors.active.background};
  transition: ${props => props.theme.search.config.transition};

  & > svg {
    font-size: ${props => props.theme.search.config.fontSizeSVG};
    padding: ${props => props.theme.search.config.paddingSVG};
    cursor: ${props => props.theme.search.config.cursor};
  }
  
  & > svg.search-svg-left {
    color: ${props => props.theme.search.colors.active.iconLeft};

    ${props => props.hideIconLeft && css`
      display: none;
    `}
  }
  
  & > svg.search-svg-right {
    color: ${props => props.theme.search.colors.active.iconRight};

    ${props => props.hideIconRight && css`
      display: none;
    `}
  }

  & input.search-input {
    width: 100%;
    height: calc(${props => props.theme.search.config.height} - 2px);
    outline: ${props => props.theme.search.config.outline};
    border: none;
    margin: ${props => props.theme.search.config.marginInput};
    font-size: ${props => props.theme.search.config.fontSizeInput};
    font-weight: ${props => props.theme.search.config.fontWeightInput};
    color: ${props => props.theme.search.colors.active.text};
    background: ${props => props.theme.search.colors.active.background};

    ${props => props.hideIconLeft && css`
      margin-left: ${props => props.theme.search.config.marginInputLeftWithoutIcon} !important;
    `}

    ${props => props.hideIconRight && css`
      margin-right: ${props => props.theme.search.config.marginInputRightWithoutIcon} !important;
    `}
    
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props => props.theme.search.colors.active.placeholder};
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props => props.theme.search.colors.active.placeholder};
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props => props.theme.search.colors.active.placeholder};
    }
  }

  &:focus-within,
  &:hover {
    border-color: ${props => props.theme.search.colors.hover.border};
    background: ${props => props.theme.search.colors.hover.background};

    & > input.search-input {
      color: ${props => props.theme.search.colors.hover.text};
      background: ${props => props.theme.search.colors.hover.background};

      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${props => props.theme.search.colors.hover.placeholder};
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${props => props.theme.search.colors.hover.placeholder};
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
        color: ${props => props.theme.search.colors.hover.placeholder};
      }
    }
    
    & > svg.search-svg-left {
      color: ${props => props.theme.search.colors.hover.iconLeft};
    }

    & > svg.search-svg-right {
      color: ${props => props.theme.search.colors.hover.iconRight};
    }
  }
`