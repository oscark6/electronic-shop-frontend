import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductPage.css';  


const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/products');
        setProducts(response.data.products);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    try {
      await axios.post('http://127.0.0.1:5000/cart', { productId: product.id, quantity: 1 }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      console.log('JWT Token:', localStorage.getItem('token'));
      alert('Product added to cart');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
  return (
    <div className="products-container">
      {/* <CategoryMenu /> */}
      

      <h2 style={{fontSize:90, marginTop:50}}>Products</h2>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id} className="product-it">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.image}style={{height:'280px', width:'400px'}}/>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
     

    </div>
  );
};

export default ProductPage;