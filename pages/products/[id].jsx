import React, {useState, useEffect} from 'react';
import products from '../../src/util/products';
import { useRouter } from 'next/router'
import Image from 'next/image'

const ProductDetails = () => {

    const router = useRouter()
    const { id } = router.query
    // const [prod, setProd] = useState([])
    console.log('id', id)
    const [product] = products.filter(product => product.id === Number(id));
    
    // useEffect(() => {
    //     setProd(product)
    // }, [])


    return (
        <div>
            {product &&
                <>
                    <h3>{product.name}</h3> 
                    <p>{product.description}</p>
                    <Image src={product.image} alt={product.name} width="200" height="200"/> 
                </>
            }
        </div>
    );
}

export default ProductDetails;