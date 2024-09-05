import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  // Fetch cart items on component mount
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/cart/get', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });

        if (response.status === 200) {
          setCartItems(response.data.cart_items);
        } else {
          setError('Failed to fetch cart items.');
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setError('Error fetching cart items.');
      }
    };

    fetchCartItems();
  }, []);

  // Remove an item from the cart
  const removeFromCart = async (itemId) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:5000/cart/${itemId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      if (response.status === 200) {
        alert('Product removed from cart');
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      } else {
        console.error('Failed to remove item from cart');
        setError('Failed to remove item from cart.');
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
      setError('Error removing item from cart.');
    }
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : cartItems.length > 0 ? (
        <div className="cart-grid">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image || 'https://via.placeholder.com/150'}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Total: ${item.total.toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
