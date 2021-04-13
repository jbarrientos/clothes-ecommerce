import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ? 
          cartItems.map(item => <CartItem key={item.id} item={item} />) :
          <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      { cartItems.length ? <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
        }
      }>GO TO CHECKOUT</CustomButton> : null }
    </div>
  );
};

// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));