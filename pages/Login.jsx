import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import axios from 'axios';
=======
import { Link } from 'react-router-dom'; 
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
import Layout from '../components/Layout/Layout';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [error, setError] = useState('');
=======
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    try {
      const res = await axios.post("https://cureconnect-backend.onrender.com/api/v1/auth/login", { // Assuming the API endpoint is '/api/login'
        emailOrPhone,
        password
      });

      if (res && res.data.success) {
        // Redirect user to dashboard or home page upon successful login
        window.location.href = '/dashboard'; // Change the URL as needed
      } else {
        setError('Invalid email/phone or password. Please try again.'); // Set error message for invalid login
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong. Please try again later.'); // Set error message for general error
    }
=======
    // Handle login submission
    console.log('Login submitted:', {
      emailOrPhone,
      password
    });
    // Reset form fields
    setEmailOrPhone('');
    setPassword('');
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
  };

  return (
    <Layout>
      <div className="login-container">
<<<<<<< HEAD
        {/* CSS Styles */}
        <style>
          {`
            
=======
        <style>
          {`
            *,
            *::before,
            *::after {
              padding: 0;
              margin: 0;
              box-sizing: border-box;
            }
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0

            body {
              background-color: #000112;
              font-family: 'Poppins', sans-serif;
<<<<<<< HEAD

 
              justify-content: center;
              align-items: center;
              background-size: cover;
=======
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
            }

            .login-container {
              position: relative;
              width: 100%;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }

<<<<<<< HEAD
=======
            .background {
              width: 330px; /* Adjust the width */
              height: 420px; /* Adjust the height */
              position: absolute;
              transform: translate(-50%,-50%);
              left: 50%;
              top: 50%;
            }

            .background .shape {
              height: 150px; /* Adjust the height */
              width: 150px; /* Adjust the width */
              position: absolute;
              border-radius: 50%;
            }

            .shape:first-child {
              background: linear-gradient(
                #03E5B7,
                #037ADE
              );
              left: -60px; /* Adjust the position */
              top: -60px; /* Adjust the position */
            }

            .shape:last-child {
              background: linear-gradient(
                to right,
                #037ADE,
                #03E5B7
              );
              right: -20px; /* Adjust the position */
              bottom: -60px; /* Adjust the position */
            }

>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
            form {
              height: 420px; /* Adjust the height */
              width: 300px; /* Adjust the width */
              background-color: rgba(255,255,255,0.13);
              position: absolute;
              transform: translate(-50%,-50%);
              top: 50%;
              left: 50%;
              border-radius: 10px;
              backdrop-filter: blur(10px);
              border: 2px solid rgba(255,255,255,0.1);
              box-shadow: 0 0 40px rgba(8,7,16,0.6);
              padding: 40px 25px; /* Adjust the padding */
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            form * {
              color: #ffffff;
              outline: none;
              border: none;
            }

            form h3 {
              font-size: 26px; /* Adjust the font size */
              font-weight: 500;
              line-height: 36px;
              text-align: center;
              margin-bottom: 20px; /* Adjust the margin */
            }

            label {
              display: block;
              margin-top: 15px; /* Adjust the margin */
              font-size: 16px;
              font-weight: 500;
            }

            input {
              display: block;
              height: 40px; /* Adjust the height */
              width: 100%;
              background-color: rgba(255,255,255,0.07);
              border-radius: 3px;
              padding: 0 10px;
              margin-top: 8px;
              font-size: 14px;
              font-weight: 300;
            }

            ::placeholder {
              color: #e5e5e5;
            }

            button {
              margin-top: 40px; /* Adjust the margin */
              width: 100%;
              background-color: #ffffff;
              color: #080710;
              padding: 12px 0; /* Adjust the padding */
              font-size: 16px; /* Adjust the font size */
              font-weight: 600;
              border-radius: 5px;
              cursor: pointer;
            }

            button:hover {
              background: linear-gradient(
                #616161,
                #424242
              );
            }

            .forgot-password {
              margin-top: 15px; /* Adjust the margin */
              font-size: 14px;
              color: #888888;
              text-decoration: none;
              transition: color 0.3s; /* Smooth transition */
            }

            .forgot-password:hover {
              color: #cccccc; /* Change color on hover */
            }
          `}
        </style>
<<<<<<< HEAD
        {/* Login Form */}
=======
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
        <form onSubmit={handleSubmit}>
          <h3>Login Here</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} required />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Log In</button>
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link> {/* Link to the Forgot Password page */}
        </form>
      </div>
    </Layout>
  );
};

export default Login;
