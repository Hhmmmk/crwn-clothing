import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  useEffect(() => {
    const getUser = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
      console.log(response);
    };
    getUser();
  }, []);

  // What was in the lecture
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  // }, []);

  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGooglePopupUser}>Sign in with Google Popup</button>
        <button onClick={signInWithGoogleRedirect}>
          Sign in with Google Redirect
        </button>
      </div>
    </div>
  );
};

export default SignIn;
