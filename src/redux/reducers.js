import {PRODUCT_LIST} from './constants'

const productList = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            return { products: action.payload };
        default:
            return state;
    }
};

export {productList};