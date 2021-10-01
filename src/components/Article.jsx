import React from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@material-ui/core';
import Markdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import { date } from 'yup/lib/locale';


const useStyles = makeStyles(theme => ({
    container: {
        // border: '1px solid red',
        margin: '50px 0px'
    },

}));


const Article = ({data}) => {

    const classes = useStyles();

    return (
        <Grid container direction="column" className={classes.container}>
            <Grid item>
                <Typography variant="h4" component="h1">
                    {data.title}
                </Typography>
            </Grid>

            <Grid item>
                <Typography variant="subtitle2" component="p">
                    {data.date}
                </Typography>
            </Grid>

            <Grid item>
                <Image src={data.image.src} alt={data.image.alt} width="600" height="600" />
            </Grid>

            <Grid item>
                <Markdown>{data.body}</Markdown>
            </Grid>

        </Grid>
    );
}

export default Article;