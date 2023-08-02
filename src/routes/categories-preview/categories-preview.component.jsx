import { useContext } from 'react';
import { Context } from '../../context/context';
import CategoryPreview from '../../component/category-preview/category-preview.componetn';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(Context);

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
