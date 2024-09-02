import React, { useEffect } from "react";
import "./Home.css";
import "../App.css";

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

    const initialDelay = 2000; // 2 seconds delay before the first slide
    const slideInterval = setInterval(nextSlide, 3000);

    const timeout = setTimeout(() => {
      slideInterval;
    }, initialDelay);

    return () => {
      clearInterval(slideInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="container">
      <div className="main-content">
        <div className="home-container">
          <div className="carousel">
            <div className="carousel-slide">
              <img
                src="https://www.mundoconectado.com.br/wp-content/uploads/2022/07/apple-iphone-chamada_9.jpg"
                alt="Electronics 1"
              />
              <div className="carousel-caption">Latest Smartphones</div>
            </div>
            <div className="carousel-slide">
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"
                alt="Electronics 2"
              />
              <div className="carousel-caption">Top Quality Laptops</div>
            </div>
            <div className="carousel-slide">
              <img
                src="https://s3.eu-west-2.amazonaws.com/selloffng/uploads/blog/202308/img_64e785a798a037-26280158-15565490.jpg"
                alt="Electronics 3"
              />
              <div className="carousel-caption">Advanced Home Appliances</div>
            </div>
            <div className="carousel-slide">
              <img
                src="https://smartphonemagazine.nl/wp-content/uploads/2024/06/compressed_img-G73vCjQDWOCV1oY35HvzwklW.png"
                alt="Electronics 4"
              />
              <div className="carousel-caption">Innovative Wearables</div>
            </div>
            <div className="carousel-slide">
              <img
                src="https://img.freepik.com/premium-photo/photo-high-end-audio-equipment-sound-systems_933496-38421.jpg"
                alt="Electronics 5"
              />
              <div className="carousel-caption">High-End Audio Equipment</div>
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
                Explore our wide range of the latest smartphones from top
                brands.
              </p>
            </div>
            <div className="category">
              <h2>computer & accessories</h2>
              <p>
                Find the perfect computer & accessories for work, gaming, or
                school.
              </p>
            </div>
            <div className="category">
              <h2>Home Appliances</h2>
              <p>Upgrade your home with our advanced appliances.</p>
            </div>
            <div className="category">
              <h2>Wearables</h2>
              <p>Discover our innovative wearables and smartwatches.</p>
            </div>
            <div className="category">
              <h2>smart devices</h2>
              <p>Experience superior quality with our smart devices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
