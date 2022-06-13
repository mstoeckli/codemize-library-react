import styled, { css } from 'styled-components';

/** @private */
interface IStyledMadeInProps {

}

/** @public */
export const StyledMadeIn = styled("div")<IStyledMadeInProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: ${props => props.theme.madeIn.config.margin};
  
  & > svg {
    color: ${props => props.theme.madeIn.colors.icon};
    padding-right: ${props => props.theme.madeIn.config.paddingRightSVG};
  }
  
  & > span.made-in-text {
    font-size: ${props => props.theme.madeIn.config.fontSize};
    font-weight: ${props => props.theme.madeIn.config.fontWeight};
    color: ${props => props.theme.madeIn.colors.text};
  }
`