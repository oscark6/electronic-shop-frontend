// CheckoutModal.js
import React from "react";
import "./CheckoutModal.css";

const CheckoutModal = ({ isOpen, onClose, cartItems }) => {
  if (!isOpen) return null;

  return (
    <div className="checkout-modal-overlay">
      <div className="checkout-modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Your Cart</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
