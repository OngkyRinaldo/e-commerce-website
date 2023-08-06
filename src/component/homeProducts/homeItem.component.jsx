import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';

const HomeItem = () => {
    const { products } = useContext(ProductsContext);
    return (
        <>
            {products.slice(0, 8).map((item) => (
                <div key={item.id} className='product normal'>
                    <Link to={`categories/products/${item.title}`}>
                        <div className='product-header'>
                            <img src={item.img} alt='products' />
                        </div>
                        <div className='product-details'>
                            <p>{item.title}</p>
                            <p className='item-price'>$ {item.price}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default HomeItem;
