import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGooglePopupUser}>Sign in with Google Popup</button>
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignIn;
