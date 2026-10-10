import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart
      .reduce((total, item) => {
        const costNum = parseFloat(item.cost.replace('$', ''));
        return total + costNum * item.quantity;
      }, 0)
      .toFixed(2);
  };

  // Calculate total cost for a specific item based on quantity
  const calculateTotalCost = (item) => {
    const costNum = parseFloat(item.cost.replace('$', ''));
    return (costNum * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>
      <div>
        {cart.length === 0 ? (
          <p style={{ textAlign: 'center', fontSize: '18px', margin: '40px 0' }}>
            Your cart is currently empty.
          </p>
        ) : (
          cart.map((item) => (
            <div
              className="cart-item"
              key={item.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                borderBottom: '1px solid #ccc',
                padding: '15px 0'
              }}
            >
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div className="cart-item-details" style={{ flex: '1', marginLeft: '20px' }}>
                <div className="cart-item-name" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  {item.name}
                </div>
                <div className="cart-item-cost" style={{ color: '#666', margin: '5px 0' }}>
                  Unit Price: {item.cost}
                </div>
                <div className="cart-item-quantity" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    className="cart-item-button cart-item-button-dec"
                    style={{
                      padding: '2px 10px',
                      fontSize: '16px',
                      cursor: 'pointer',
                      backgroundColor: '#f0f0f0',
                      border: '1px solid #ccc',
                      borderRadius: '4px'
                    }}
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    style={{
                      padding: '2px 10px',
                      fontSize: '16px',
                      cursor: 'pointer',
                      backgroundColor: '#f0f0f0',
                      border: '1px solid #ccc',
                      borderRadius: '4px'
                    }}
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total" style={{ marginTop: '8px', fontWeight: 'bold', color: '#2e7d32' }}>
                  Subtotal: ${calculateTotalCost(item)}
                </div>
              </div>
              <button
                className="cart-item-delete"
                style={{
                  backgroundColor: '#d32f2f',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
      <div
        className="continue_shopping_btn"
        style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}
      >
        <button
          className="get-started-button"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={(e) => onContinueShopping(e)}
        >
          Continue Shopping
        </button>
        <button
          className="get-started-button1"
          style={{
            backgroundColor: '#2e7d32',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={(e) => handleCheckoutShopping(e)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
