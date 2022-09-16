import { createContext, useState, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log('authUser', user);
    });

    console.log('currentUser', currentUser);

    return unsubscribe;
  }, [currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
