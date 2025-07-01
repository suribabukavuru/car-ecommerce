import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Premium Luxury Cars</h1>
          <p>Experience the pinnacle of automotive excellence</p>
          <button className="explore-btn">Explore Collection</button>
        </div>
        <div className="hero-image">
          <img src="https://placehold.co/1920x1080" alt="Showroom featuring luxury cars including a red Ferrari, black Mercedes, and silver Porsche under bright lights" />
        </div>
      </section>

      <section className="featured-cars">
        <h2>Featured Models</h2>
        <div className="car-grid">
          {/* Featured cars will be populated from backend */}
        </div>
      </section>

      <section className="about-section">
        <div className="about-image">
          <img src="https://placehold.co/600x400" alt="Interior view of a luxury car dealership with modern architecture and glass walls" />
        </div>
        <div className="about-content">
          <h2>About Our Collection</h2>
          <p>We specialize in the finest luxury vehicles from around the world. Our curated collection represents automotive perfection.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p><strong>Phone:</strong> +1 800-CAR-LUXE</p>
          <p><strong>Email:</strong> info@luxurycars.com</p>
          <p><strong>Address:</strong> 123 Luxury Drive, Beverly Hills, CA 90210</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

