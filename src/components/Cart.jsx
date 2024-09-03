import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/cart/get', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCartItems(data.cart_items);
      } else {
        const errorText = await response.text();
        console.error('Failed to fetch cart items:', errorText);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const addToCart = async (productId, quantity) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ productId, quantity }),
      });

      if (response.ok) {
        console.log('Product added to cart');
        fetchCartItems(); // Refresh cart items after adding a product
      } else {
        console.error('Failed to add product to cart');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const removeFromCart = async (cartId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/cart/${cartId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        console.log('Product removed from cart');
        fetchCartItems(); // Refresh cart items after removing a product
      } else {
        console.error('Failed to remove product from cart');
      }
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price} = ${item.total}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* Add product to cart example */}
      <button onClick={() => addToCart(1, 2)}>Add Product ID 1</button>
    </div>
  );
};

export default Cart;
