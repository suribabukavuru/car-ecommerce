import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Luxury Cars
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/cars" className="nav-links">Cars</Link>
          </li>
          <li className="nav-item">
            <Link to="/payment" className="nav-links">Payment</Link>
          </li>
        </ul>
        
        <div className="nav-cart">
          <Link to="/cart" className="cart-icon">
            <FiShoppingCart />
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

