import React from 'react'
import img1 from './image 5.jpeg'
import img2 from './img2.jpg'
import bgImg from './bgImg.jpeg'
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
     const el = useRef(null);
   
     useEffect(() => {
       const typed = new Typed(el.current, {
         strings: ['Welcome to OUR website!', 'Explore various features!', 'CHOOSE YOUR CAREER PATHWAY!'], 
         typeSpeed: 50, 
         backSpeed: 50, 
         loop: true, 
       });
   
       return () => {
         typed.destroy();
       };
     }, []);
   
     return <span ref={el} />;
   };

export default function Main(props){
     document.body.style.backgroundColor = "white"

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
    <nav className="bg-[#bb6851] text-white">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span className="self-center text-3xl font-semibold whitespace-nowrap text-shadow-lg dark:text-white">Zenith</span>
      <Link to='/login' className='hover:text-shadow-lg '>Login/SignUp</Link>
  </div>
  </nav>
  
    <div className='w-screen h-screen flex '>
        <div className='h-full w-1/2 '>
          <h1 className='text-6xl ml-24 mt-56 text-[#3e92cc] text-shadow-lg'>Developer Roadmap</h1>
          <h3 className='text-2xl ml-44 mt-5 text-[#435554]'><TypedComponent /></h3>
          
          <div className='flex mt-32 space-x-32'>

          <Link className='w-56 h-16 p-2 bg-[#3E92CC] text-white text-center drop-shadow-2xl rounded-2xl ml-28 hover:text-shadow-lg' to='/Form'>Customise your own <strong >ROADMAP</strong></Link>
          <Link onClick={nextPage} className='w-56 h-16 pt-5 bg-[#3E92CC] drop-shadow-2xl  text-white text-center rounded-2xl hover:text-shadow-lg' to='/'>View ROADMAPS</Link>

          </div>
        </div>

        <div className=' w-1/2 flex'>
          <img src={img1} className='w-1/2 bg-cover' alt=''/>
          <img src={img2} className='w-1/2' alt='' />
        </div>


    </div>

    <div className="mt-20 w-screen h-screen flex justify-center bg-white  "style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center',  }}>
        <div className='mt-[100px] w-[85%] p-10 pl-32 flex flex-wrap justify-between text-white opacity-100  '>

        <div className='w-1/4 drop-shadow-lg'>
        <button className='bg-[#c3b298] w-44 h-12 rounded-lg '>
             Frontend developer
        </button>
        </div>

        <div className='w-1/4 drop-shadow-lg'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4 drop-shadow-lg'>
        <button className='bg-blue-400 w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4 drop-shadow-lg'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4 drop-shadow-lg'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4 drop-shadow-lg'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        
        <div className='w-1/4 drop-shadow-lg'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        
        <div className='w-1/4 drop-shadow-lg'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        
        <div className='w-1/4 drop-shadow-lg'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4 drop-shadow-lg'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4 drop-shadow-lg'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>

        <div className='w-1/4 drop-shadow-lg'>
        <button className='bg-[#bb6851] w-44 h-12 rounded-lg '>
             click
        </button>
        </div>




        </div>
       

       

        




     
        
        
    </div>

    </>
  )
  }
