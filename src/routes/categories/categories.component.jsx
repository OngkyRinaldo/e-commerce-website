import { Outlet } from 'react-router-dom';
import CategoriesHeader from '../../component/categories/categoriesHeader.component';
import './categories.styles.scss';

const Categories = () => {
    return (
        <>
            <CategoriesHeader />
            <Outlet />
        </>
    );
};

export default Categories;
