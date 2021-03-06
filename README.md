# Codemize Library React
codemize-react-library is a fully customizable react component library for creating your own saas in a shorter time period.
The library at the moment is in a beta phase and possible changes are reserved. 

# Compatibility
This package is compatible with React 16.8. and higher
> **Install**: npm install --save react@^16.8.0 react-dom@^16.8.0

# Fully available Components incl. custom theming
AlertDialog.tsx <br />
Button.tsx <br />
Input.tsx <br />
Search.tsx <br />
Copyright.tsx <br />
Loader.tsx <br />
Dropdown.tsx <br />
MadeIn.tsx <br />
Toast.tsx <br />

> New in V0.2.0:
 
DatePicker.tsx <br />

# Fully available hooks 
ClickOutside.tsx -> useClickOutside 

# In Release v0.3.0
ToggleSwitch.tsx <br />
Checkbox.tsx
Sidebar.tsx <br />
Header.tsx <br />
Footer.tsx

# Future planned components
NavBar.tsx <br />
NavBarItem.tsx <br />
Table.tsx <br />
Calendar.tsx <br />
Cards.tsx <br />
Features.tsx <br />
NotFound.tsx

# Theme 
The theme is customizable and every component has a property theme for changing the default.
``` json
    global: {
        fontFamily: '"Montserrat", Helvetica, Arial, sans-serif',
    },
    button: {
        colors: {
            active:  {
                text: {
                    default: "#3b4148",
                    success: "#3ca987",
                    warning: "#edc32c",
                    error: "#a93c3c",
                    create: "#fff",
                },
                icon: {
                    default: "#455a64",
                    success: "#3ca987",
                    warning: "#edc32c",
                    error: "#a93c3c",
                    create: "#fff"
                },
                border: {
                    default: "#e9e9e9",
                    success: "#3ca987",
                    warning: "#edc32c",
                    error: "#a93c3c",
                    create: "#3f6ad8"
                },
                background: {
                    default: "#fff",
                    success: "#fff",
                    warning: "#fff",
                    error: "#fff",
                    create: "#688ccd"
                }
            },
            hover: {
                text: {
                    default: "#3f6ad8",
                    success: "#3fd8aa",
                    warning: "#d8d13f",
                    error: "#d83f3f",
                    create: "#fff"
                },
                icon: {
                    default: "#3f6ad8",
                    success: "#3fd8aa",
                    warning: "#d8d13f",
                    error: "#d83f3f",
                    create: "#fff"
                },
                border: {
                    default: "#3f6ad8",
                    success: "#3fd8aa",
                    warning: "#d8d13f",
                    error: "#d83f3f",
                    create: "#3f6ad8"
                },
                background: {
                    default: "#e0f3ff",
                    success: "#e0ffee",
                    warning: "#fbffe0",
                    error: "#ffe0e0",
                    create: "#5379cd"
                }
            },
            badge: {
                background: "#c65454",
                color: "#fff",
                border: "#fff"
            }
        },
        config: {
            height: "32px",
            borderRadius: "6px",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
            cursor: "pointer",
            fontWeight: 500,
            fontSize: "0.8rem",
            fontSizeSVG: "1rem",
            transition: "all 0.3s ease",
            badge: {
                top: "-0.65rem",
                right: "-0.65rem",
                width: "1.25rem",
                height: "1.25rem",
                borderRadius: "50%",
                fontSize: "0.55rem",
                fontWeight: 500
            }
        }
    },
    dropdown: {
        colors: {
            borderColor: "#bfbfbf",
            background: "#fff"
        },
        config: {
            top: "10px",
            width: "100%",
            minWidth: "200px",
            maxWidth: "300px",
            borderRadius: "6px",
            overflow: "hidden",
            boxShadow: "rgba(0, 0, 0, 0.24) 0 3px 8px",
            padding: "8px",
            transition: "all 0.2s ease-in-out",
            zIndex: 9
        }
    },
    copyright: {
        colors: {
            color: "#767676"
        },
        config: {
            fontSize: "0.65rem",
            fontWeight: 500
        }
    },
    search: {
        colors: {
            active: {
                text: "#3b4148",
                border: "#e9e9e9",
                iconLeft: "#455a64",
                iconRight: "#a93c3c",
                background: "#fff",
                placeholder: "#cbd1dc"
            },
            hover: {
                text: "#3b4148",
                border: "#3f6ad8",
                iconLeft: "#688ccd",
                iconRight: "#a93c3c",
                background: "#fff",
                placeholder: "#688ccd"
            }
        },
        config: {
            height: "32px",
            borderRadius: "6px",
            fontSizeSVG: "1rem",
            paddingSVG: "0 0.5rem 0 0.5rem",
            fontSizeInput: "0.775rem",
            fontWeightInput: 500,
            fontWeightPlaceholder: 400,
            marginInput: "0 0.5rem",
            marginInputLeftWithoutIcon: "0.75rem",
            marginInputRightWithoutIcon: "0.75rem",
            outline: "none",
            transition: "all 0.3s ease",
            cursor: "pointer"
        }
    },
    loader: {
        colors: {
            backgroundContainer: "rgba(218, 222, 224, 0.3)",
            backgroundLoaderTile: "rgba(255, 255, 255, 0)",
            backgroundLoaderTileActive: "rgb(79, 118, 217)",
            backgroundLoaderTileFolding: "rgb(79, 118, 217, 0.95)"
        },
        config: {
            justifyContent: "center",
            alignItems: "center",
            loaderSize: "48px",
            loaderTileSize: "24px",
            loaderTileAfterBoxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
            zIndex: 99
        }
    },
    madeIn: {
        colors: {
            text: "#3b4148",
            icon: "#455a64"
        },
        config: {
            fontSize: "0.8rem",
            fontWeight: 600,
            margin: "16px 0 8px 0",
            paddingRightSVG: "0.5rem"
        }
    },
    input: {
        colors: {
            label: {
                active: {
                    color: "#99a3ba",
                    border: "#cdd9ed",
                    background: "#eef4ff"
                },
                hover: {
                    color: "#fff",
                    border: "#3f6ad8",
                    background: "#688ccd"
                }
            },
            input: {
                active: {
                    color: "#3b4148",
                    border: "#cdd9ed",
                    background: "#fff",
                    placeholder: "#cbd1dc"
                },
                hover: {
                    border: "#688ccd"
                }
            }
        },
        config: {
            height: "32px",
            paddingInput: "8px 16px",
            fontSizeInput: "0.775rem",
            fontWeightInput: 500,
            fontWeightInputPlaceholder: 400,
            textAlignLabel: "center",
            paddingLabel: "8px 12px",
            fontSizeLabel: "0.7rem",
            fontWeightLabel: 500,
            borderRadius: "6px"
        }
    },
    alertDialog: {
        colors: {
            title: "#3b4148",
            info: "#767676",
            backgroundContainer: "rgba(218, 222, 224, 0.3)",
            backgroundDialog: "#fff",
            containerIconType: {
                information: {
                    color: "#688ccd"
                },
                success: {
                    color: "#3ca987"
                },
                warning: {
                    color: "#edc32c"
                },
                error: {
                    color: "#a93c3c"
                }
            },
            containerIconClose: {
                color: "#a9b2bb",
                background: "transparent"
            }
        },
        config: {
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "rgb(0 0 0 / 24%) 0 3px 8px",
            zIndex: 99,
            containerIconType: {
                size: "40px",
                iconSize: "24px",
                margin: "0 0 18px 0",
                borderRadius: "50%"
            },
            containerIconClose: {
                width: "10px",
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
                padding: "0"
            },
            containerTitle: {
                width: "100%",
                fontSize: "0.85rem",
                fontWeight: 600,
                textAlign: "center",
                padding: "0 0 12px 0"
            },
            containerInfo: {
                width: "100%",
                fontSize: "0.775rem",
                fontWeight: 500,
                textAlign: "center",
                padding: "0"
            },
            containerButtons: {
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
                padding: "12px 0"
            }
        }
    },
    toast: {
        colors: {
            backgroundContainer: "#fff",
            colorContentIcon: "#fff",
            colorContentMessageTitle: "#3b4148",
            colorContentMessageMessage: "#767676",
            colorContentClose: "#a9b2bb",
            information: {
                color: "#688ccd"
            },
            success: {
                color: "#3ca987"
            },
            warning: {
                color: "#edc32c"
            },
            error: {
                color: "#a93c3c"
            }
        },
        config: {
            container: {
                borderRadius: "12px",
                padding: "8px",
                boxShadow: "rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px",
                borderLeftSize: "6px",
                transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35)"
            },
            contentIcon: {
                size: "28px",
                borderRadius: "50%",
                fontSize: "1rem"
            },
            contentMessage: {
                minWidth: "275px",
                maxWidth: "300px",
                margin: "0 8px",
                alignItems: "flex-start",
                fontSizeTitle: "0.75rem",
                fontWeightTitle: 600,
                fontSizeMessage: "0.75rem",
                fontWeightMessage: 500
            },
            contentActions: {
                gap: "8px",
                paddingTop: "8px",
                paddingLeft: "8px"
            },
            contentClose: {
                top: "4px",
                right: "12px",
                padding: "4px",
                cursor: "pointer",
                opacity: 0.7
            }
        }
    },
    datePicker: {
        colors: {
            header: {
                iconDefault: "#3b4148",
                backgroundColorHeaderNav: "#f9f9f9",
            },
            main: {
                colorWeek: "#3b4148",
                colorActive: "#3f6ad8",
                backgroundActive: "#e0f3ff",
                colorCurrent: "#fff",
                backgroundCurrent: "#5379cd",
                colorPrevOrNext: "#e2e2e2",
                backgroundRangeSelectionHover: "#f1f1f1",
                backgroundRangeSelectionPrevOrNextHover: "#f8f8f8",
                active: {
                    colorDay: "#3b4148",
                    backgroundDay: "transparent",
                    colorMonthYear: "#3b4148",
                    backgroundMonthYear: "#fff",

                },
                hover: {
                    colorDay: "#3f6ad8",
                    backgroundDay: "#e0f3ff",
                    colorMonthYear: "#3f6ad8",
                    backgroundMonthYear: "#e0f3ff"
                }
            }
        },
        config: {
            header: {
                height: "24px",
                borderRadius: "6px"
            },
            main: {
                padding: "0.5rem 0",
                fontSizeDay: "0.75rem",
                fontWeightDay: 500,
                fontWeightDayHover: 600,
                paddingDay: "5px",
                borderRadiusDay: "6px",
                fontSizeWeek: "0.75rem",
                fontWeightWeek: 600,
                paddingWeek: "0 0 0.25rem 0",
                fontSizeMonthYear: "0.75rem",
                fontWeightMonthYear: 600,
                borderRadiusMonthYear: "6px",
                fontWeightCurrent: 600,
                fontWeightActive: 600
            }
        }
    }
```

# Fixed Issues
[#1](https://github.com/mstoeckli/codemize-library-react/issues/1) Dropdown element in component Button.tsx is not working properly with float "right"

# License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br /> Copyright 2022 - Codemize GmbH