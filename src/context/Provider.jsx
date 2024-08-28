import React, { useState } from 'react'
import Context from './Context'

const Provider = (props) => {
  const [profile,setProfile]=useState([])
  const [loading,setLoading]=useState(true)
  const host="http://localhost:5000"
  const token = localStorage.getItem('auth_token');

  
const getProfile=async(id)=>{
  setLoading(true);
  try {
    const res = await fetch(`${host}/api/profile`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const data=await res.json()
    setProfile(data.generated_profile)
  } catch (err) {
    console.log(err);
  }finally{
    setLoading(false);
  }
}

const generateProfile=async(profile_text)=>{
  setLoading(true);
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
     localStorage.setItem("profile_id",result.profile_id)
  }catch(err){
    console.log(err);
  }finally{
    setLoading(false);
  }
}

  return (<Context.Provider value={{profile, loading, getProfile, generateProfile}}>
    {props.children}
  </Context.Provider>)
}

export default Provider
