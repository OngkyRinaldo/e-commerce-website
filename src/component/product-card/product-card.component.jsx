import { useContext } from 'react';
import Button from '../button/button.component.jsx';
import './product-card.styles.scss';
import { Context } from '../../context/context.jsx';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(Context);

    const addProductToCart = () => addItemToCart(product);
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name} </span>
                <span className='price'>${price} </span>
            </div>

            <Button buttonType='inverted' onClick={addProductToCart}>
                Add to Card
            </Button>
        </div>
    );
};

export default ProductCard;
