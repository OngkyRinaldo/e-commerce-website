import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';
import Checkout from './routes/checkout/checkout.component';
import Categories from './routes/categories/categories.component';
import DetailProduct from './component/detailProduct/detailProduct.component';
import NotFound from './component/notfound/notfound.component';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='categories' element={<Categories />}></Route>
                <Route
                    path='categories/products/:title'
                    element={<DetailProduct />}
                />
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
