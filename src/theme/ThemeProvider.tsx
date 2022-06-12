import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/Global.styles';

import { ThemeLight } from './ThemeLight';

import { IThemeProviderProps } from '../types';

/** @public */
const Theme = (props: IThemeProviderProps): JSX.Element => {
    return (
        <ThemeProvider
            theme={props?.theme || ThemeLight}>
            <GlobalStyle />
            {props.children}
        </ThemeProvider>
    );
};

export default Theme;