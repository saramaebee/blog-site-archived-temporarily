import React from "react";
import AppBar from './atoms/AppBar';
import Content from './atoms/Content';
import {
    createTheme,
    ThemeProvider,
    Typography,
    CssBaseline,
    Grid,

} from '@material-ui/core';
const Website = () => {
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
            <AppBar name='My Projects'/>
            <Grid
                container
                direction='row'
                alignItems='center'
                justifyContent='space-around'
                spacing={theme.spacing(4)}
                style={{minHeight: '99vh'}}
            >
                <Grid item xs={6} container justifyContent='center'>
                    <Grid item>
                        <Typography>Beep</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={6} container justifyContent='center'>
                    <Grid item>
                        <Typography>Beep</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default Website;
