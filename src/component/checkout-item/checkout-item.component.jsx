import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../context/cartContext';

const CheckoutItem = ({ cartItem }) => {
    const { title, img, price, quantity } = cartItem;

    const { addItemToCart, removeItemToCart, clearItemToCart } =
        useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
    const clearItemHandler = () => clearItemToCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={img} alt={`${title}`} />
            </div>
            <span className='name'>{title} </span>
            <span className='quantity'>
                {' '}
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'> {quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>$ {price} </span>
            <div className='remove-button' onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
