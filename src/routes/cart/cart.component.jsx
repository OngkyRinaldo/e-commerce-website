import { useContext, useEffect } from 'react';
import './checkout.styles.scss';
import { CartContext } from '../../context/cartContext';
import CartItem from '../../component/cart-item/cart-item.component';

const Cart = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    useEffect(() => {
        document.title = 'Furniture Ecommerce - Cart ';
    }, []);
    return (
        <div className='checkout-container'>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                {cartItems.map((cartItem, index) => (
                    <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                        index={index}
                    />
                ))}
            </table>

            <div className='total'>TOTAL : ${cartTotal} </div>
        </div>
    );
};

export default Cart;
