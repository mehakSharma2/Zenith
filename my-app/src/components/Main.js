import React from 'react'
import img1 from './img1.png'
import img2 from './img2.jpg'
import bgImg from './bg-img.webp'
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
     // Create a reference for the DOM element where the animation will be applied
     const el = useRef(null);
   
     useEffect(() => {
       // Initialize Typed.js
       const typed = new Typed(el.current, {
         strings: ['Welcome to OUR website!', 'Explore various features!', 'CHOOSE YOUR CAREER PATHWAY!'], // Strings to be typed
         typeSpeed: 50, // Speed of typing
         backSpeed: 50, // Speed of deleting text
         loop: true, // Loop the animation
       });
   
       // Destroy Typed instance during cleanup to prevent memory leaks
       return () => {
         typed.destroy();
       };
     }, []);
   
     return <span ref={el} />;
   };

export default function Main(props){
     document.body.style.backgroundImage = "#f2e7d7"

  const navigate = useNavigate();

  const nextPage = () => {
    window.scrollBy({
        top: window.innerHeight*2,
        behavior: 'smooth'      
      });

    navigate("/next-page");
  };


  
  return (
    <>
    <nav class="bg-[#bb6851] text-white">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Zenith</span>
      <Link to='/login'>Login/SignUp</Link>
  </div>
  </nav>
  
    <div className='w-screen h-screen flex '>
        <div className='h-full w-1/2 '>
          <h1 className='text-6xl ml-24 mt-56 text-[#95523f]'>Developer Roadmap</h1>
          <h3 className='text-2xl ml-44 mt-5 text-[#435554]'><TypedComponent /></h3>
          
          <div className='flex mt-32 space-x-32'>

          <Link className='w-56 h-16 p-2 bg-[#cfc3b2] text-[#95523f] text-center  rounded-2xl ml-28' to='/Form'>Customise your own <strong >ROADMAP</strong></Link>
          <Link onClick={nextPage} className='w-56 h-16 pt-5 bg-red-200 text-[#95523f] text-center rounded-2xl' to='/'>View ROADMAPS</Link>

          </div>
        </div>

        <div className=' w-1/2 flex'>
          <img src={img1} className='w-1/2 bg-cover' alt=''/>
          <img src={img2} className='w-1/2' alt='' />
        </div>


    </div>

    <div className="mt-20 w-screen h-screen flex justify-center bg-cover bg-center " style={{ backgroundImage: `url(${bgImg})`}}>
        <div className='mt-[100px] w-[85%] p-10 pl-32 flex flex-wrap justify-between '>

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
