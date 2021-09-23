import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Head from 'next/head'
import Link from 'next/link'
import ProductCard from '../src/components/ProductCard';
import products from '../src/util/products';
import { useMediaQuery } from "@material-ui/core";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain'
import { server } from '../config';

const useStyles = makeStyles(theme => ({
    container: {
        // border: '1px solid blue',
        // minHeight: 'calc(100vh - 170px)',
        padding: 50,
    },
    filterContainer: {
        // border: '1px solid purple',
        height: 100,
    },
    lgFilterContainer: {
        // border: '1px solid purple',
        height: 400,
    },
    link: {
        display: 'flex',
      },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}))


const Products = ({products}) => {

    const classes = useStyles();
    const [prods, setProds] = useState([])
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));

    const handleProducts = (model) => {
        switch (model) {
            case 'ELITE':
                return setProds(products.elite)
            case 'IGATE':
                return setProds(products.igate)
            case 'ALL':
                return setProds(products.all)
            case 'HARDWARE':
                return setProds(products.hardware)
            default:
                return setProds(products.all)
        }
    }

    useEffect(() => {
        setProds(products.all)
    }, [])

    return (
        <>
            {products ? (
                <>
                    <Head>
                        <title>Simflight | Products</title>
                        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                    </Head>
                    <Grid container direction="row" className={classes.container}>
                        <Grid item xs={12} md={2}>
                            <Grid item xs={12} >
                                <Typography variant="h4" component="h1" >
                                    View by:
                                </Typography>
                            </Grid>
                                            
                            <Grid container direction="column" justifyContent="space-evenly" className={isMobile ? classes.filterContainer : classes.lgFilterContainer}>
                                <Grid item xs={12} md={1}>
                                    <Button variant="outlined" color="primary" onClick={() => handleProducts('ELITE')}>
                                        <Typography variant="h5" gutterBottom>
                                            Elite
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={1}>
                                    <Button variant="outlined" color="primary" onClick={() => handleProducts('IGATE')}>
                                        <Typography variant="h5" gutterBottom>
                                            Igate
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={1}>
                                    <Button variant="outlined" color="primary" onClick={() => handleProducts('HARDWARE')}>
                                        <Typography variant="h5" gutterBottom>
                                            Hardware
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={1}>
                                    <Button variant="outlined" color="primary" onClick={() => handleProducts('ALL')}>
                                        <Typography variant="h5" gutterBottom>
                                            All
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                            <Grid item xs={12} md={10} lg={10} >

                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link color="inherit" href="/" className={classes.link}>
                                        <Typography>
                                            <HomeIcon className={classes.icon} />
                                            Home
                                        </Typography>
                                    </Link>
                                    {/* <Link
                                        color="inherit"
                                        href="/productsPage/"
                                        // onClick={handleClick}
                                        className={classes.link}
                                    >
                                        <WhatshotIcon className={classes.icon} />
                                        Core
                                    </Link> */}
                                    <Typography color="textPrimary" className={classes.link}>
                                        <GrainIcon className={classes.icon} />
                                        Products
                                    </Typography>
                                </Breadcrumbs>

                                <Grid container direction="row" justifyContent={isMobile ? 'center' : 'flex-start'} spacing={5} style={{marginTop: 32}}>
                                        {/* <Grid item xs={12} md={3} key={product.name} style={{minWidth: 275,}}>
                                            <ProductCard products={products}/>
                                        </Grid> */}
                                    {products && prods.map(product => (
                                        <Grid item xs={10} sm={6} md={5} lg={3} key={product.id} style={{minWidth: 275,}}>
                                            <ProductCard product={product}/>
                                        </Grid>
                                    ))} 
                                </Grid>
                            </Grid>
                    </Grid>
                </>
            )
                :
                    <h3>no data</h3>
            }
            
        </>
    );
}

export const getStaticProps = async () => {
    // const res = await fetch(`${server}/api/products`)
    // const products = await res.json()
    return {
      props: {
        products,
      },
    }
}

export default Products;