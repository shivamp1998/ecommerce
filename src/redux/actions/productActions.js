import axios from 'axios';

const API_URL = 'https://my-json-server.typicode.com/shivamp1998/ecommerce/products';

export const setProducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products,
    };
};

export const fetchProducts = () => {
    return (dispatch) => {
        axios
            .get(API_URL)
            .then((response) => {
                dispatch(setProducts(response.data));
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };
};

export const editProduct = (product) => {
    return {
        type: 'EDIT_PRODUCT',
        payload: product,
    };
};

export const deleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: id,
    };
};

export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product,
    };
};
