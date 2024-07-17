import axios from 'axios';

export const setProducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products,
    };
};

export const fetchProducts = () => {
    return (dispatch) => {
        axios
            .get('https://my-json-server.typicode.com/shivamp1998/ecommerce')
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
