import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './navigation.styles.scss';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import { CartContext } from '../../context/cart.context';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const [clicked, setClicked] = useState(false);

    const responsiveHandler = () => setClicked(!clicked);
    return (
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
                                Categories
                            </NavLink>
                        </li>
                        <li>
                            {currentUser ? (
                                <span
                                    className='nav-link'
                                    onClick={signOutUser}
                                >
                                    SIGN OUT
                                </span>
                            ) : (
                                <NavLink className='nav-link' to='/auth'>
                                    SIGN IN
                                </NavLink>
                            )}
                        </li>
                        <li>
                            <CartIcon />
                        </li>
                    </ul>
                    {/* <NavLink className='nav-link' to='/'>
                        Home
                    </NavLink>
                    <NavLink className='nav-link' to='/shop'>
                        Categories
                    </NavLink>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <NavLink className='nav-link' to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}

                    <CartIcon /> */}
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
    );
};

export default Navigation;
