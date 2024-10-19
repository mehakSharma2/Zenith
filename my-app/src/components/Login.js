import React, { useState } from 'react';
import image4 from './image4.png';

const App = () => {
  
  document.body.style.backgroundImage = `url('${image4}')`;
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
    <div style={styles.loginContainer} className='opacity-85'>
      <div style={styles.loginBox}>
        <div style={styles.logo}>
          {showFirst ? 'Sign in' : 'Signup'}
        </div>

        {}
        {showFirst ? (
          <div>
            {}
            <form onSubmit={(e) => {
              e.preventDefault();
              login();
            }}>
              <div style={styles.inputBox}>
                <label style={styles.label}>Email</label>
                <input type="email" placeholder="username@gmail.com" style={styles.input} required />
              </div>
              <div style={styles.inputBox}>
                <label style={styles.label}>Password</label>
                <input type="password" placeholder="Password" style={styles.input} required />
              </div>
              

              <div style={styles.forgotPassword}>
                <a href="/" style={styles.link}>Forgot Password?</a>
              </div>
              <button style={styles.loginButton} type="submit">Sign in</button>
            </form>
          </div>
        ) : (
          <div>
            {}
            <form onSubmit={(e) => {
              e.preventDefault();
              signup();
            }}>
              <div style={styles.inputBox}>
                <label style={styles.label}>Name</label>
                <input type="text" placeholder="Your Name" style={styles.input} required />
              </div>
              <div style={styles.inputBox}>
                <label style={styles.label}>Username</label>
                <input type="text" placeholder="username123@" style={styles.input} required />
              </div>
              <div style={styles.inputBox}>
                <label style={styles.label}>Email</label>
                <input type="email" placeholder="username@gmail.com" style={styles.input} required />
              </div>
              <div style={styles.inputBox}>
                <label style={styles.label}>Password</label>
                <input type="password" placeholder="Password" style={styles.input} required />
              </div>
              <button style={styles.loginButton} type="submit">Sign up</button>
            </form>
          </div>
        )}

        <div style={styles.registerText}>
          {showFirst ? (
            <>Don't have an account yet? <a href="#" style={styles.link} onClick={() => setShowFirst(false)}>Register for free</a></>
          ) : (
            <>Already have an account? <a href="#" style={styles.link} onClick={() => setShowFirst(true)}>Sign in</a></>
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
    textAlign: 'center',
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
    color: '#327ba8',
    fontSize: '14px',
  },
  loginButton: {
    backgroundColor: '#327ba8',
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
