import { useParams } from 'react-router-dom';
import './category.styles.scss';
import { useContext, useEffect, useState } from 'react';

import { Context } from '../../context/context';
import ProductCard from '../../component/product-card/product-card.component';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(Context);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    return (
        <div className='category-container'>
            {products &&
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    );
};

export default Category;
