import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

const Home = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to the Ecommerce Store
            </Typography>
            <Button component={Link} to="/products" variant="contained" color="primary" size="large">
                Go to Products
            </Button>
        </Box>
    );
};

export default Home;
