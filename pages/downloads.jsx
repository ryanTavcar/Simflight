import React, {useState, useEffect} from 'react';
import { getStaticPropsForTina } from "tinacms";
import DownloadList from '../src/components/DownloadList'
import { makeStyles } from "@material-ui/core/styles";
import {
  Container, 
  Grid, 
  Select, 
  Typography, 
  FormControl, 
  InputLabel,
  MenuItem
} from '@material-ui/core';
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
      marginTop: 50,
      padding: 0,
    }
}));

const downloadData = [
    {   
        id: 1,
        title: 'Elite Download Dummy Text',
        date: '30-10-2021',
        excerpt: 'This is test text for the download list',
    },
    {
        id: 2,
        title: 'Elite Download Dummy Text',
        date: '30-10-2021',
        excerpt: 'This is test text for the download list',
    },
    {
        id: 3,
        title: 'Elite Download Dummy Text',
        date: '30-10-2021',
        excerpt: 'This is test text for the download list',
    },
    {
        id: 4,
        title: 'Elite Download Dummy Text',
        date: '30-10-2021',
        excerpt: 'This is test text for the download list',
    },
]

const Download = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));
    const isLaptop = useMediaQuery(theme => theme.breakpoints.down("md"));

    
    return (
        <Container maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'} className={classes.container}>
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="h3">
                        Downloads
                    </Typography>
                    <hr/>
                </Grid>


                <Grid item>
                    <DownloadList data={downloadData} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Download;