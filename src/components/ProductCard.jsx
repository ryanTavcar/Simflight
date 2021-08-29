import React from 'react';
import Link from 'next/link'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import products from '../util/products'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%', 
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
        flexDirection: 'row'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: 'auto 0 1',
    },
    cover: {
        [theme.breakpoints.down('xs')]: {
            height: 100,
        },
        minWidth: 350,
        maxHeight: 200
    },
    button: {
        marginRight: 20,
    },
  }));

const ProductCard = ({product}) => {

    const styles = useStyles();

    return (
            <Card className={styles.root}>
                <CardMedia
                    className={styles.cover}
                    image={product.image}
                    title={product.name}
                />
                <div className={styles.details}>
                    <CardContent className={styles.content}>
                    <Typography component="h5" variant="h5">
                        {product.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {product.description}
                    </Typography>
                    </CardContent>
                    <Box mx={2} my={1}>
                        <Link href={{
                                pathname: '/products/[id]',
                                query: { id: product.id },
                            }}
                            >
                                <Button variant="contained" color="primary" size="small" className={styles.button}>
                                    Details
                                </Button>
                        </Link>
                            <Button variant="outlined" color="secondary" size="small" className={styles.button}>
                                Download
                            </Button>
                    </Box>
                </div>
            </Card>
    );
}

export default ProductCard;