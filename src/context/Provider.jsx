import React, { useState } from 'react'
import Context from './Context'

const Provider = (props) => {
  const [profile,setProfile]=useState([])
  const [loading,setLoading]=useState(false)
  const [user,setUser]=useState(null)

  return (<Context.Provider value={{profile, loading, user, setUser}}>
    {props.children}
  </Context.Provider>)
}

export default Provider
