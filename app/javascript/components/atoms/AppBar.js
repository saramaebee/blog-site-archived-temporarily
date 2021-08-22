import React from 'react';
import {
    useTheme,
    Typography,
    Toolbar,
    AppBar as MUIAppBar,
    makeStyles,

} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appbar: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        maxWidth: '100vw',
    }
}));

function AppBar(props) {
    // attributes
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <MUIAppBar className={classes.appbar}>
            <Toolbar>
                <Typography variant='h1'>{props.name}</Typography>
            </Toolbar>
        </MUIAppBar>
    );
}


export default AppBar;