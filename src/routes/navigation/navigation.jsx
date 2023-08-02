import { Link, NavLink, Outlet } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './navigation.styles.scss';
import { useContext, useState } from 'react';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';
import { Context } from '../../context/context';

const Navigation = () => {
    const { currentUser } = useContext(Context);
    const { isCartOpen } = useContext(Context);

    const [clicked, setClicked] = useState(false);

    const responsiveHandler = () => setClicked(!clicked);
    return (
        <>
            <header>
                <nav>
                    <Link className='logo-container' to='/'>
                        <img src={Logo} alt='logo' />
                    </Link>

                    <div className='nav-links-container'>
                        <ul id='navbar2' className={clicked ? 'activeNav' : ''}>
                            <li>
                                <NavLink className='nav-link' to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='nav-link' to='/shop'>
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                {currentUser ? (
                                    <span
                                        className='nav-link'
                                        onClick={signOutUser}
                                    >
                                        Sign Out
                                    </span>
                                ) : (
                                    <NavLink className='nav-link' to='/auth'>
                                        Sign In
                                    </NavLink>
                                )}
                            </li>
                            <li>
                                <CartIcon />
                            </li>
                        </ul>
                    </div>

                    {isCartOpen && <CartDropdown />}

                    <div className='mobile'>
                        <i
                            id='bar'
                            className={clicked ? 'fas fa-times' : 'fas fa-bars'}
                            onClick={responsiveHandler}
                        ></i>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Navigation;
