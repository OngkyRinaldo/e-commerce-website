import { useEffect } from 'react';
import SignInForm from '../../component/sign-in-form/sign-in-form.component';
import SignUpForm from '../../component/sign-up-form/sign-up-form.component';
import './authentication.styles.scss';
const Authentication = () => {
    useEffect(() => {
        document.title = 'Furniture Ecommerce ';
    }, []);
    return (
        <section className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </section>
    );
};

export default Authentication;
