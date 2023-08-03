import { Link } from 'react-router-dom';
import { Products } from '../../data/ProductsData';

const HomeItem = () => {
    return (
        <>
            {Products.slice(0, 8).map((item) => (
                <div key={item.id} className='product normal'>
                    <Link>
                        <div className='product-header'>
                            <img src={item.img} alt='product1' />
                        </div>
                        <div className='product-details'>
                            <p>{item.description}</p>
                            <p className='item-price'>$ {item.price}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default HomeItem;
