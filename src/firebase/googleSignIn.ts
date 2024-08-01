//@ts-nocheck
import { GoogleAuthProvider, signInWithPopup,signOut } from 'firebase/auth';
import { auth,db } from './firebase-config';


export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      return user
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(errorCode, errorMessage);
    });
};

export const googleSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log('User signed out');
      // Handle redirection or further processing here
    }).catch((error) => {
      console.error('Error during sign-out:', error);
    });
};

