import { useContext } from 'react';
// import './checkout-item.styles.scss';
import { CartContext } from '../../context/cartContext';

const CartItem = ({ cartItem, index }) => {
    const { title, img, price, quantity } = cartItem;

    const { addItemToCart, removeItemToCart, clearItemToCart } =
        useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
    const clearItemHandler = () => clearItemToCart(cartItem);

    return (
        <tbody>
            <tr>
                <td className='table-number'>{index + 1}. </td>
                <td className='table-image'>
                    <img src={img} alt={title} />
                </td>
                <td className='table-title'>{title} </td>
                <td className='table-quantity'>
                    <td className='quantity-arrow' onClick={removeItemHandler}>
                        &#10094;
                    </td>
                    <td className='total-quantity'>{quantity}</td>
                    <td className='quantity-arrow' onClick={addItemHandler}>
                        &#10095;
                    </td>
                </td>
                <td className='table-price'>${price} </td>
                <td className='table-remove' onClick={clearItemHandler}>
                    &#10005;
                </td>
            </tr>
        </tbody>
    );
};

export default CartItem;
