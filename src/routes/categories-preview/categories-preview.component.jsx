import { useContext } from 'react';
import CategoryPreview from '../../component/category-preview/category-preview.componetn';
import { CartContext } from '../../context/cartContext';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CartContext);

    return (
        <>
            {Object.keys(categoriesMap).map((key) => {
                const products = categoriesMap[key];
                return (
                    <CategoryPreview
                        key={key}
                        title={key}
                        products={products}
                    />
                );
            })}
        </>
    );
};

export default CategoriesPreview;
