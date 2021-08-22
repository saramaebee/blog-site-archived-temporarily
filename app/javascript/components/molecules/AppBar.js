import React from 'react';
import {
    useTheme,
    Typography,
    Toolbar,
    AppBar as MUIAppBar,
    makeStyles,
    IconButton, Input,

} from '@material-ui/core';
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

    }
}));

function AppBar(props) {

    const { pColumns, pSetColumns } = props;

    // attributes
    const theme = useTheme();
    const classes = useStyles(theme);

    // methods
    const handleChange = (event) => {
      pSetColumns(event.target.value);
    };

    return (
        <MUIAppBar className={classes.appbar}>
            <Toolbar>
                <IconButton className={classes.icon_button}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h1' className={classes.title}>{props.name}</Typography>
                <Input style={{ width: '2vw'}} type='number' onChange={handleChange} value={pColumns} />
            </Toolbar>
        </MUIAppBar>
    );
}

export default AppBar;