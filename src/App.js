import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/Cart';
import AddProduct from './pages/AddProduct';
import ProductDetail from './pages/ProductDetail';
import { CssBaseline, Container } from '@mui/material';

const App = () => {
    return (
        <Router>
            <CssBaseline />
            <Navbar />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
