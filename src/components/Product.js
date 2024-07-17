import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct, deleteProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { Card, CardContent, CardActions, Button, Typography, TextField, CardMedia } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState(product);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        dispatch(editProduct(editedProduct));
        setIsEditing(false);
        enqueueSnackbar('Product updated successfully!', { variant: 'success' });
    };

    const handleDelete = () => {
        dispatch(deleteProduct(product.id));
        enqueueSnackbar('Product deleted successfully!', { variant: 'success' });
    };

    const handleChange = (e) => {
        setEditedProduct({
            ...editedProduct,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                {isEditing ? (
                    <div>
                        <TextField
                            label="Name"
                            name="name"
                            value={editedProduct.name}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Description"
                            name="description"
                            value={editedProduct.description}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Price"
                            name="price"
                            value={editedProduct.price}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                        <TextField
                            label="Rating"
                            name="rating"
                            value={editedProduct.rating}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                        <TextField
                            label="Image URL"
                            name="image"
                            value={editedProduct.image}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <Button onClick={handleSave} color="primary" variant="contained">
                            Save
                        </Button>
                        <Button onClick={() => setIsEditing(false)} color="secondary" variant="contained" sx={{ ml: 2 }}>
                            Cancel
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price: ${product.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Rating: {product.rating}
                            </Typography>
                        </Link>
                    </div>
                )}
            </CardContent>
            <CardActions>
                <Button onClick={handleEdit} startIcon={<EditIcon />} size="small">Edit</Button>
                <Button onClick={handleDelete} startIcon={<DeleteIcon />} size="small">Delete</Button>
                <Button onClick={() => dispatch(addToCart(product))} startIcon={<AddShoppingCartIcon />} size="small">
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default Product;
