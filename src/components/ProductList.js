import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import Product from './Product';
import { Grid, Button } from '@mui/material';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const [sortedProducts, setSortedProducts] = useState(products);
    const [sortActive, setSortActive] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        setSortedProducts(products);
    }, [products]);

    const sortProducts = () => {
        const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
        setSortedProducts(sorted);
        setSortActive(true);
    };

    const clearSort = () => {
        setSortedProducts(products);
        setSortActive(false);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
                <h2>Products</h2>
                <div>
                    <Button onClick={sortProducts} variant="outlined" color="primary" style={{ marginRight: '10px' }}>
                        Sort by Price
                    </Button>
                    {sortActive && (
                        <Button onClick={clearSort} variant="outlined" color="secondary">
                            Clear Sort
                        </Button>
                    )}
                </div>
            </div>
            <Grid container spacing={3}>
                {sortedProducts.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProductList;
