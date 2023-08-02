import { createContext, useEffect, useState } from 'react';
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
    getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils';

// cart context
const addCartItem = (cartItems, productToAdd) => {
    const exisitingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (exisitingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToRemove) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
// cart context

export const Context = createContext({
    // userContextStart
    currentUser: null,
    setCurrentUser: () => null,
    // userContextEnd

    // cartContextStart
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemToCart: () => {},
    clearItemToCart: () => {},
    cartCount: 0,
    cartTotal: 0,

    // cartContextEnd

    // productContextStart
    categoriesMap: {},
    // productContextEnd
});

export const ContextProvider = ({ children }) => {
    // userProviderStart
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubcribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubcribe;
    }, []);

    // userProviderEnd

    // cartProviderStart

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );

        setCartCount(newCartCount);
    }, [cartItems]);

    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );

        setCartTotal(newCartCount);
    }, [cartItems]);

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };
    const clearItemToCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    // userProviderEnd

    // productProviderStart

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    // productProviderEnd

    // testdata start

    // testdata End

    const value = {
        currentUser,
        setCurrentUser,
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemToCart,
        clearItemToCart,
        cartItems,
        cartCount,
        cartTotal,
        categoriesMap,
    };

    return <Context.Provider value={value}>{children} </Context.Provider>;
};
