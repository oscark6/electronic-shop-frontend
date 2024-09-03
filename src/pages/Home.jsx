import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "../App.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://www.mundoconectado.com.br/wp-content/uploads/2022/07/apple-iphone-chamada_9.jpg",
    "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
    "https://s3.eu-west-2.amazonaws.com/selloffng/uploads/blog/202308/img_64e785a798a037-26280158-15565490.jpg",
    "https://smartphonemagazine.nl/wp-content/uploads/2024/06/compressed_img-G73vCjQDWOCV1oY35HvzwklW.png",
    "https://img.freepik.com/premium-photo/photo-high-end-audio-equipment-sound-systems_933496-38421.jpg"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [slides.length]);

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="hcontainer">
      <div className="main-content">
        <div className="home-container">
          {/* Carousel Section */}
          <div className="carousel">
            {slides.map((slide, index) => (
              <div
                className="carousel-slide"
                key={index}
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                <img src={slide} alt={`Electronics ${index + 1}`} />
                <div className="carousel-caption">
                  {/* You can customize captions based on the slide */}
                  {index === 0 && "Latest Smartphones"}
                  {index === 1 && "Top Quality Laptops"}
                  {index === 2 && "Advanced Home Appliances"}
                  {index === 3 && "Innovative Wearables"}
                  {index === 4 && "High-End Audio Equipment"}
                </div>
              </div>
            ))}
          </div>

          {/* Title and Description */}
          <h1 className="home-title">Welcome to My E-Commerce</h1>
          <p className="home-description">
            Discover the latest in electronics, from cutting-edge smartphones to
            powerful laptops and everything in between. We offer high-quality
            products at competitive prices.
          </p>

          {/* Categories Section */}
          <div className="home-categories">
            <div className="category" onClick={() => handleCategoryClick("smartphones")}>
              <h2>Smartphones</h2>
              <p>Explore our wide range of the latest smartphones from top brands.</p>
            </div>
            <div className="category" onClick={() => handleCategoryClick("computer")}>
              <h2>Computer & Accessories</h2>
              <p>Find the perfect computer & accessories for work, gaming, or school.</p>
            </div>
            <div className="category" onClick={() => handleCategoryClick("home-appliances")}>
              <h2>Home Appliances</h2>
              <p>Upgrade your home with our advanced appliances.</p>
            </div>
            <div className="category" onClick={() => handleCategoryClick("wearables")}>
              <h2>Wearables</h2>
              <p>Discover our innovative wearables and smartwatches.</p>
            </div>
            <div className="category" onClick={() => handleCategoryClick("smart-devices")}>
              <h2>Smart Devices</h2>
              <p>Experience superior quality with our smart devices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
