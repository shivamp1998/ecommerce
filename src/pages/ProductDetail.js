import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Card, CardContent, CardMedia, Button } from '@mui/material';
import { addToCart } from '../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const product = useSelector((state) =>
        state.products.products.find((product) => product.id === parseInt(id))
    );

    if (!product) {
        return <Typography variant="h5">Product not found</Typography>;
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        enqueueSnackbar('Item added to cart!', { variant: 'success' });
    };

    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Card>
                    <CardMedia
                        component="img"
                        height="400"
                        image={product.image}
                        alt={product.name}
                    />
                    <CardContent>
                        <Typography variant="h4" component="h1" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {product.description}
                        </Typography>
                        <Typography variant="h6">Price: ${product.price}</Typography>
                        <Typography variant="h6">Rating: {product.rating}</Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default ProductDetail;
