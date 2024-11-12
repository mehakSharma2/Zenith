import React from 'react'

export default function Sidebar(props) {
  
  return (
    <div className={` ${props.open?'w-48' :'w-20' } min-h-screen bg-[#f0f4f9] flex flex-col fixed left-0 z-50 `}>
      <div className='ml-4 flex flex-col h-full'>
        <div className="top">
        <i onClick={props.toggle} className="fa-solid fa-bars text-3xl mt-2 p-2 cursor-pointer rounded-md hover:bg-slate-200"></i>
        <div className={`flex mt-6 space-x-1 h-10  cursor-pointer ${props.open? ' w-28 p-2 rounded-lg' :' w-10 p-2 rounded-full' } hover:bg-slate-200 `}>
          <div onClick={props.newChat} className='flex space-x-1'>
          <i className="fa-solid fa-plus mt-[0.3rem] ml-1"></i>
        {props.open? <p>New Chat</p> : null}
          </div>
        
        </div>
        
        <div className="mt-5">
            <div className="recent-title">
               {props.open?<p>RECENT</p> : null } 

              {(props.saveResult).map((element,index)=>{
                return <div key={index} className={`flex space-x-3 mt-2  w-36 p-1 rounded-lg ${props.open? 'hover:bg-slate-200' : null}  `}>
                {props.open?<i className="fa fa-message mt-2"></i> : null} 
                {props.open?<p>{element.slice(0,18)}....</p> : null}  

              </div>
              })}



          </div>
        </div>
        

        </div>
        <div className="bottom mt-[46vh] fixed bottom-0 z-50 bg-[#f0f4f9] cursor-pointer">
            <div className={`flex space-x-1 mb-2  p-2  ${props.open? 'w-32 rounded-lg' : 'w-12 rounded-full'} hover:bg-slate-200`}>
            <i className={`fa-regular fa-circle-question  ${props.open? 'mt-2' : 'ml-2 mb-1 mt-2'} `}></i>
           {props.open?<p className='text-xl'>Help</p> : null} 
            </div>

            <div className={`flex space-x-1 mb-2 p-2  hover:bg-slate-200 ${props.open? 'w-32 rounded-lg' : 'w-12 rounded-full'} `}>
            <i className={`fa-solid fa-clock-rotate-left ${props.open? 'mt-2' : 'ml-2 mb-1 mt-2'} `}></i>
           {props.open?<p className='text-xl'>Activity</p> : null}  
            </div>

            <div className={`flex space-x-1 mb-2  p-2  hover:bg-slate-200 ${props.open? 'w-32 rounded-lg' : 'w-12 rounded-full'}`}>
            <i className={`fa-solid fa-gear  ${props.open? 'mt-2' : 'ml-2 mb-1 mt-2'}`}></i>
           {props.open?<p className='text-xl'>Settings</p> : null } 
            </div>

        </div>
      </div>
    </div>
  )
}
