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
        {/* <IntroUtils heading={"Services"} data={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ut minima iste praesentium corrupti repudiandae quisquam ab culpa dolores? Ullam tenetur rem mollitia eius sequi totam obcaecati fuga magni officiis."}/> */}
    </>
  )
}

export default Header
