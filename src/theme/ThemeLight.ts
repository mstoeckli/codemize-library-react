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
            }
        },
        config: {
            height: "32px",
            width: "auto",
            borderRadius: "6px",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
            cursor: "pointer",
            fontWeight: 500,
            fontSize: "0.775rem"
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
    }
};

export { ThemeLight };