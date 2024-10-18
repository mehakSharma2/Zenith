import React from 'react'
import img1 from './img1.png'
import img2 from './img2.jpg'
import {Link} from 'react-router-dom';

export default function Main() {
  return (
    <>
    <nav class="bg-[#bb6851] text-white">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Zenith</span>
  </div>
  </nav>
  
    <div className='w-screen h-screen flex '>
        <div className='h-full w-1/2 '>
          <h1 className='text-6xl ml-24 mt-56 text-[#95523f]'>Developer Roadmap</h1>
          <h3 className='text-2xl ml-44 mt-5 text-[#435554]'>CHOOSE YOUR CAREER PATHWAY!</h3>
          
          <div className='flex mt-32 space-x-32'>

          <Link className='w-56 h-16 bg-[#cfc3b2] text-[#95523f]  rounded-2xl ml-28' to='/Form'>Customise your own ROADMAP</Link>



<button className='w-56 h-16 bg-red-200 text-[#95523f] p-1 rounded-2xl'> View ROADMAPS </button>

          </div>
        </div>

        <div className=' w-1/2 flex'>
          <img src={img1} className='w-1/2 bg-cover' alt=''/>
          <img src={img2} className='w-1/2' alt='' />
        </div>


    </div>

    <div className='mt-20 w-screen h-screen flex justify-center '>
        <div className=' w-[85%] p-10 pl-32 flex flex-wrap justify-between '>

        <div className='w-1/4'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        
        <div className='w-1/4'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        
        <div className='w-1/4'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        
        <div className='w-1/4'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>




        </div>
       

       

        




     
        
        
    </div>

    </>
  )
}
