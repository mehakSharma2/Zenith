import React, { useState } from 'react';
// import image3 from './image3.jpg';

const App = () => {
//   document.body.style.backgroundImage = url(${image3});
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';

  const [showFirst, setShowFirst] = useState(true);


  const login = () => {
    alert('Login function called');
  };

  const signup = () => {
    alert('Signup function called');
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <div style={styles.logo}>
          {showFirst ? 'Sign in' : 'Signup'}
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          showFirst ? login() : signup();
        }}>
          <div style={styles.inputBox}>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="username@gmail.com" style={styles.input} required />
          </div>
          <div style={styles.inputBox}>
            <label style={styles.label}>Password</label>
            <input type="password" placeholder="Password" style={styles.input} required />
          </div>

          {showFirst ? (
            <>
              <div style={styles.forgotPassword}>
                <a href="/" style={styles.link}>Forgot Password?</a>
              </div>
              <button style={styles.loginButton} type="submit">Sign in</button>
            </>
          ) : (
            <button style={styles.loginButton} type="submit">Sign up</button>
          )}
        </form>

        <div style={styles.registerText}>
          {showFirst ? (
            <>Don't have an account yet? <a href="/" style={styles.link} onClick={() => setShowFirst(false)}>Register for free</a></>
          ) : (
            <>Already have an account? <a href="/" style={styles.link} onClick={() => setShowFirst(true)}>Sign in</a></>
          )}
        </div>
      </div>
      <div style={styles.characterBox}></div>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBox: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
  },
  logo: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  inputBox: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#666',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  forgotPassword: {
    textAlign: 'right',
  },
  link: {
    textDecoration: 'none',
    color: '#ff6b35',
    fontSize: '14px',
  },
  loginButton: {
    backgroundColor: '#ff6b35',
    color: 'white',
    border: 'none',
    padding: '10px',
    width: '100%',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  registerText: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '14px',
  },
  characterBox: {
    marginLeft: '50px',
  },
};

export default App;