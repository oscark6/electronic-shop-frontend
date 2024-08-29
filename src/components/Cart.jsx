// // // CartPage.js
// // import React, { useState, useEffect } from 'react';
// // // import { viewCart, removeFromCart } from './api';

// // const CartPage = () => {
// //     const [cartItems, setCartItems] = useState([]);
// //     const token = localStorage.getItem('token');

// //     useEffect(() => {
// //         const fetchCartItems = async () => {
// //             try {
// //                 const response = await viewCart(token);
// //                 setCartItems(response.data.cart_items);
// //             } catch (error) {
// //                 console.error('Failed to fetch cart items:', error);
// //             }
// //         };
// //         fetchCartItems();
// //     }, [token]);

// //     const handleRemove = async (cartId) => {
// //         try {
// //             await removeFromCart(token, cartId);
// //             setCartItems(cartItems.filter(item => item.cart_id !== cartId));
// //         } catch (error) {
// //             console.error('Failed to remove item:', error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2>Cart</h2>
// //             <ul>
// //                 {cartItems.map(item => (
// //                     <li key={item.cart_id}>
// //                         {item.product_name} - {item.quantity} - ${item.total_price}
// //                         <button onClick={() => handleRemove(item.cart_id)}>Remove</button>
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // };

// // export default Cart;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         const fetchCartItems = async () => {
//             try {
//                 const response = await axios.get('/cart'); // Adjust endpoint as necessary
//                 setCartItems(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch cart items:', error);
//             }
//         };

//         fetchCartItems();
//     }, []);

//     return (
//         <div>
//             <h1>Your Cart</h1>
//             {cartItems.length === 0 ? <p>Your cart is empty</p> : (
//                 <ul>
//                     {cartItems.map(item => (
//                         <li key={item.id}>
//                             {item.name} - {item.quantity} x ${item.price}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Cart;
