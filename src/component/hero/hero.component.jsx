import Main1 from '../../assets/img/header/home-img-1.jpg';
import Main2 from '../../assets/img/header/home-img-2.jpg';
import Main3 from '../../assets/img/header/home-img-3.jpg';
import Main4 from '../../assets/img/header/home-img-4.jpg';
import { Link } from 'react-router-dom';
import './hero.styles.scss';

const Hero = () => {
    return (
        <div className='home-container'>
            <div className='grid-container'>
                <div className='featured grid-one'>
                    <Link
                        to='/categories/all'
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        <div id='img1' className='lil-overlay'></div>
                        <img src={Main1} alt='Main1' />

                        <p className='main-description'>Live Comfortably</p>
                    </Link>
                </div>
                <div className='featured grid-two'>
                    <Link
                        to='/categories/skin-care'
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        <div id='img1' className='lil-overlay'></div>
                        <img src={Main2} alt='Main2' />

                        <p className='main-description'>Skin Care</p>
                    </Link>
                </div>
                <div className='featured grid-four'>
                    <Link
                        to='/categories/kitchen'
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        <div id='img1' className='lil-overlay'></div>
                        <img src={Main3} alt='Main3' />

                        <p className='main-description'>Kitchen</p>
                    </Link>
                </div>
                <div className='featured grid-four-low'>
                    <Link
                        to='/categories/electronics'
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        <div id='img1' className='lil-overlay'></div>
                        <img src={Main4} alt='Main4' />

                        <p className='main-description'>Electronics</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
