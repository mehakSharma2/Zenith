import React from 'react'
import nav from '../profile.webp'
import logo from './logo.png'

export default function Result(props) {
  return (
    <div className='w-[50%] h-auto mt-12'>
      <div className='flex mt-4 p-2 '>
        <img className='h-10 w-10 rounded-full mr-2 mt-1' src={nav} alt="" />
        <p className=' ml-2 p-2'>{props.value}</p> 
      </div>
      <div className='flex mt-1 p-2 '>
           <img className='h-8 w-10 rounded-full mr-2 mt-2' src={logo} alt="" />
           {props.loader? 
           <div >
            <div className='h-5 w-[700px] bg-black animate-pulse  text-indigo-500 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-[#9ed7ff] mb-2'>box</div>
            <div className='h-5 w-[700px] bg-black animate-pulse  text-indigo-500 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-[#9ed7ff] mb-2'>box</div>
            <div className='h-5 w-[600px] bg-black animate-pulse  text-indigo-500 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-[#9ed7ff]'>box</div>
           </div> : <p className=' ml-2 p-2'  dangerouslySetInnerHTML={{ __html: props.resultText }}></p> }
           
        </div>
    </div>
  )
}
