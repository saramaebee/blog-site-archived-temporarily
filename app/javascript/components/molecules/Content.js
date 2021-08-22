import React from 'react';
import {
    Grid,
    makeStyles,
    useTheme,

} from '@material-ui/core';
import ContentCard from '../atoms/ContentCard';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '80%',
        margin: 'auto',
        marginTop: 200
    }
}));

function Content(props) {
    const theme = useTheme();
    const classes = useStyles(theme);
    const floored = Math.floor(12 / props.pColumns)

    return (
        <Grid
            container
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            className={classes.root}
            spacing={10}
        >
            {props.children.map((content, i) => (
                <Grid item xs={12} sm={12} md={floored} lg={floored} xl={floored} key={i}>
                    <ContentCard content={content}/>
                </Grid>)
            )}
        </Grid>
    )
}

export default Content;