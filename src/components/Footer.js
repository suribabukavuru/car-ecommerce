import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>Luxury Cars</h2>
            <p>Your premium destination for luxury vehicles</p>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/cars">Inventory</a></li>
                <li><a href="/cart">Your Cart</a></li>
                <li><a href="/payment">Finance</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h3>Company</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/return">Return Policy</a></li>
                <li><a href="/shipping">Shipping Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>

          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Luxury Cars. All rights reserved.</p>
          </div>

          <div className="payment-methods">
            <img src="https://placehold.co/30x20" alt="Visa payment method" />
            <img src="https://placehold.co/30x20" alt="MasterCard payment method" />
            <img src="https://placehold.co/30x20" alt="American Express payment method" />
            <img src="https://placehold.co/30x20" alt="PayPal payment method" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
