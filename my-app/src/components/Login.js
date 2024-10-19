import React, { useState } from 'react';
import { auth } from '../firebaseconfig'; // Import the Firebase auth instance
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail, // Import the reset password function
} from 'firebase/auth';
import image4 from './image4.png';

const App = () => {
  // Set the background image for the page
  document.body.style.backgroundImage = `url('${image4}')`;
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';

  const [showFirst, setShowFirst] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  // Login function using Firebase Authentication
  const login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert(`Welcome back, ${user.email}`);
      console.log('User logged in:', user);
    } catch (error) {
      alert(`Login failed: ${error.message}`);
      console.error('Login error:', error);
    }
  };

  // Signup function using Firebase Authentication
  const signup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert(`Account created for ${user.email}`);
      console.log('User signed up:', user);
    } catch (error) {
      alert(`Signup failed: ${error.message}`);
      console.error('Signup error:', error);
    }
  };

  // Forgot password function using Firebase Authentication
  const forgotPassword = async () => {
    if (!email) {
      alert('Please enter your email address to reset your password.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert(`Password reset email sent to ${email}`);
    } catch (error) {
      alert(`Failed to send password reset email: ${error.message}`);
      console.error('Password reset error:', error);
    }
  };

  return (
    <div style={styles.loginContainer} className="opacity-85">
      <div style={styles.loginBox}>
        <div style={styles.logo}>
          {showFirst ? 'Sign in' : 'Signup'}
        </div>

        {/* Login form */}
        {showFirst ? (
          <div>
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
          </div>
        ) : (
          <div>
            {/* Signup form */}
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
          </div>
        )}

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

// Styles (unchanged)
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
