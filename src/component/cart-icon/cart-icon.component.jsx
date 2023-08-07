import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartIcon = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <div className='cart-icon-container '>
            <i
                className={`fa-solid fa-cart-shopping ${
                    cartCount.length < 1 ? 'cart-icon' : 'cart-icon with-items'
                }`}
            />

            {cartCount > 0 ? (
                <span className='item-count'>{cartCount} </span>
            ) : (
                <span className='item-count-zero'> </span>
            )}
        </div>
    );
};

export default CartIcon;
