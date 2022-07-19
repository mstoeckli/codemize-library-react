import { createGlobalStyle } from 'styled-components';
import 'typeface-montserrat';

/** @public */
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.global.fontFamily};
  }
`