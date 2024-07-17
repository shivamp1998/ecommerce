import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to the Ecommerce Store</h1>
            <Link to="/products" className="btn btn-primary">Go to Products</Link>
        </div>
    );
};

export default Home;
