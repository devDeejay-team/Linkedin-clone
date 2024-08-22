import React, { useState } from 'react'
import Context from './Context'

const Provider = (props) => {
  const [profile,setProfile]=useState([])
  const [loading,setLoading]=useState(true)
  const [user,setUser]=useState(null)
  const host="http://127.0.0.1:8080"

  
const getProfile=async(id)=>{
  setLoading(true);
  try {
    const res = await fetch(`${host}/get-profile/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
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
    const res =await fetch(`${host}/generate-profile`,{
      method:"post",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        profile_text:profile_text
      }),
    })
    const result=res.json()
    console.log (result)
    setProfile (result.generated_profile)
     localStorage.setItem("profile_id",result.profile_id)
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
