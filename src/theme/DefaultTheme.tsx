import {createTheme, Theme} from "@mui/material";

const DefaultTheme: Theme = createTheme({
    palette: {
        background: {
            default: "#1E1F22", // --main-surface-background
            paper: "rgb(47,47,47)", // --message-surface
        },
        text: {
            primary: "rgb(243,243,243)", // --text-primary
            secondary: "rgba(160, 160, 160, 1)", // --text-secondary
            disabled: "rgba(120, 120, 120, 1)" // --text-tertiary
        },
        primary: {
            main: "rgb(227,227,227)"
        },
        error: {
            main: "#f93a37", // --text-error
        },
        grey: {
            "900": "#171717",
            "800": "#212121",
            "700": "#2f2f2f"
        },
        divider: "hsl(0,0%,34%)", // --border-light
    },
    components: {
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    display: 'none', // Removes the underline indicator of Tabs
                },
            },
        },
        MuiTab: {
            defaultProps: {
                disableRipple: true, // Disables the ripple effect globally
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true, // Only disables ripple for Button, not other ButtonBase-based components.
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#696969", // Default border color
                        },
                        "&:hover fieldset": {
                            borderColor: "#868686", // Hover border color
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#a9a9a9", // Focused border color
                        },
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#696969", // Default label color
                    "&.Mui-focused": {
                        color: "#a9a9a9", // Focused label color
                    },
                },
            },
        },
    },
    typography: {
        fontSize: 13, // Base font size (default is 14px)
    },
});

export default DefaultTheme;