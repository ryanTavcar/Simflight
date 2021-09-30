import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Button,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
    //   border: '1px solid orange',
      flexGrow: 1,
      marginBottom: 50,
      marginTop: 50,
    },
    heading: {
        // border: '1px solid red',
        // fontFamily: 'Merriweather sans',
        // fontFamily: 'maven pro',
        // fontFamily: 'Bungee Shade',
        fontFamily: 'Bungee',
        letterSpacing: 1,
    },
    card: {
        height: 480,
        backgroundColor: '#F2F4F5',
        // minWidth: 275,
        // maxWidth: 400,
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        // border: '1px solid yellow',
    },
    cover: {
        height: 215,
        // width: 300,
        margin: 10,
        // border: `4px solid black`
    },
    name: {
        // border: '1px solid blue',
        height: 64,
    },
    detailsContainer: {
        // border: '1px solid blue',
        // padding: 10,
        // marginTop: -40,
        // maxHeight: 40,
        // maxHeight: 200,
    },
    content: {
        textOverflow: "ellipsis",
        height: 80,
        padding: 10,
        // "&.MuiCardMedia-media": {
        //     height: 100,
        //     width: 100
        // }
        // border: '1px solid red',
    },
    cardAction: {
        // border: '1px solid blue',
        position: 'relative',
        bottom: 40,
    },
    button: {
        backgroundColor: 'white',
        boxShadow: "-1px 2px 10px 4px rgba(0,0,0,0.2), 0px 1px 1px 1px rgba(0,0,0,0.2)",
        '&:hover': {
            boxShadow: "-2px 5px 5px 5px rgba(0,0,0,0.2), 0px 1px 1px 1px rgba(0,0,0,0.2)",
            backgroundColor: 'white',

        }
    },
    priceSubtitle:{
        // border: '1px solid red',
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-end',
        paddingLeft:10
    },
    price: {
        textOverflow: "ellipsis",
        height: 80,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'flex-end',
        // border: '1px solid red',
    },
    span: {
        fontSize: 16, 
        marginRight: 12, 
        color: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.54)' : 'rgba(255, 255, 255, 0.7)'
        // color: 'rgba(0, 0, 0, 0.54)'
    }
  }));

const WhatWeDo = ({data}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));

    const FeatureCard = ({feature}) => {
        return (
            <Card className={classes.card}>
                {/*  see details */}
                <CardContent className={classes.detailsContainer}>
                    <Grid container direction="column">
                        <Grid item xs={12} className={classes.name}>
                            <Typography style={{color: 'black'}} variant="h6" align="center">
                                <b>{feature.title}</b>
                            </Typography>
                        </Grid>
    
                        {/* image */}
                        <CardMedia className={classes.cover} image={feature.image.src} alt={feature.image.alt} />
    
                        <Grid item xs={12} className={classes.content}>
                            <List>
                                <ListItem style={{color: 'rgba(0, 0, 0, 0.54)'}}>
                                    <ListItemText 
                                        primary={feature.text.item1}
                                    />
                                </ListItem>
                                <ListItem style={{color: 'rgba(0, 0, 0, 0.54)'}}>
                                    <ListItemText 
                                        primary={feature.text.item2}
                                    />
                                </ListItem>
                                <ListItem style={{color: 'rgba(0, 0, 0, 0.54)'}}>
                                    <ListItemText 
                                        primary={feature.text.item3}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </CardContent>
                {/* <CardActions className={classes.cardAction}>
                    <Grid container justifyContent="center">
                        <Link 
                            href={`/products/${encodeURIComponent(product.id)}`}
                        >
                            <Button variant="contained"  className={classes.button}>
                                <Typography color="primary">
                                    <b>see details</b>
                                </Typography>
                            </Button>
                        </Link>
                    </Grid>
                </CardActions> */}
            </Card>
        )
    }   

    return (
        <Grid container component="section" direction="row" justifyContent="flex-end" alignItems="flex-end" className={classes.container}>
            {/* Heading */}
            <Grid item xs={12} md={6}>
                <Typography className={classes.heading} variant="h2" color="textPrimary" gutterBottom align={isMobile ? "center" : "right"}><b>{data.headline}</b></Typography>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5} >
                <Grid item xs={10} md={4}>
                    <FeatureCard feature={data.items[0]} />
                </Grid>
                <Grid item xs={10}  md={4}>
                    <FeatureCard feature={data.items[1]} />
                </Grid>
                <Grid item xs={10}  md={4}>
                    <FeatureCard feature={data.items[2]} />
                </Grid>
            </Grid>

        </Grid>
    );
}

export default WhatWeDo;