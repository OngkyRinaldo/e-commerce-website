import { Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <header>
            <nav>
                <Link className='logo-container' to='/'>
                    <CrwnLogo />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link'>shop</Link>

                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
