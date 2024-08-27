import React, { useContext } from 'react'
import Intro from './Intro'
import IntroUtils from "../utils/IntroUtils"
import Context from '../context/Context';

const Header = () => {
  const context= useContext(Context);
  const {profile}=context;
  console.log(profile)
  return (
    <>
        <Intro/>
        <IntroUtils heading={"About"} data={profile?.about}/>
    </>
  )
}

export default Header
