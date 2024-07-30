//@ts-nocheck
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth,db } from './firebase-config';


const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(errorCode, errorMessage);
    });
};

export default googleSignIn;
