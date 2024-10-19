import React from 'react';

export default function Profile() {
  // Replace this with dynamic user data if you have it
  const user = {
    name: 'Username', // Example username, replace with actual user data
    profileImage: 'https://th.bing.com/th/id/OIP.ZKL3hKVRcuOpQAZcEf7T5AHaHa?rs=1&pid=ImgDetMain', // Example profile image URL, replace with actual user data
  };

  return (
    <div>
      <nav className=" bg-[#3e92cc] bg-[#3e92cc]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* User Profile Image and Name */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={user.profileImage}
              alt="User Profile"
              className="h-8 w-8 rounded-full"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {user.name}
            </span>
          </div>
        
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"></ul>

        

                    
          </div>
        </div>
      </nav>
    </div>
  );
}
