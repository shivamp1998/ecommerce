import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Ecommerce
                </Typography>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '20px' }}>
                    Home
                </Link>
                <Link to="/products" style={{ color: 'inherit', textDecoration: 'none', marginRight: '20px' }}>
                    Products
                </Link>
                <Link to="/add-product" style={{ color: 'inherit', textDecoration: 'none', marginRight: '20px' }}>
                    Add Product
                </Link>
                <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <IconButton color="inherit">
                        <Badge badgeContent={cartItems.length} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
