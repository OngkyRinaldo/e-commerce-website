import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('password do not match');

            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocumentFromAuth(user, { displayName });
            alert('Your account has been created successfully');
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                alert(error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Name'
                    inputOptions={{
                        type: 'text',
                        require: true,
                        onChange: handleChange,
                        name: 'displayName',
                        value: displayName,
                    }}
                />

                <FormInput
                    label='Email'
                    inputOptions={{
                        type: 'email',
                        require: true,
                        onChange: handleChange,
                        name: 'email',
                        value: email,
                    }}
                />
                <FormInput
                    label='Password'
                    inputOptions={{
                        type: 'password',
                        require: true,
                        onChange: handleChange,
                        name: 'password',
                        value: password,
                    }}
                />
                <FormInput
                    label='Confirm Password'
                    inputOptions={{
                        type: 'password',
                        require: true,
                        onChange: handleChange,
                        name: 'confirmPassword',
                        value: confirmPassword,
                    }}
                />

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
