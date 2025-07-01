import React, { useState } from 'react';
import './cart.css'

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // In a real app, this would come from state management
  const sampleCart = [
    {
      id: 1,
      name: '2023 Mercedes-Benz S-Class',
      price: 110000,
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a757671-ff04-42b5-85c5-d1f4dd783981.png',
      quantity: 1
    },
    {
      id: 2,
      name: '2023 BMW 7 Series',
      price: 95000,
      image: 'https://placehold.co/200x150',
      quantity: 1
    }
  ];

  // Calculate total
  const calculateTotal = () => {
    return sampleCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const removeItem = (id) => {
    console.log('Removed item:', id);
    // Implement actual removal logic
  };

  const updateQuantity = (id, newQuantity) => {
    console.log(`Updated ${id} quantity to ${newQuantity}`);
    // Implement actual quantity update logic
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      
      {sampleCart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-shopping-btn">Continue Shopping</button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {sampleCart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={`${item.name} ${item.color}`} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price.toLocaleString()}</p>
                  
                  <div className="quantity-control">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  
                  <button 
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <p>Subtotal: ${calculateTotal().toLocaleString()}</p>
              <p>Shipping: $1,000 (Flat Rate)</p>
              <p>Tax: ${(calculateTotal() * 0.08).toLocaleString()}</p>
              <hr />
              <p className="total">Total: ${(calculateTotal() * 1.08 + 1000).toLocaleString()}</p>
            </div>
            
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

