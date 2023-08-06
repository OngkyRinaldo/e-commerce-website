import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartIcon = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <div className='cart-icon-container '>
            <ShoppingIcon className='shopping-icon ' />
            <span className='item-count'> {cartCount} </span>
        </div>
    );
};

export default CartIcon;
