import React from 'react';
import {AppBar as MUIAppBar, IconButton, makeStyles, Toolbar, Typography, useTheme,} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    appbar: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        maxWidth: '100vw',
        display: 'flex',

    },
    icon_button: {
        paddingTop: '-1vh',
        paddingRight: '1vw'
    },
    title: {
        flexGrow: 3,
        marginTop: '1vh',
    }
}));

function AppBar(props) {

    // attributes
    const theme = useTheme();
    const classes = useStyles(theme);


    const handleColumn = (e) => {
        console.log('test');
    }

    return (
        <MUIAppBar className={classes.appbar}>
            <Toolbar>
                <IconButton className={classes.icon_button}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h1' className={classes.title}>{props.name}</Typography>
                {/*<Input style={{ width: '3vw'}} type='number' onClick={handleColumn} value={props.columns} />*/}
            </Toolbar>
        </MUIAppBar>
    );
}

export default AppBar;