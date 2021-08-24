import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import {Card, CardContent, makeStyles, Typography, useTheme} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        minHeight: 150,
    },
    title: {},
    pos: {
        marginBottom: 12,
    },
}));

function ContentCard(props) {
    const theme = useTheme();
    const classes = useStyles(theme);

    marked.setOptions({
        highlight: function (code, language) {
            const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
            return hljs.highlight(validLanguage, code).value;
        },
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        smartLists: true,
        smartypants: false
    })
    const md = marked(props.content.content.replace(/&gt;+/g, '>' || ''));

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant='h5' className={classes.title}>
                    {props.content.title}
                </Typography>
                <div dangerouslySetInnerHTML={{__html: md}}/>
            </CardContent>
        </Card>
    )

}


export default ContentCard;