import React, {useState} from 'react';
import Link from "next/link";
import { Grid, Paper, Typography } from '@material-ui/core';
import Markdown from "react-markdown";
import { FormatDate } from '../util/helper';
import { makeStyles } from "@material-ui/core/styles";
import { BsArrowRight } from "react-icons/bs";
import { position } from 'dom-helpers';


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
        }
    },
    gridItem: {
        margin: '5px 0px',
        // border: '1px solid red',
    },
}));

const News = ({data}) => {
    const classes = useStyles();
    // const [icon, setIcon] = useState(false);
    return (
        <>
            {data.map((newsData, index) => {
                const news = newsData.node;
                const formatDate = FormatDate(news);
                return (
                    <Link key={news.sys.filename} href={`/news/${news.sys.filename}`} passHref>
                        <a key={news.id}>
                            <Grid container justifyContent="center" alignItems="center" className={classes.container}>
                                <Grid item item xs={11} sm={12}>
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
                                                    {formatDate}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={12} className={classes.gridItem}>
                                                <Typography variant="body1" component="h3">
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

export default News;