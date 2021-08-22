import React from 'react';
import {
    Card,
    CardContent,
    makeStyles,
    useTheme,
    Typography

} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
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
                <Typography className={classes.title}>
                    Card Title
                </Typography>
                <Typography>
                    Words
                </Typography>
            </CardContent>
        </Card>
    )

}


export default ContentCard;