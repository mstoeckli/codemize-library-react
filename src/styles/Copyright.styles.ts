import styled, { css } from 'styled-components';

/** @private */
interface IStyledCopyrightProps {

}

/** @public */
export const StyledCopyright = styled("p")<IStyledCopyrightProps>`
  font-size: ${props => props.theme.copyright.config.fontSize};
  font-weight: ${props => props.theme.copyright.config.fontWeight};
  color: ${props => props.theme.copyright.colors.color};
`