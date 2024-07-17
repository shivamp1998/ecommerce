import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

const Cart = () => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
        enqueueSnackbar('Item removed from cart!', { variant: 'success' });
    };

    return (
        <div>
            <Typography variant="h4" component="h2" gutterBottom>
                Cart
            </Typography>
            {cartItems.length === 0 ? (
                <Typography variant="body1">No items in cart</Typography>
            ) : (
                <List>
                    {cartItems.map((item) => (
                        <ListItem key={item.id} divider>
                            <ListItemText
                                primary={item.name}
                                secondary={`Price: $${item.price}`}
                            />
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleRemoveFromCart(item.id)}
                            >
                                Remove
                            </Button>
                        </ListItem>
                    ))}
                </List>
            )}
        </div>
    );
};

export default Cart;
