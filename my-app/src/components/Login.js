import React, { useState } from 'react';

export default function Login() {
  const [showFirst, setShowFirst] = useState(true); 

  const login = () => {
    alert('Login function called');
  };

  const signup = () => {
    alert('Signup function called');
  };

  return (
    <>
    <div className="flex flex-col items-center">
      
      <div  id="loginSection" className={`${showFirst ? 'block' : 'hidden'} bg-[blue] text-center: mt-72 ml-20` }>
      <h1>Login or Sign Up</h1>

        <h2 className='text-2xl'>Login</h2>
        <input type="email" id="loginEmail" placeholder="Email" /><br></br>
        <input type="password" id="loginPassword" placeholder="Password" /><br></br>
        <button id="loginButton" onClick={login}>Login</button>
        <p>
          New user? <button onClick={() => setShowFirst(!showFirst)}>Create an account</button>
        </p>
      </div>

      <div id="signupSection" className={showFirst ? 'hidden' : 'block'}>
        <h2>Sign Up</h2>
        <input type="text" id="signupName" placeholder="Name" />
        <input type="email" id="signupEmail" placeholder="Email" />
        <input type="password" id="signupPassword" placeholder="Password" />
        <button id="signupButton" onClick={signup}>Sign Up</button>
        <p>
          Already have an account? <button onClick={() => setShowFirst(!showFirst)}>Login</button>
        </p>
      </div>
    </div>
    </>
  );
}