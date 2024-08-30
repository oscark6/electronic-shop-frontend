import React, { useEffect } from "react";
import "./Home.css";

const HomePage = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    };

    const slideInterval = setInterval(nextSlide, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="home-container">
      <div className="carousel">
        <div className="carousel-slide">
          <img src="/images/electronics1.jpg" alt="Electronics 1" />
          <div className="carousel-caption">Latest Smartphones</div>
        </div>
        <div className="carousel-slide">
          <img src="/images/electronics2.jpg" alt="Electronics 2" />
          <div className="carousel-caption">Top Quality Laptops</div>
        </div>
        <div className="carousel-slide">
          <img src="/images/electronics3.jpg" alt="Electronics 3" />
          <div className="carousel-caption">Advanced Home Appliances</div>
        </div>
      </div>
      <h1 className="home-title">Welcome to My E-Commerce</h1>
      <p className="home-description">
        Discover the latest in electronics, from cutting-edge smartphones to
        powerful laptops and everything in between. We offer high-quality
        products at competitive prices.
      </p>
      <div className="home-categories">
        <div className="category">
          <h2>Smartphones</h2>
          <p>
            Explore our wide range of the latest smartphones from top brands.
          </p>
        </div>
        <div className="category">
          <h2>Laptops</h2>
          <p>Find the perfect laptop for work, gaming, or school.</p>
        </div>
        <div className="category">
          <h2>Home Appliances</h2>
          <p>Upgrade your home with our advanced appliances.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
