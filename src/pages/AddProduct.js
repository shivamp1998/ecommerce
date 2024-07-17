import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        rating: '',
        image: ''
    });

    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(newProduct));
        enqueueSnackbar('Product added successfully!', { variant: 'success' });
        navigate('/products');
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Add New Product
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        value={newProduct.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={newProduct.description}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Price"
                        name="price"
                        value={newProduct.price}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        type="number"
                        required
                    />
                    <TextField
                        label="Rating"
                        name="rating"
                        value={newProduct.rating}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        type="number"
                        required
                    />
                    <TextField
                        label="Image URL"
                        name="image"
                        value={newProduct.image}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Add Product
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default AddProduct;
