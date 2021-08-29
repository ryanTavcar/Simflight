import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import ProductCard from '../../components/ProductCard';
import products from '../../util/products';

const Products = () => {
    return (
        <Container maxWidth="xl">
            <Grid container>
                <Grid item xs={12} md={12}>

                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Product page
                    </Typography>
                </Box>
                    {products.map(product => (
                        <Box my={4} key={product.name}>
                            <ProductCard product={product}/>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Products;