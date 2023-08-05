import './notfound.styles.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container-not-found'>
            <div className='found-text'>
                <h2>Page Not Found</h2>
                <Link to='/'> Back To Home Page</Link>
            </div>
        </div>
    );
};

export default NotFound;
