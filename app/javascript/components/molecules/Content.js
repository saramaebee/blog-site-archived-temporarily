import React from 'react';
import {Grid, makeStyles, useTheme,} from '@material-ui/core';
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
    const floored = Math.min(Math.floor(12 / props.pColumns))

    return (
        <Grid
            container
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            className={classes.root}
            spacing={10}
        >
            {(props.dbContent ? (
                props.dbContent.map((el, i) => (
                    <Grid item xs={12} sm={12} md={floored} lg={floored} xl={floored} key={i}>
                        <ContentCard content={el}/>
                    </Grid>
                ))
            ) : null)}
            {/*{props.children ? props.children.map((el, i) => (*/}
            {/*    <Grid item xs={12} sm={12} md={floored} lg={floored} xl={floored} key={i}>*/}
            {/*        <ContentCard content={el}/>*/}
            {/*    </Grid>)*/}
            {/*) : null}*/}
            {/*{props.children}*/}
        </Grid>
    )
}

export default Content;