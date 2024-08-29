import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>
                Welcome to My E-Commerce! We are a leading online retailer offering a wide range of products at competitive prices.
                Our mission is to provide exceptional service and quality products to our customers. 
                Our team is dedicated to ensuring you have the best shopping experience possible.
            </p>
            <p>
                If you have any questions or need support, feel free to <a href="mailto:support@myecommerce.com">contact us</a>.
            </p>
            <h2>Our Location</h2>
            <p>
                <strong>Office Address:</strong><br />
                123 E-Commerce Lane,<br />
                Suite 100,<br />
                Commerce City,<br />
                CA 12345,<br />
                USA
            </p>
            <p>
                <strong>Phone:</strong> (123) 456-7890<br />
                <strong>Email:</strong> <a href="mailto:support@myecommerce.com">support@myecommerce.com</a>
            </p>
            <p>
                <strong>Business Hours:</strong><br />
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
            </p>
            <h2>Find Us on the Map</h2>
            <div>
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
        </div>
    );
};

export default AboutPage;
