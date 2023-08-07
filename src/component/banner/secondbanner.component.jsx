import './banner.styles.scss';

import Banner2 from '../../assets/img/banner/banner2.jpg';
import { Link } from 'react-router-dom';

const SecondBanner = () => {
    return (
        <div className='banner'>
            <div className='banner-container-reverse'>
                <div className='text-side'>
                    <div className='text'>
                        <h2>Comfortable & Elegante Living</h2>
                        <p>
                            All Products are all made to standard sizes so that
                            you can mix and match them freely
                        </p>

                        <Link
                            to='/Categories/all'
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            <button>Shop Now</button>
                        </Link>
                    </div>
                </div>
                <div className='img-side'>
                    <img src={Banner2} alt='banner' />
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;
