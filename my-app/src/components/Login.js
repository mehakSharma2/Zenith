import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { auth } from '../firebaseconfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from 'firebase/auth';
import image4 from './image4.png';

const App = () => {
  const [showFirst, setShowFirst] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [notification, setNotification] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  
  const clearFields = () => {
    setEmail('');
    setPassword('');
    setName('');
    setUsername('');
  };


  const showNotification = (message, duration) => {
    setNotification(message);
    setTimeout(() => setNotification(''), duration);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url('${image4}')`;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

   
    return () => {
      document.body.style.backgroundImage = 'none';
    };
  }, []); 


  const login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setIsLoggedIn(!isLoggedIn); 
      showNotification(`Welcome back, ${user.email}`, 10000); 
      clearFields(); 
      navigate('/'); 
    } catch (error) {
      showNotification('Invalid email or password. Please try again.', 10000); 
      console.error('Login error:', error);
    }
  };


  const signup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setIsLoggedIn(true); 
      showNotification(`Account created for ${user.email}`, 10000); 
      clearFields();
      navigate('/'); 
    } catch (error) {
      showNotification('Email already in use. Please try a different one.', 10000); 
      console.error('Signup error:', error);
    }
  };

  const forgotPassword = async () => {
    if (!email) {
      showNotification('Please enter your email address.', 10000); 
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      showNotification(`Password reset email sent to ${email}`, 10000); 
    } catch (error) {
      showNotification('Failed to send password reset email.', 10000); 
      console.error('Password reset error:', error);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <div style={styles.loginContainer} className="opacity-85">
      <div style={styles.loginBox}>
        <div style={styles.logo}>
          {showFirst ? 'Sign in' : 'Signup'}
        </div>

        {notification && <div style={styles.notification}>{notification}</div>}

        {showFirst ? (
          <form onSubmit={login}>
            <div style={styles.inputBox}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                placeholder="username@gmail.com"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div style={styles.forgotPassword}>
              <button
                type="button"
                onClick={forgotPassword}
                style={styles.linkButton}
              >
                Forgot Password?
              </button>
            </div>
            <button style={styles.loginButton} type="submit">
              Sign in
            </button>
          </form>
        ) : (
          <form onSubmit={signup}>
            <div style={styles.inputBox}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                placeholder="Your Name"
                style={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Username</label>
              <input
                type="text"
                placeholder="username123@"
                style={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                placeholder="username@gmail.com"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div style={styles.inputBox}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button style={styles.loginButton} type="submit">
              Sign up
            </button>
          </form>
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
  notification: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '10px',
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
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#327ba8',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'underline',
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
  },
  registerText: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#666',
  },
  link: {
    color: '#327ba8',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default App;
