import { useMediaQuery } from "@material-ui/core";
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        // height: '100%',
        minHeight: 'calc(100vh - 170px)',
        width: '100%',
        background: theme.palette.background.default,
        // border: '1px solid blue',
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

const Landing = ({href}) => {

    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));
    
    return (
        <Grid component="main" container className={classes.container} direction="row" alignItems="center">
            <Grid item xs={12} md={6}> 
                <Grid container direction="column" spacing={5} className={classes.textContainer}>
                    <Grid item >
                        <Typography className={classes.title} variant={isMobile ? 'h3' : 'h1'} >
                            <b>Simflight</b>
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography className={classes.subtitle} variant="subtitle2" >
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Grid container direction="row" justifyContent={isMobile ? 'center' : 'flex-start'}>
                            <Link href="/products" passHref>
                                <Button color="primary" variant="contained" size="large">
                                    See Products
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} >
                <Image src="/static/helicopter-feature.png" alt="helipcopter feature" width="600" height="600" />
            </Grid>
        </Grid>
    );
}

export default Landing;