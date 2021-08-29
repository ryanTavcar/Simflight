import React, {useState, useEffect} from 'react';
import products from '../../util/products';
import { useRouter } from 'next/router'
import Image from 'next/image'

const ProductDetails = () => {

    const router = useRouter()
    const { id } = router.query
    // const [prod, setProd] = useState([])
    console.log('id', id)
    const [product] = products.filter(product => product.id === Number(id));
    
    useEffect(() => {
        // setProd(product)
        
    }, [])
    // console.log('prod:', prod)

    return (
        <div>
            <h3>{product.name}</h3> 
            <p>{product.description}</p>
            <Image src={product.image} alt={product.name} width="200" height="200"/> 
        </div>
    );
}

// export function getStaticProps() {
//     const router = useRouter()
//     const { id } = router.query
//     const [product] = products.filter(product => product.id === Number(id));

//     return {
//         props: {
//             product
//         }
//     }

// }

// export async function getStaticPaths() {
//     const router = useRouter()
//     const { id } = router.query
//     const [product] = products.filter(product => product.id === Number(id));

//     return {
//         paths: [
//             {params: {id: product.id}}
//             ],
//             fallback: true,
//     }
// }

export default ProductDetails;