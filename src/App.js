import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';

const App = () => {
    return (
        <Fragment>
            <Navigation />
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </Fragment>
    );
};

export default App;
