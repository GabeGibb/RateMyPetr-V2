'use client'

import { createTheme } from '@mui/material/styles';

export const globalTheme = createTheme({
    palette: {
        primary: {
            main: '#0064a4',
        },
        secondary: {
            main: '#ffd200',
        },
        error: {
            main: '#981e32',
        },
        warning: {
            main: '#f78d2d',
        },
        info: {
            main: '#c6beb5',
        },
        success: {
            main: '#7ab800',
        },
        text: {
            primary: '#ffffff',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& label": {
                        color: "#d1d1d1",
                    },
                    "& label.Mui-focused": {
                        color: "white",
                    },
                    // Text Input Border
                    "& .MuiOutlinedInput-root": {
                        color: "white",
                        "& fieldset": {
                            borderColor: "white",
                        },
                        "&:hover fieldset": {
                            borderColor: "white",
                            borderWidth: 2,
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "white",
                        },
                    },
                    "& .MuiSelect-icon": {
                        color: "white",
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: "black",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "white",
                },
            },
        },
    },
    

});