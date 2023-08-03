import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvier } from './context/userContext';
import { CartProvider } from './context/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvier>
                <CartProvider>
                    <App />
                </CartProvider>
            </UserProvier>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
