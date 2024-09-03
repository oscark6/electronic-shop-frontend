import React, { useEffect, useState } from "react";
import "./ProductPage.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data); // Log the data to see what’s being returned

        // Extract the products array from the response object
        if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Expected an array of products under 'products' key, but got:", data);
          setProducts([]); // Set to an empty array to avoid further errors
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // Set to an empty array to avoid further errors
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId, quantity = 1) => {
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
      } else {
        const errorText = await response.text();
        console.error('Failed to add product to cart:', errorText);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
