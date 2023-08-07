import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';
import Categories from './routes/categories/categories.component';
import DetailProduct from './component/detailProduct/detailProduct.component';
import NotFound from './component/notfound/notfound.component';
import AllCategory from './routes/categories/allCategory.component';
import CategoryFurnitures from './routes/categories/categoryFurnitures.component';
import CategoryElectronics from './routes/categories/categoryElectronics.component';
import CategoryLamp from './routes/categories/categoryLamp.component';
import CategoryKitchen from './routes/categories/categoryKitchen.component';
import CateogryChairs from './routes/categories/categoryChairs.component';
import CategorySkinCare from './routes/categories/categorySkinCare.component';
import Cart from './routes/cart/cart.component';
import Footer from './component/footer/footer.component';
import { useContext } from 'react';
import { UserContext } from './context/userContext';

const App = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='categories' element={<Categories />}>
                        <Route path='all' element={<AllCategory />} />
                        <Route
                            path='furnitures'
                            element={<CategoryFurnitures />}
                        />
                        <Route path='lamps' element={<CategoryLamp />} />
                        <Route path='kitchen' element={<CategoryKitchen />} />
                        <Route path='chairs' element={<CateogryChairs />} />
                        <Route
                            path='electronics'
                            element={<CategoryElectronics />}
                        />
                        <Route
                            path='skin-care'
                            element={<CategorySkinCare />}
                        />
                    </Route>
                    <Route
                        path='categories/products/:title'
                        element={<DetailProduct />}
                    />
                    {!currentUser ? (
                        <Route path='auth' element={<Authentication />} />
                    ) : (
                        <Route path='auth' element={<Home />} />
                    )}

                    <Route path='checkout' element={<Cart />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
            <Footer />
        </>
    );
};

export default App;
