import React, { useState } from 'react'
import Context from './Context'

const Provider = (props) => {
  const [profile,setProfile]=useState([])
  const [loading,setLoading]=useState(false)

  return (<Context.Provider value={{profile, loading}}>
    {props.children}
  </Context.Provider>)
}

export default Provider
