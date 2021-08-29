import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import products from '../util/products'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      border: '1px solid blue',
      width: '90%', 

    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid red',
    },
    content: {
      flex: 'auto 0 1',
    },
    cover: {
      width: '100%',
    },
  }));

const ProductCard = ({product}) => {

    const classes = useStyles();

    return (
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={product.image}
                    title="at11"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {product.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {product.description}
                    </Typography>
                    </CardContent>
                </div>
            </Card>
    );
}

export default ProductCard;