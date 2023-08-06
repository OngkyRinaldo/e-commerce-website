import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../context/products.context';

const CategorySkinCare = () => {
    const { products } = useContext(ProductsContext);
    const filteredItems = products.filter(
        (item) => item.category === 'skin-care'
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

export default CategorySkinCare;
