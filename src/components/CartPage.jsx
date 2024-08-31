import React, { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import "./CartPage.css";
import "../App.css";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = [
    { id: 1, name: "Product 1", quantity: 2, price: 29.99 },
    { id: 2, name: "Product 2", quantity: 1, price: 49.99 },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="main-content">
        <div className="cart-page-container">
          <h1 className="cart-title">Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty.</p>
          ) : (
            <div>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <span>{item.name}</span>
                    <span>Qty: {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="cart-summary">
                <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
                <button
                  className="checkout-button"
                  onClick={() => setIsModalOpen(true)}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
          <button
            className="continue-shopping-button"
            onClick={() => (window.location.href = "/products")}
          >
            Continue Shopping
          </button>
          <CheckoutModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            cartItems={cartItems}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
