import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';

const App = () => {
    return (
        <Fragment>
            <Navigation />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/auth' element={<Authentication />} />
            </Routes>
        </Fragment>
    );
};

export default App;
