import { DefaultTheme } from 'styled-components';

/** @public */
const ThemeLight: DefaultTheme = {
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
            height: "auto",
            width: "auto",
            borderRadius: "6px",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
            cursor: "pointer",
            fontWeight: 500,
            fontSize: "0.8rem",
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
            top: "calc(100% + 10px)",
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
            width: "300px",
            minWidth: "300px",
            maxWidth: "300px",
            borderRadius: "6px",
            fontSizeSVG: "1rem",
            paddingSVG: "0 0.5rem 0 0.5rem",
            fontSizeInput: "0.775rem",
            fontWeightInput: 500,
            marginInput: "0",
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
            width: "300px",
            minWidth: "auto",
            maxWidth: "auto",
            lineHeight: "18px",
            paddingInput: "8px 16px",
            fontSizeInput: "0.775rem",
            fontWeightInput: 500,
            textAlignLabel: "center",
            paddingLabel: "8px 12px",
            fontSizeLabel: "0.75rem",
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
                    color: "#3f6ad8"
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
            width: "350px",
            minWidth: "300px",
            maxWidth: "400px",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "rgb(0 0 0 / 24%) 0 3px 8px",
            zIndex: 99,
            containerIconType: {
                size: "40px",
                iconSize: "24px",
                marginBottom: "18px",
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
                marginBottom: "12px"
            },
            containerInfo: {
                width: "100%",
                fontSize: "0.775rem",
                fontWeight: 500,
                textAlign: "center",
                marginBottom: "0"
            },
            containerButtons: {
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
                marginTop: "18px"
            }
        }
    }
};

export { ThemeLight };