import { Link } from 'react-router-dom';
import { Products } from '../../data/ProductsData';

const TrendingItem = () => {
    return (
        <>
            {Products.slice(9, 16).map((item) => (
                <div key={item.id} className='row-item'>
                    <Link to={`/categories/products/${item.title}`}>
                        <div className='item-header'>
                            <img src={item.img} alt='products' />
                        </div>
                        <div className='item-title'>
                            <p>{item.title}</p>
                            <p className='item-price'>$ {item.price}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default TrendingItem;
