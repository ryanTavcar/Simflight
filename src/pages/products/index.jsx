import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Head from 'next/head'
import ProductCard from '../../components/ProductCard';
import products, {elite, igate} from '../../util/products';

const Products = () => {

    const [prods, setProds] = useState([])
    const handleProducts = (e) => {
        console.log(e.target.innerText)
        switch (e.target.innerText) {
            case 'ELITE':
                return setProds(elite)
            case 'IGATE':
                return setProds(igate)
        }
    }

    useEffect(() => {
        setProds(elite)
    }, [])

    return (
        <Container maxWidth="xl">
            <Head>
                <title>Simflight | Products</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <Grid container className="border">
                <Grid item xs={12} >

                <Box my={4}>
                    <Typography variant="h4" component="h1" >
                        View by:
                    </Typography>
                </Box>
                <Box>
                    <Button variant="contained" color="default" onClick={(e) => handleProducts(e)}>
                        <Typography variant="h5" component="h5" gutterBottom>
                            Elite
                        </Typography>
                    </Button>
                    <Button variant="contained" color="default" onClick={(e) => handleProducts(e)}>
                        <Typography variant="h5" component="h5" gutterBottom>
                            iGate
                        </Typography>
                    </Button>
                </Box>
                    {prods.map(product => (
                        <Box my={4} key={product.name} className="border">
                            <ProductCard product={product}/>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Products;