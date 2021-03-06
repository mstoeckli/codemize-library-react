import 'styled-components';
import {
    ButtonColors, ButtonConfigTheme,
    DropdownConfigTheme,
    CopyrightConfigTheme,
    SearchColors, SearchConfigTheme,
    LoaderConfigProps,
    MadeInConfigTheme,
    InputColors, InputConfigTheme,
    AlertDialogConfigTheme,
    ToastConfigTheme,
    DatePickerConfigTheme, DatePickerColors
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
                hover: ButtonColors,
                badge: {
                    background: string,
                    color: string,
                    border: string
                }
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
        },
        alertDialog: {
            colors: {
                title: string,
                info: string,
                backgroundContainer: string,
                backgroundDialog: string,
                containerIconType: {
                    information: {
                        color: string
                    },
                    success: {
                        color: string
                    },
                    warning: {
                        color: string
                    },
                    error: {
                        color: string
                    }
                },
                containerIconClose: {
                    color: string,
                    background: string
                }
            },
            config: AlertDialogConfigTheme
        },
        toast: {
            colors: {
                backgroundContainer: string,
                colorContentIcon: string,
                colorContentMessageTitle: string,
                colorContentMessageMessage: string,
                colorContentClose: string,
                information: {
                    color: string
                },
                success: {
                    color: string
                },
                warning: {
                    color: string
                },
                error: {
                    color: string
                }
            },
            config: ToastConfigTheme
        },
        datePicker: {
            colors: {
                header: {
                    iconDefault: string,
                    backgroundColorHeaderNav: string
                }
                main: {
                    colorWeek: string,
                    colorActive: string,
                    backgroundActive: string,
                    colorCurrent: string,
                    backgroundCurrent: string,
                    colorPrevOrNext: string,
                    backgroundRangeSelectionHover: string,
                    backgroundRangeSelectionPrevOrNextHover: string,
                    active: DatePickerColors,
                    hover: DatePickerColors
                }
            },
            config: DatePickerConfigTheme
        }
    }
}

