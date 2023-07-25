import { useContext } from 'react';
import './shop.styles.scss';
import { ProductContext } from '../../context/product.context';
import ProductCard from '../../component/product-card/product-card.component';

const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;
