import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductPage.css";

const ProductsPage = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoriesWithProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/categories/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data); // Log the data to see what’s being returned

        // Check if data is an array and set state accordingly
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error("Unexpected data structure:", data);
          setError("Failed to load categories and products.");
        }
      } catch (error) {
        console.error("Error fetching categories and products:", error);
        setError("Error fetching categories and products.");
      }
    };

    fetchCategoriesWithProducts();
  }, []);

  console.log(localStorage.getItem('access_token'))

  const addToCart = async (product) => {
    console.log(product)
    try {
      await axios.post('http://127.0.0.1:5000/cart', { productId: product, quantity: 1 }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      console.log('JWT Token:', localStorage.getItem('access_token'));
      alert('Product added to cart');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="products-container">
      <h1>Products</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        categories.map((category) => (
          <div key={category.id} className="category-section">
            <h2>{category.name}</h2>
            <div className="products-grid">
              {category.products.length > 0 ? (
                category.products.map((product) => (
                  <div key={product.id} className="product-card">
                    <img
                      src={product.image_url || 'https://via.placeholder.com/150'} 
                      alt={product.name}
                      className="product-image"
                    />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                  </div>
                ))
              ) : (
                <p>No products available in this category</p>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductsPage;
