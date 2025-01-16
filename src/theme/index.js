import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import React from "react";

const getDesignTokens = (mode) => ({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        paddingTop: '8px',
                        paddingBottom: '8px',
                    },
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }
                
                a {
                    text-decoration: none;
                    color: inherit;
                }
                
                .no_scroll_bar {
                    ::-webkit-scrollbar {
                    width: 0;
                    appearance: none;
                }
            `,
        },
    },
    palette: {
        mode,
        ...(mode === 'dark' ? { body: 'rgb(11, 13, 16)' } : { body: '#618' }),
        ...(mode === 'dark' ? { grey: 'rgb(53, 55, 57)' } : { grey: '#618' }),
        ...(mode === 'dark' ? { light_grey: 'rgb(36, 37, 41)' } : { light_grey: '#618' }),
        ...(mode === 'dark' ? { yellow: 'rgb(154, 151, 103)' } : { yellow: '#618' }),
        ...(mode === 'dark' ? { blue: 'rgb(84, 111, 237)' } : { blue: '#618' }),
        text: {
            // ...(mode === 'dark' ? { dark_green_grey: '#B7B7A4' } : { dark_green_grey: '#618' }),
            ...(mode === 'dark' ? { grey: 'rgb(53, 55, 57)' } : { grey: '#618' }),
            ...(mode === 'dark' ? { blue: 'rgb(84, 111, 237)' } : { blue: '#618' }),
            ...(mode === 'dark' ? { orange: 'rgb(197, 113, 114)' } : { orange: '#618' }),

            // ...(mode === 'light'
            //     ? {
            //         primary: grey[900],
            //         secondary: grey[800],
            //     }
            //     : {
            //         primary: '#B7B7A4',
            //         secondary: grey[500],
            //     }),
        },
    },
    typography: {
        fontFamily: "Mulish, sans-serif",
        h1: {
            fontSize: '48px',
            fontWeight: 700,
            [`@media (max-width:600px)`]: {
                fontSize: '28px',
            },
        },
        h2: {
            fontSize: '36px',
            fontWeight: 700,
            [`@media (max-width:600px)`]: {
                fontSize: '24px',
            },
        },
        h3: {
            fontSize: '30px',
            fontWeight: 700,
            [`@media (max-width:600px)`]: {
                fontSize: '20px',
            },
        },
        h4: {
            fontSize: '24px',
            fontWeight: 700,
            [`@media (max-width:600px)`]: {
                fontSize: '16px',
            },
        },
        h5: {
            fontSize: '20px',
            fontWeight: 700,
            [`@media (max-width:600px)`]: {
                fontSize: '14px',
            },
        },
        h6: {
            fontSize: '16px',
            fontWeight: 700,
            [`@media (max-width:600px)`]: {
                fontSize: '12px',
            },
        },
        leadText: {
            fontSize: '20px',
            fontWeight: 700,
            [`@media (max-width:600px)`]: {
                fontSize: '14px',
            },
        },
        paragraph: {
            fontSize: '16px',
            [`@media (max-width:600px)`]: {
                fontSize: '12px',
            },
        },
        small: {
            fontSize: '20px',
            [`@media (max-width:600px)`]: {
                fontSize: '14px',
            },
        },
        tiny: {
            fontSize: '12px',
            fontWeight: 600,
            [`@media (max-width:600px)`]: {
                fontSize: '8px',
            },
        },
        text: {
            fontSize: '25px',
            [`@media (max-width:600px)`]: {
                fontSize: '18px',
            },
        },
        semiBoldSmall: {
            fontSize: '20px',
            fontWeight: 600,
            [`@media (max-width:600px)`]: {
                fontSize: '14px',
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

const darkModeTheme = createTheme(getDesignTokens('dark'));

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={darkModeTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default Theme;
