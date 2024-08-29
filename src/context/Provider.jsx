import React, { useEffect, useState } from 'react'
import Context from './Context'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const Provider = (props) => {
  const [profile,setProfile]=useState([])
  const [loading,setLoading]=useState(true)
  const host="http://localhost:5000"
  const [user,setUser]=useState()
  
  useEffect(() => {
    setLoading(true)
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  
const getProfile=async()=>{
  setLoading(true);

  const auth=getAuth()
  const user=auth.currentUser
  const token = await user.getIdToken();

  try {
    const res = await fetch(`${host}/api/profile`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const data=await res.json()
    setProfile(data.profileData)
  } catch (err) {
    console.log(err);
  }finally{
    setLoading(false);
  }
}

const generateProfile=async(profile_text)=>{
  setLoading(true);
  const auth=getAuth()
  const user=auth.currentUser
  const token = await user.getIdToken();

  try{
    const res =await fetch(`${host}/api/profile`,{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`,
      },
      body:JSON.stringify({
        profile_text:profile_text
      }),
    })
    const result=await res.json()
    console.log (result)
    setProfile (result.generated_profile)
  }catch(err){
    console.log(err);
  }finally{
    setLoading(false);
  }
}

  return (<Context.Provider value={{profile, loading, user, setUser, getProfile, generateProfile}}>
    {props.children}
  </Context.Provider>)
}

export default Provider
