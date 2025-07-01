import React, { useState } from 'react';
import './Payment.css'

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment
    console.log('Processing payment with:', { paymentMethod, cardDetails });
    // In a real app, handle Stripe integration here
  };

  return (
    <div className="payment-container">
      <h1>Payment Information</h1>
      
      <div className="payment-methods">
        <div className="method-tabs">
          <button 
            className={paymentMethod === 'credit' ? 'active' : ''}
            onClick={() => setPaymentMethod('credit')}
          >
            Credit Card
          </button>
          <button 
            className={paymentMethod === 'debit' ? 'active' : ''}
            onClick={() => setPaymentMethod('debit')}
          >
            Debit Card
          </button>
          <button 
            className={paymentMethod === 'paypal' ? 'active' : ''}
            onClick={() => setPaymentMethod('paypal')}
          >
            PayPal
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {paymentMethod === 'credit' || paymentMethod === 'debit' ? (
            <div className="card-form">
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  name="number"
                  value={cardDetails.number}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    name="expiry"
                    value={cardDetails.expiry}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                  />
                </div>
                
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  name="name"
                  value={cardDetails.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                />
              </div>
            </div>
          ) : (
            <div className="paypal-method">
              <p>You will be redirected to PayPal to complete your purchase</p>
            </div>
          )}
          
          <button type="submit" className="submit-payment-btn">
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;

