import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, decrementQuantity, incrementQuantity } from './CartSlice';
import './CartItem.css';


const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let amount = 0;
    cart.forEach((item) => {
      amount +=  item.quantity;
     });
     return amount;
  };

const calculateTotalPrice = () => {
    let ammount = 0;
    cart.forEach((item) => {
      ammount += item.cost * item.quantity;
    });
    return ammount;
};

  const handleCheckoutShopping = (e) => {
    alert('FUNCTION NOT ADDED YET wait... COMMING SOON');
  };


  const handleContinueShopping = (e) => {
    dispatch(onContinueShopping(e));
  };



  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    if ( item.quantity > 1) {
    dispatch(decrementQuantity(item));
    } else {
      dispatch(removeItem(item))
    }
  };
  
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    let ammount = 0;
    ammount += item.cost * item.quantity;
    return ammount;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: {calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <h2 style={{ color: 'black' }}>Total Price: ${calculateTotalPrice()}</h2>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


