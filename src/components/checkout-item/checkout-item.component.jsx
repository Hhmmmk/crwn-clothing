import { useContext } from 'react';

import { CartContext } from '../../components/context/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const { name, quantity, imageUrl, price } = cartItem;

  const decrementHandler = () => removeItemFromCart(cartItem);
  const incrementHandler = () => addItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={decrementHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>

        <div className='arrow' onClick={incrementHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>$ {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
