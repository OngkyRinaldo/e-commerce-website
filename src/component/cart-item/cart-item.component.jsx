import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
    const { title, img, price, quantity } = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={img} alt={`${title}`} />
            <div className='item-details'>
                <span className='name'>{title}</span>
                <span>
                    {quantity}x $ {price}{' '}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
