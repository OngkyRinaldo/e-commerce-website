import { useContext } from 'react';
import './shop.styles.scss';
import ProductCard from '../../component/product-card/product-card.component';
import { Context } from '../../context/context';

const Shop = () => {
    const { products } = useContext(Context);
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;
