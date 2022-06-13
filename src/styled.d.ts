import 'styled-components';
import {
    ButtonColors, ButtonConfigTheme,
    DropdownConfigTheme,
    CopyrightConfigTheme,
    SearchColors, SearchConfigTheme,
    LoaderConfigProps,
    MadeInConfigTheme,
    InputColors, InputConfigTheme,
} from './types';

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
        },
        search: {
            colors: {
                active: SearchColors,
                hover: SearchColors
            },
            config: SearchConfigTheme
        },
        loader: {
            colors: {
                backgroundContainer: string,
                backgroundLoaderTile: string,
                backgroundLoaderTileActive: string,
                backgroundLoaderTileFolding: string
            }
            config: LoaderConfigProps
        },
        madeIn: {
            colors: {
                text: string,
                icon: string
            },
            config: MadeInConfigTheme
        },
        input: {
            colors: {
                label: {
                    active: InputColors,
                    hover: InputColors
                },
                input: {
                    active: InputColors,
                    hover: InputColors
                }
            },
            config: InputConfigTheme
        }
    }
}