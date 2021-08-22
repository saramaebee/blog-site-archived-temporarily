import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import {Card, CardContent, makeStyles, Typography, useTheme} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    title: {},
    pos: {
        marginBottom: 12,
    },
}));

function ContentCard(props) {
    const theme = useTheme();
    const classes = useStyles(theme);

    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography variant='h3' className={classes.title}>
                    {props.content.title}
                </Typography>
                <Typography>
                    {() => {
                        marked.setOptions({
                            highlight: function (code, language) {
                                const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
                                return hljs.highlight(validLanguage, code).value;
                            },
                            gfm: true,
                            tables: true,
                            breaks: false,
                            pedantic: false,
                            sanitize: true,
                            smartLists: true,
                            smartypants: false
                        })
                        return (
                           <div>{marked(props.content.content.replace(/&gt;+/g, '>' || ''))}</div>
                        );
                    }}
                </Typography>
            </CardContent>
        </Card>
    )

}


export default ContentCard;