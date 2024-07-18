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

export const addProduct = (product) => {
    return (dispatch) => {
        axios
            .post(API_URL, product)
            .then((response) => {
                dispatch({
                    type: 'ADD_PRODUCT',
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
    };
};

export const editProduct = (product) => {
    return (dispatch) => {
        axios
            .patch(`${API_URL}/${product.id}`, product)
            .then((response) => {
                dispatch({
                    type: 'EDIT_PRODUCT',
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.error('Error editing product:', error);
            });
    };
};

export const deleteProduct = (id) => {
    return (dispatch) => {
        axios
            .delete(`${API_URL}/${id}`)
            .then(() => {
                dispatch({
                    type: 'DELETE_PRODUCT',
                    payload: id,
                });
            })
            .catch((error) => {
                console.error('Error deleting product:', error);
            });
    };
};
