import React from 'react';
import products from '../../../src/util/products';
import { useRouter } from 'next/router'
import { server } from '../../../config';

const ProductDetails = ({product}) => {

    return (
        <>
            {product ? (
            <>
                <h3>{product.name}</h3> 
                <p>{product.description}</p>
            </>
            )
            :
                <h1>no data</h1>
            }
      </>
    );
};

export const getStaticProps = async ({params}) => {

    // const res = await fetch(`${server}/api/products/${params.id}`)
    // const product = await res.json()
    const {all} = products
    const filtered = all.filter((product) => product.id === params.id )
    return {
      props: {
        product: filtered[0]
      },
    }
}
  
export const getStaticPaths = async () => {

    // const res = await fetch(`${server}/api/products/`)
    // const {all} = await res.json();

    // const paths = all.map((product) => (
    //     { params: { id: product.id.toString() },
    //   }))
    const {all} = products;
    const ids = all.map(product => product.id)
    const paths = ids.map((id) => ({ params: { id: id } }))

    return {
        paths,
        fallback: false,
    }
}

export default ProductDetails;