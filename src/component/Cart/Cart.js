import React from 'react';
import './Cart.css';
const Cart = (props) => {
    return (
        <div className='cart-info'>
           <h4>Order Summary</h4>
            <p>Selected Items: {props.card.length}</p> 
        </div>
    );
};

export default Cart;