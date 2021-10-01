import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import products from '../util/products'

const useStyles = makeStyles(theme => ({
    card: {
        height: 450,
        // minWidth: 275,
        // maxWidth: 400,
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        // border: '1px solid yellow',
    },
    cover: {
        height: 200,
        // width: 300,
        margin: 10,
        // border: `4px solid ${theme.palette.primary.dark}`
    },
    name: {
        // border: '1px solid blue',
        height: 64,
        paddingLeft: 10, 
        paddingRight: 10 
    },
    detailsContainer: {
        // border: '1px solid blue',
        padding: 10,
        marginTop: -40,
        // maxHeight: 40,
        // maxHeight: 200,
    },
    content: {
        textOverflow: "ellipsis",
        height: 80,
        padding: 10,
        // border: '1px solid red',
    },
    cardAction: {
        // border: '1px solid blue',
        position: 'relative',
        bottom: 40
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
}))

const ProductCard = ({product}) => {

    const classes = useStyles();
    const [productDescription, setProductDescription] = useState('');

    const textFormat = () => {
        if (product.description.length >= 100) {
            const editedDescription = product.description.slice(0, 100);
            setProductDescription(editedDescription + ' . . .')
        } else {
            setProductDescription(product.description)
        }
    };

    useEffect(() => {
        textFormat();
    }, [])

    return (
        <Card className={classes.card}>
            {/* image */}
            <CardMedia className={classes.cover} image={product.image.src} title={product.title} />
            {/*  see details */}
            <CardActions className={classes.cardAction}>
                <Grid container justifyContent="center">
                    <Link href={`/products/${product.title}`}>
                        <Button variant="contained"  className={classes.button}>
                            <Typography color="primary">
                                <b>see details</b>
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
            </CardActions>
            <CardContent className={classes.detailsContainer}>
                <Grid container direction="row">
                    <Grid item xs={12} className={classes.name}>
                        <Typography color="textPrimary" variant="h6">
                            <b>{product.title}</b>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} className={classes.content}>
                        <Typography  variant="subtitle2" color="textSecondary">
                            {productDescription}
                        </Typography>
                    </Grid>
{/* 
                    <Grid container direction="row">
                        <Grid item xs={12} className={classes.price}>
                            <Typography  variant="h4" color="textPrimary">
                                <span className={classes.span}>from</span><b>${product.price_starting_from}</b>
                            </Typography>
                        </Grid>
                    </Grid> */}
                </Grid>
            </CardContent>
        </Card>
    );
}

export default ProductCard;