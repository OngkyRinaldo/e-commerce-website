import { Link } from 'react-router-dom';
import { Products } from '../../data/ProductsData';

const CategoryFurnitures = () => {
    const filteredItems = Products.filter(
        (item) => item.category === 'furniture'
    );
    return (
        <>
            <div className='prouducts-container'>
                <div className='products-grid'>
                    {filteredItems.map((item) => (
                        <div key={item.id} className='product'>
                            <Link to={`/categories/products/${item.title}`}>
                                <div className='product-header'>
                                    <img src={item.img} alt='product1' />
                                </div>
                                <div className='product-details'>
                                    <p className='item-title'>{item.title}</p>
                                    <p className='item-price'>$ {item.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryFurnitures;
