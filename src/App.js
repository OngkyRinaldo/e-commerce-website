import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
    return (
        <Fragment>
            <Navigation />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/auth' element={<Authentication />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </Fragment>
    );
};

export default App;
