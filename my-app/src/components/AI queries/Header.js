import React from 'react'

export default function Header() {
  return (
    <div className='text-[#c4c7c5] font-[500]'>
     <p className='w-1/2 text-transparent bg-clip-text ' style={{
          backgroundImage: 'linear-gradient(16deg, #4b90ff, #ff5546)',
        }}> Hello, Developer </p> 
      <p>Give your queries here! </p>
    </div>
  )
}
