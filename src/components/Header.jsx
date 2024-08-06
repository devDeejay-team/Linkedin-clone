import React from 'react'
import Intro from './Intro'
import IntroUtils from "../utils/IntroUtils"

const Header = () => {
  return (
    <>
        <Intro/>
        <IntroUtils heading={"About"} data={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ut minima iste praesentium corrupti repudiandae quisquam ab culpa dolores? Ullam tenetur rem mollitia eius sequi totam obcaecati fuga magni officiis."}/>
        <IntroUtils heading={"Services"} data={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ut minima iste praesentium corrupti repudiandae quisquam ab culpa dolores? Ullam tenetur rem mollitia eius sequi totam obcaecati fuga magni officiis."}/>
    </>
  )
}

export default Header
