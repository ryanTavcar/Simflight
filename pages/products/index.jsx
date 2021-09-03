import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Head from 'next/head'
import ProductCard from '../../src/components/ProductCard';
import products, {elite, igate} from '../../src/util/products';

const useStyles = makeStyles(theme => ({
    container: {
        // border: '1px solid blue',
        padding: 50,
    },
    buttons: {
        // border: '1px solid purple',
    }
}))


const Products = () => {

    const classes = useStyles();
    const [prods, setProds] = useState([])

    const handleProducts = (model) => {
        switch (model) {
            case 'ELITE':
                return setProds(elite)
            case 'IGATE':
                return setProds(igate)
            case 'ALL':
                return setProds(products)
        }
    }
console.log(prods)
    useEffect(() => {
        setProds(elite)
    }, [])

    return (
        // <Container maxWidth="lg" style={{minHeight: 'calc(100vh - 170px)',border: '1px solid red', padding:0}}>
        <>
            <Head>
                <title>Simflight | Products</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <Grid container direction="row" className={classes.container}>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography variant="h4" component="h1" >
                            View by:
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid container direction="row" className={classes.buttons}>
                    <Grid item xs={12} md={1}>
                        <Button variant="contained" color="default" onClick={() => handleProducts('ELITE')}>
                            <Typography variant="h5" gutterBottom>
                                Elite
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <Button variant="contained" color="default" onClick={() => handleProducts('IGATE')}>
                            <Typography variant="h5" gutterBottom>
                                Igate
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <Button variant="contained" color="default" onClick={() => handleProducts('ALL')}>
                            <Typography variant="h5" gutterBottom>
                                All
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing={5} style={{marginTop: 32}}>
                    {prods.map(product => (
                        <Grid item xs={12} md={3}  key={product.name}>
                            <ProductCard product={product}/>
                        </Grid>
                    ))} 
                </Grid>
            </Grid>
        </>
        // </Container>
    );
}

export default Products;
