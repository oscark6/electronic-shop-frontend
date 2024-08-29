// // api.js
 import axios from 'axios';

// const API_URL = 'http://localhost:5555'; // Update this if necessary

export const login = (username, password) => {
    return axios.post(`${API_URL}/login`, { username, password });
 };

 export const register = (username, password, role, details) => {
     return axios.post(`${API_URL}/register`, { username, password, role, ...details });
 };

// export const getProducts = () => {
//     return axios.get(`${API_URL}/products`);
// };

// export const addProduct = (token, productData) => {
//     return axios.post(`${API_URL}/seller/products`, productData, {
//         headers: { Authorization: `Bearer ${token}` }
//     });
// };

// // Other API methods similarly...
