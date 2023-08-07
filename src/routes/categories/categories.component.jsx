import { Outlet } from 'react-router-dom';
import CategoriesHeader from '../../component/categories/categoriesHeader.component';
import './categories.styles.scss';

const Categories = () => {
    return (
        <main>
            <CategoriesHeader />
            <Outlet />
        </main>
    );
};

export default Categories;
