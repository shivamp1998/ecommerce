import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import Product from './Product';

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
        <div className="container">
            <h2>Products</h2>
            <div className="sort-button">
                <button onClick={sortProducts}>Sort by Price</button>
                {sortActive && <button className="clear-sort" onClick={clearSort}>Clear Sort</button>}
            </div>
            <div className="product-list">
                {sortedProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
