import React from 'react';
import {
    makeStyles,
    useTheme,

} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '80%',
        spacing: theme.spacing(4),

    }
}));

function ProjectCard(props) {
    const theme = useTheme();
    const classes = useStyles(theme);


    return (
        <div className={classes.root}>

        </div>
    )
}

export default ProjectCard;