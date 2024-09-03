import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
 import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutPage from './components/About';
import Cart from './components/Cart';
import AddToCart from './components/AddToCart';
import UserDashboard from './pages/UserDashboard';
// import CheckoutPage from './pages/CheckoutPage';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/register" element={<Register />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/add-to-cart" element={<AddToCart />} />
            </Routes> 
            <Footer />
        </Router>
    );
};

export default App;
