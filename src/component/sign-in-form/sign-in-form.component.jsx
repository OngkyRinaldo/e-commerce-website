import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';
import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const navigate = useNavigate();

    const signwinWithGoogle = async () => {
        try {
            await signInWithGooglePopup();
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );

            alert('Login Success!');
            navigate('/');

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;

                case 'auth/user-not-found':
                    alert('no user associated with this email');

                    break;
                default:
                    console.error(error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label='email'
                    inputOptions={{
                        type: 'email',
                        required: true,
                        onChange: handleChange,
                        name: 'email',
                        value: email,
                    }}
                />
                <FormInput
                    label='password'
                    inputOptions={{
                        type: 'password',
                        required: true,
                        onChange: handleChange,
                        name: 'password',
                        value: password,
                    }}
                />

                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button
                        buttonType='google'
                        onClick={signwinWithGoogle}
                        type='button'
                    >
                        Google sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
