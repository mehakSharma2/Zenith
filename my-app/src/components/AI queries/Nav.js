import React from 'react'
import nav from '../profile.webp'

export default function Navbar(props) {
  return (
    <div className={`w-[95%] flex justify-end ml-20 fixed top-0 z-40 bg-white`}>
      <img className={`h-16 w-16 rounded-full mr-10 mt-5 cursor-pointer self-end`} src={nav} alt="not found"/>
    </div>
  )
}