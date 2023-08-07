import './banner.styles.scss';

import Banner1 from '../../assets/img/banner/banner1.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-container'>
                <div className='text-side'>
                    <div className='text'>
                        <h2>Creative harmonious living</h2>
                        <p>
                            All Products are all made to standard sizes so that
                            you can mix and match them freely
                        </p>

                        <Link to='/Categories/all'>
                            <button>Shop Now</button>
                        </Link>
                    </div>
                </div>
                <div className='img-side'>
                    <img src={Banner1} alt='banner' />
                </div>
            </div>
        </div>
    );
};

export default Banner;
