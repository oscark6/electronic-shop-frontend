// src/AddToCart.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Updated import

function AddToCart() {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); // Updated variable name

  const handleAddToCart = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/api/cart', { productId, quantity }); // Adjust URL according to your backend setup
      alert('Product added to cart');
      navigate('/cart'); // Updated function call
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add product to cart');
    }
  };

  return (
    <div>
      <h2>Add to Cart</h2>
      <form onSubmit={handleAddToCart}>
        <div>
          <label>
            Product ID:
            <input
              type="number"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />
          </label>
        </div>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

export default AddToCart;