import React, {useState} from "react";
import {
    createTheme,
    ThemeProvider,
    Typography,
    CssBaseline,

} from '@material-ui/core';
import PageTemplate from "./pages/PageTemplate";
const index = () => {

    const [columns, setColumns] = useState();
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    type: /*prefersDarkMode ? 'dark' : 'light'*/ 'dark',
                    primary: {
                        main: '#302b36',
                    },
                    secondary: {
                        main: '#d0b01f',
                    },
                },
                typography: {
                    h1: {
                        fontFamily: 'Kalam, Roboto',
                        fontSize: '4em'
                    }
                },
                spacing: 4
            }),
        // [prefersDarkMode],
        []
    );
    return (
        <ThemeProvider theme={theme}>
            <PageTemplate>
                <p>test</p>
                <p>test2</p>
            </PageTemplate>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default index;
