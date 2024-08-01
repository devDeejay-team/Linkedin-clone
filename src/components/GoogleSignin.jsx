import { useNavigate } from 'react-router-dom';
import {googleSignIn} from '../firebase/googleSignIn';
import { FaGoogle } from "react-icons/fa";

export const GoogleSignin = () => {
  const navigate=useNavigate()

  const handleSignin=()=>{
    const result= googleSignIn()
    if(result){
      navigate('/profile')
    }
  }

  return (
    <>
      <button onClick={handleSignin} className='btn btn-primary text-center shadow'><FaGoogle className='mb-1 me-2'/>Continue in with Google</button>
    </>
  );
};

