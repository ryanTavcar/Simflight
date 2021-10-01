import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
// import Head from 'next/head'
import HeadMeta from '../../src/components/Head'
import products from '../../src/util/products';
import {Button, Container, Grid, Typography} from '@material-ui/core';
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain'
import { useRouter } from 'next/router'
import { getStaticPropsForTina, staticRequest } from "tinacms";
// import { server } from '../../../config';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 50,
        marginBottom: 50,
    },
    productContainer: {
    //   border: '1px solid red',
      minHeight: 'calc(100vh - 170px)',
      marginTop: 10,
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        marginTop: 50
      }
    },
    imageContainer: {
        // border: '1px solid orange',
        background: "radial-gradient(circle, rgba(45,68,146,1) 36%, rgba(74,45,146,1) 70%)",
        position: 'relative',
        height: '100%',
    },
    supportingImageContainer: {
        // height: '100%',
        // border: '3px solid orange',

    },
    detailsContainer: {
        // border: '1px solid orange',

    },
    span: {
        fontSize: 16, 
        marginRight: 8, 
        color: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.54)' : 'rgba(255, 255, 255, 0.7)'
    },
    link: {
        display: 'flex',
      },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
  }));

const ProductDetails = (props) => {
    console.log(props)
    const product = props.data.getProductsDocument.data

    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));
    const isLaptop = useMediaQuery(theme => theme.breakpoints.down("md"));

    return (
        <>
        <HeadMeta title={product.title} description={product.description} keywords={product.keywords} />

        <Container maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'} className={classes.container}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" className={classes.link} passHref>
                    <Typography style={{fontSize: 12}}>
                        <HomeIcon className={classes.icon} />
                        Home
                    </Typography>
                </Link>

                <Link color="inherit" href="/productsPage/" className={classes.link} passHref>
                    <Typography style={{fontSize: 12}}>
                        <WhatshotIcon className={classes.icon} />
                        products
                    </Typography>
                </Link>

                <Link color="inherit" href={`/products/${product.filename}`} className={classes.link} passHref>
                    <Typography color="textPrimary" style={{fontSize: 12}}>
                        <GrainIcon className={classes.icon} />
                        {product.title}
                    </Typography>
                </Link>
            </Breadcrumbs>

                <Grid component="main" container className={classes.productContainer} direction="row" spacing={5}>
                    <Grid item xs={12} md={7} > 
                        <Grid container direction="row" className={classes.imageContainer}>
                            {/* main image */}
                            <Grid item xs={12}> 
                                <Grid container direction="row" justifyContent="center" alignItems="center" style={{height: '100%'}}>
                                    <Image src={product.image.src} alt="product image" width={400} height={400}  quality={65}   />
                                </Grid>
                            </Grid>

                            {/* supporting images */}
                            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className={classes.supportingImageContainer}>
                            
                                <Grid item> 
                                    <Image src={product.image.src} alt="product image" width={150} height={150} layout="fixed" quality={65} />
                                </Grid>
                                <Grid item> 
                                    <Image src={product.image.src} alt="product image" width={150} height={150} layout="fixed" quality={65} />
                                </Grid>
                                <Grid item> 
                                    <Image src={product.image.src} alt="product image" width={150} height={150} layout="fixed" quality={65} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={5}> 
                        <Grid container direction="column" className={classes.detailsContainer}>
                            <Grid item xs={12} style={{marginBottom: 20}}>
                                <Typography variant="h3" gutterBottom >
                                    {product.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{marginBottom: 20}}>
                                <Typography variant="h4" gutterBottom >
                                    <span className={classes.span}>from</span> ${product.price_starting_from}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{marginBottom: 20}}>
                                <Typography variant="body1" gutterBottom >
                                    {product.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <Button variant="contained" size="large" color="secondary">
                                    <Typography style={{color: 'white', padding: 5}}>
                                        <b>download pricing guide</b>
                                    </Typography>
                                    
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container> 
        </>
    );
};

export const getStaticProps = async({params}) => {
    const filename =  params.filename.replace(/ /g,'')
    const tinaProps = (await getStaticPropsForTina({
      query: `#graphql
        query ProductsListQuery($relativePath: String!) {
          getProductsDocument(relativePath: $relativePath) {
            data {
                category
                title
                keywords
                description
                image {
                  src
                  alt
                }
            }
          }
        }
      `,
      variables: { relativePath: `${filename}.md` },
    }))
    return {
      props: {
        ...tinaProps,
      },
    };
  };
  
export const getStaticPaths = async () => {

    const ProductListData = (await staticRequest({
        query: `#graphql
          {
            getProductsList {
              edges {
                node {
                  sys {
                    filename
                  }
                }
              }
            }
          }
        `,
    }));

    return {
        paths: ProductListData.getProductsList.edges.map(product => {
            return {params: {filename: product.node.sys.filename} }
        }),
        fallback: 'blocking',
    }
}

export default ProductDetails;