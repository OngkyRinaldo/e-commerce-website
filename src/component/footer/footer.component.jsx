import { Link } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <Link to='#'>About</Link>
                <Link to='#'>Store Location</Link>
                <Link to='#'>FAQs</Link>
                <Link to='#'>News</Link>
                <Link to='#'>Carrers</Link>
                <Link to='#'>Contact Us</Link>
            </div>

            <div className='footer-copyright'>
                <Link
                    to='https://github.com/OngkyRinaldo/e-commerce-website'
                    target='_blank'
                >
                    {' '}
                    &copy; Ongky Rinaldo and{' '}
                </Link>

                <Link
                    to='https://github.com/Abderraouf-Rahmani'
                    target='_blank'
                    className='footer-copyright'
                >
                    Design by Abderraouf
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
