import 'styled-components';
import { ButtonColors, ButtonConfigTheme, DropdownConfigTheme, CopyrightConfigTheme } from './types';

 /** @desc DefaultTheme is being used as an interface of props.theme out of the box.
 *        By default the interface DefaultTheme is empty so that's why we need to extend it. */
declare module 'styled-components' {
    export interface DefaultTheme {
        global: {
            fontFamily: string,
        },
        button: {
            colors: {
                active: ButtonColors,
                hover: ButtonColors
            },
            config: ButtonConfigTheme
        },
        dropdown: {
            colors: {
                borderColor: string,
                background: string
            },
            config: DropdownConfigTheme
        },
        copyright: {
            colors: {
                color: string
            },
            config: CopyrightConfigTheme
        }
    }
}