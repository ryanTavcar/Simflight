import React, {useState} from 'react';
import Link from "next/link";
import { Grid, Paper, Typography } from '@material-ui/core';
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
        padding: '1rem',
        '& .icon': {
            display: 'none'
        },
        '&:hover .icon': {
            display: 'flex',
            color: theme.palette.primary.main,
            alignItems: 'center',
            marginLeft: 10
        },
        [theme.breakpoints.down('sm')] :{
            margin: '10px 0px',
            '&:hover .icon': {
                display: 'none',
            }
        }
    },
    gridItem: {
        margin: '5px 0px',
        [theme.breakpoints.down('sm')] :{
            margin: '10px 0px',
        }
    },
}));

const NewsList = ({data}) => {
    const classes = useStyles();

    return (
        <>
            {data.map(newsData => {
                const news = newsData.node;
                return (
                    <Link key={news.sys.filename} href={`/news/${news.sys.filename}`} passHref>
                        <a key={news.id}>
                            <Grid container justifyContent="center" alignItems="center" className={classes.container}>
                                <Grid item xs={11} sm={12}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Grid container direction="column">

                                            <Grid item xs={12} className={classes.gridItem}>
                                                <Grid container alignItems="center" style={{height: '40px'}}>
                                                    <Grid item>
                                                        <Typography variant="h5" component="h1">
                                                            {news.values.title} {" "}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item className='icon'>
                                                        <BsArrowRight size={35}/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12} className={classes.gridItem}>
                                                <Typography variant="subtitle2" component="h3">
                                                    {news.values.date}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={12} className={classes.gridItem}>
                                                <Typography variant="body2" component="h3" color="textSecondary">
                                                    {news.values.excerpt}
                                                </Typography>
                                            </Grid>

                                        </Grid>
                                    </Paper>

                                </Grid>
                            </Grid>
                        </a>
                    </Link>
                )
            })}
        </>
    );
}

export default NewsList;