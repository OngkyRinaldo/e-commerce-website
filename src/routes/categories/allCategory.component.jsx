import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/products.context';

const AllCategory = () => {
    const { products } = useContext(ProductsContext);
    useEffect(() => {
        document.title = 'Furniture Ecommerce - All Furniture ';
    }, []);
    return (
        <>
            <div className='prouducts-container'>
                <div className='products-grid'>
                    {products.map((item) => (
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

export default AllCategory;
