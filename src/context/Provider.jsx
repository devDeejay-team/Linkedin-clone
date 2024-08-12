import React, { useState } from 'react'
import Context from './Context'

const Provider = (props) => {
  const [profile,setProfile]=useState([])
  const [loading,setLoading]=useState(true)
  const [user,setUser]=useState(null)
  const host="https://linkpro-vx4zg6brba-uc.a.run.app"

  
const getProfile=async(id)=>{
  setLoading(true);
  try {
    const res = await fetch(`${host}/generate-profile/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data=await res.json()
    setProfile(data)
  } catch (err) {
    console.log(err);
  }finally{
    setLoading(false);
  }
}

const generateProfile=async(profile_text)=>{
  setLoading(true);
  try{
    const res =await fetch(`${host}/submit-profile`,{
      method:"post",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        profile_text:profile_text
      }),
    })
    const result=res.json()
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
