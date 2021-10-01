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

const Admin = ({data, setEdit}) => {

    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));

    return (
        <Grid component="main" container className={classes.container} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}> 
                <Grid container direction="column" alignItems={isMobile ? "center" : "flex-start"} spacing={5} className={classes.textContainer}>
                    <Grid item component="header">
                        <Typography className={classes.title} variant={isMobile ? 'h3' : 'h1'} component="h1">
                            <b>{data.headline}</b>
                        </Typography>
                    </Grid>

                    {!data.edit &&
                        <Grid item >
                            <Typography className={classes.subtitle} variant="subtitle2" component="h1">
                                    Login to start editing!
                            </Typography>
                        </Grid>
                    }

                    {data.edit &&
                        <Grid item >
                            <Typography className={classes.subtitle} variant="subtitle2" component="h1">
                                OK, now that your are logged in, you can go to the home page and begin to make content changes.
                            </Typography>
                        </Grid>
                    }
                    
                    {data.edit && (
                        <Grid item >
                            <Grid container direction="row" justifyContent={isMobile ? 'center' : 'flex-start'} >
                                {data.loggedInActions.map( action => (
                                    <Link key={action.label} href={action.link} >
                                        <Button color="primary" variant="contained" size="large" >
                                            {action.label}
                                            {action.icon &&
                                            <Grid container item xs={2} style={{marginLeft: '10px'}} >
                                                {action.icon}
                                            </Grid>
                                            }
                                        </Button>
                                    </Link>
                                ))}
                            </Grid>
                        </Grid>
                    )}

                    {!data.edit && (
                        <Grid item >
                            <Grid container direction="row" justifyContent={isMobile ? 'center' : 'flex-start'} >
                                {data.loggedOutActions.map( action => (
                                    <Link key={action.label} href={action.link} >
                                        <Button color="primary" variant="contained" size="large" onClick={setEdit}>
                                            {action.label}
                                            {action.icon &&
                                            <Grid container item xs={2} style={{marginLeft: '10px'}} >
                                                {action.icon}
                                            </Grid>
                                            }
                                        </Button>
                                    </Link>
                                ))}
                            </Grid>
                        </Grid>
                    )}

                </Grid>
            </Grid>
            <Grid item xs={12} md={6} >
                <Image src={data.image.src} alt={data.image.alt} width="600" height="600" />
            </Grid>
        </Grid>
    );
}

export default Admin;