import { Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
const Navigation = () => {
    return (
        <header>
            <nav>
                <Link className='logo-container'>
                    <CrwnLogo />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link'>shop</Link>
                    <Link className='nav-link'>sign in</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
