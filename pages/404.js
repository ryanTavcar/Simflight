import React from 'react';
import { useMediaQuery } from "@material-ui/core";
import Link from 'next/link'
import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import { BiRightArrowAlt } from "react-icons/bi";

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: 'calc(100vh - 170px)',
        width: '100%',
        marginBottom: 100,
        [theme.breakpoints.between('sm', 'md')]: {
            minHeight: 0,
        }
    },
    title : {
        // border: '1px solid red',
        // fontFamily: 'Merriweather sans',
        // fontFamily: 'maven pro',
        // fontFamily: 'Bungee Shade',
        fontFamily: 'Bungee',
        letterSpacing: 1,
    },
    subtitle: {
        // border: '1px solid red',
    //   margin: '2rem 0'
    },
    textContainer: {
        // border: '1px solid red',
        [theme.breakpoints.down('sm')] : {
            padding: 20
        }
    },
}));

function FourOhFour() {
    const classes = useStyles();
    const isLaptop = useMediaQuery(theme => theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));

    return (
        <Container maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'} className={classes.container}>
            <Grid component="main" container className={classes.container} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6}> 
                    <Grid container direction="column" alignItems={isMobile ? "center" : "flex-start"} spacing={5} className={classes.textContainer}>
                        <Grid item component="header">
                            <Typography className={classes.title} variant={isMobile ? 'h3' : 'h3'} component="h3">
                                <b>404 – Page Not Found</b>
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography className={classes.subtitle} variant="subtitle2" component="h1">
                                Oops! It seems there's nothing here, how embarrassing.
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Grid container direction="row" justifyContent={isMobile ? 'center' : 'flex-start'}>
                                <Link href="/">
                                    <Button color="primary" variant="contained" size="large">
                                        Return Home
                                        <BiRightArrowAlt />
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Image src="/images/helicopter-feature.png" alt="helicopter" width="600" height="600" />
                </Grid>
            </Grid>
        </Container>
    );
}

export default FourOhFour;