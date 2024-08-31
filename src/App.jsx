import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutPage from './components/About';
import CartPage from './components/CartPage';
// import CheckoutList from './components/CheckoutList';

const App = () => {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products/:id" element={<ProductPage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutPage />} />{" "}
          {/* Add the About route */}
          <Route path="/cart" element={<CartPage />} /> 
          {/* <Route path="/checkout" element={<CheckoutList />} /> */}
        </Routes>

        <Footer />
      </Router>
    );
};

export default App;
