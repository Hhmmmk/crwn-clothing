import { useState } from 'react';

import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import { FormInput } from '../form-input/form-input.component';
import { Button, BUTTON_TYPE_CLASSES } from '../button/button.component';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

export const SignInForm = ({ googleSignIn }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGooglePopupUser = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        alert("Email or Password  doesn't exist.");
      }
    }
  };

  return (
    <div className='sign-in-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>

          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGooglePopupUser}
          >
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};
