import { Link, NavLink, Outlet } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './navigation.styles.scss';
import { useContext, useState } from 'react';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import { UserContext } from '../../context/userContext';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const [clicked, setClicked] = useState(false);

    const responsiveHandler = () => setClicked(!clicked);
    return (
        <>
            <header>
                <nav>
                    <div className='nav-icons'>
                        <Link className='logo-container' to='/'>
                            <img src={Logo} alt='logo' />
                        </Link>
                        <li className='cart-mobile'>
                            <Link to='/checkout'>
                                <CartIcon />
                            </Link>
                        </li>
                    </div>

                    <div className='nav-links-container'>
                        <ul id='navbar2' className={clicked ? 'activeNav' : ''}>
                            <li>
                                <NavLink className='link' to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='link' to='/Categories/all'>
                                    Categories
                                </NavLink>
                            </li>
                            <li>
                                {currentUser ? (
                                    <span
                                        className='link'
                                        onClick={signOutUser}
                                    >
                                        Sign Out
                                    </span>
                                ) : (
                                    <NavLink className='link' to='/auth'>
                                        Sign In
                                    </NavLink>
                                )}
                            </li>
                            <li className='cart-desktop'>
                                <Link to='/checkout'>
                                    <CartIcon />
                                </Link>
                            </li>
                        </ul>
                    </div>

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
