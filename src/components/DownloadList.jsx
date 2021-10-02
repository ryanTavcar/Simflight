import React, {useState} from 'react';
import Link from "next/link";
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import Markdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import { BsArrowRight } from "react-icons/bs";

const useStyles = makeStyles(theme => ({
    container: {
        // border: '1px solid red',
        marginTop: 20,
        marginBottom: 20,
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        [theme.breakpoints.down('sm')] :{
            margin: '10px 0px',
        }
    },
    gridItem: {
        margin: '5px 0px',
        // border: '1px solid red',
        [theme.breakpoints.down('sm')] :{
            margin: '10px 0px',
        }
    },
}));

const DownloadList = ({data}) => {

    const classes = useStyles();

    return (
        <>
        {data.map(download => {
            return (
                <Grid key={download.id} container justifyContent="center" alignItems="center" className={classes.container}>
                    <Grid item xs={11} sm={12}>
                        <Paper elevation={3} className={classes.paper}>
                            <Grid container direction="row">

                                <Grid item xs={12} className={classes.gridItem} >
                                    <Grid container alignItems="center" style={{height: '40px'}}>
                                        <Grid item>
                                            <Typography variant="h5" component="h1">
                                                {download.title} {" "}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}  className={classes.gridItem}>
                                    <Typography variant="subtitle2" component="h3">
                                        {download.date}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}  className={classes.gridItem}>
                                    <Typography variant="body2" component="h3" color="textSecondary">
                                        {download.excerpt}
                                    </Typography>
                                </Grid>

                            </Grid>

                            <Grid container justifyContent="flex-end" alignItems="center">
                                <Grid item className={classes.gridItem}>
                                    <Button variant="contained" size="large" color="primary">
                                        <Typography style={{color: 'white', padding: 5}}>
                                            <b>download</b>
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>
                </Grid>
            )
        })}
        </>
    );
};

export default DownloadList;