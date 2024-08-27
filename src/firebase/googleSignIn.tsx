//@ts-nocheck
import { GoogleAuthProvider, signInWithPopup,signOut } from 'firebase/auth';
import { auth,db } from './firebase-config';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

export const googleSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log('User signed out');
    }).catch((error) => {
      console.error('Error during sign-out:', error);
    });
};

export const GoogleSignin = () => {
  const navigate=useNavigate()

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      const idToken = await user.getIdToken(); // Get the ID Token
      localStorage.setItem("auth_token", idToken);
    console.log("ID Token:", idToken);
      console.log(user);

      // Ensure user is defined before navigating
      if (user) {
        console.log('Navigating to /profile');
        navigate('/profile');
      } else {
        console.error('User object is undefined');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <>
      <button onClick={googleSignIn} className='btn btn-primary text-center shadow'><FaGoogle className='mb-1 me-2'/>Continue in with Google</button>
    </>
  );
};

