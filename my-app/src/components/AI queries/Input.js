import React from 'react'
import add from './add.png'
import send from './send.png'


export default function Input(props) {
 

 
  return (

<div className="w-[870px] text-gray-600 ml-56 mt-96 ">
  <div className='fixed bottom-0 z-10 bg-white'>
  <input type="search" value={props.text} placeholder='Enter a prompt here' onChange={props.onChange} className="bg-[#f0f4f9] text-slate-500 h-16 w-[870px] px-5 pr-10 rounded-full text-sm focus:outline-none "/>
  
  <span className='absolute right-32 mt-2 cursor-pointer hover:bg-slate-300 p-1 rounded-full' >
    <img className='h-7 mt-1 ml-2 mb-2 mr-1' src={add} alt="" />
  </span>

  <span className='absolute right-20 mt-2 cursor-pointer hover:bg-slate-300 p-1 ml-5 rounded-full w-12'>
  <i className="fa-solid fa-microphone text-xl p-1 ml-2 mt-[0.2rem]"></i>
  </span>

  <span className='absolute right-10 mt-3 cursor-pointer hover:bg-slate-300 p-2 rounded-full' >
    <img onClick={props.click} className='h-6 ml-1' src={send} alt="" />
  </span>

  </div>
  
  
</div>
  )
}
