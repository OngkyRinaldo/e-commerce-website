import { Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import { CartContext } from '../../context/cart.context';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    return (
        <header>
            <nav>
                <Link className='logo-container' to='/'>
                    <CrwnLogo />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        shop
                    </Link>

                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                    )}

                    <CartIcon />
                </div>

                {isCartOpen && <CartDropdown />}
            </nav>
        </header>
    );
};

export default Navigation;
