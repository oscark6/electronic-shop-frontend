import React, { useState } from "react";

import "./About.css";
import "./form.css"; // Import form styles

const AboutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    // Handle form submission (e.g., send data to a server)
    setSuccessMessage(
      "Thank you for your message! We will get back to you soon."
    );
    setErrorMessage("");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to My E-Commerce! We are a leading online retailer offering a
        wide range of products at competitive prices. Our mission is to provide
        exceptional service and quality products to our customers. Our team is
        dedicated to ensuring you have the best shopping experience possible.
      </p>
      <p className="about-contact">
        If you have any questions or need support, feel free to{" "}
        <a href="mailto:support@myecommerce.com">contact us</a>.
      </p>
      <h2 className="about-subtitle">Our Location</h2>
      <p className="about-address">
        <strong>Office Address:</strong>
        <br />
        123 E-Commerce Lane,
        <br />
        Suite 100,
        <br />
        Commerce City,
        <br />
        CA 12345,
        <br />
        USA
      </p>
      <p className="about-phone-email">
        <strong>Phone:</strong> (123) 456-7890
        <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:support@myecommerce.com">support@myecommerce.com</a>
      </p>
      <p className="about-hours">
        <strong>Business Hours:</strong>
        <br />
        Monday - Friday: 9:00 AM - 6:00 PM
        <br />
        Saturday: 10:00 AM - 4:00 PM
        <br />
        Sunday: Closed
      </p>
      <h2 className="about-subtitle">Find Us on the Map</h2>
      <div className="about-map">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.430315665278!2d-122.0838519846818!3d37.38605177983272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7d8d2330fdf%3A0x89db54f1a0a79d57!2sGoogleplex!5e0!3m2!1sen!2sus!4v1638987748205!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <h2 className="about-subtitle">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
        {errorMessage && <p className="form-error">{errorMessage}</p>}
        {successMessage && <p className="form-success">{successMessage}</p>}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default AboutPage;
