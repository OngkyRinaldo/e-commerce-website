import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className='cart-dropdown-container  '>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>

            <Button onClick={goToCheckOutHandler}>Check out</Button>
        </div>
    );
};

export default CartDropdown;
