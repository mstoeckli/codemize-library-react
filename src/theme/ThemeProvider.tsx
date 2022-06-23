import React, { useEffect } from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyle } from '../styles/Global.styles';

import { ThemeLight } from './ThemeLight';

import { IThemeProviderProps } from '../types';

/** @public */
const Theme = (props: IThemeProviderProps): JSX.Element => {
    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        if (props?.theme) {
            /** @desc Update theme property with custom value */
            _replaceThemeProperty(ThemeLight, props.theme);
        }
    }, [props?.theme]);

    /** @private */
    const _replaceThemeProperty = (target: DefaultTheme|{[key:string]: string|number|boolean}|any, custom: DefaultTheme) => {
        for (const [ key, value ] of Object.entries(custom)) {
            /** @desc Check if variable value is a custom set value or another nested object */
            if (["string", "number", "boolean"].includes(typeof value)) target[key] = value;
            else {
                if (typeof value === "object" && value !== null) {
                    _replaceThemeProperty(target[key], value);
                }
            }
        }
    };

    return (
        <ThemeProvider
            theme={ThemeLight}>
            <GlobalStyle />
            {props.children}
        </ThemeProvider>
    );
}

export default Theme;