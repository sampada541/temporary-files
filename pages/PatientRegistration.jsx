<<<<<<< HEAD
import React, { useState } from "react";
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======
import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0

const PatientRegistration = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState('');
<<<<<<< HEAD
  const navigate = useNavigate();

  // Password validation rules
  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    return passwordRegex.test(value);
=======

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Patient registration submitted:', {
      name,
      phone,
      email,
      password,
      gender,
      age,
      location,
      photo
    });
    setName('');
    setPhone('');
    setEmail('');
    setPassword('');
    setGender('');
    setAge('');
    setLocation('');
    setPhoto('');
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
  };

  // Event handler for password change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Run password validation
    if (!validatePassword(newPassword)) {
      console.error("Password must be 8-16 characters long, contain at least one uppercase letter, one lowercase letter, and one digit.");
    }
  };


  const handleRegistration = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post('https://cureconnect-backend.onrender.com/api/v1/auth/register', {
        name,
        phone,
        email,
        password,
        gender,
        age,
        location,
        photo,
      });
      if (res && res.data.success) {
        toast.success(res);
        navigate('/login');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };


  return (
<<<<<<< HEAD
    <Layout>  
      <style>
        {`
        /* Your CSS styles */
        body {
          background-color: #000112;
          font-family: 'Poppins', sans-serif;
        }
        
        .form-container {
          position: relative;
          z-index: 1;
          margin-top: 50px; /* Adjust margin top to clear header */
          margin-bottom: 50px;
        }
        
        form {
          width: 90%;
          max-width: 700px;
          background-color: rgba(255,255,255,0.13);
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.1);
          box-shadow: 0 0 40px rgba(8,7,16,0.6);
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: left;
          align-items: left;
          margin: auto; /* Center the form */
        }
        
        form * {
          color: #ffffff;
          outline: none;
          border: none;
        }
        
        form h3 {
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
          text-align: left;
          margin-bottom: 20px;
        }
        
        label {
          display: block;
          margin-top: 15px;
          font-size: 16px;
          font-weight: 500;
        }
        
        input, select {
          width: 100%;
          height: 25px;
          background-color: rgba(255,255,255,0.07);
          border-radius: 13px;
          padding: 0 10px;
          margin-top: 8px;
          font-size: 14px;
          font-weight: 400;
        }
        
        ::placeholder {
          color: #e5e5e5;
        }
        
        button {
          margin-top: 30px;
          width: 100%;
          background-color: #ffffff;
          color: #080710;
          padding: 12px 0;
          font-size: 16px;
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
        `}
      </style>
      <ToastContainer />
      <div className="form-container">
        <form onSubmit={handleRegistration} className="registration-form">
=======
    <Layout>
      <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <style>
            {`
              *,
              *::before,
              *::after {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
              }

              body {
                background-color: #000112;
                font-family: 'Poppins', sans-serif;
              }

              .background .shape {
                height: 100px; /* Adjust the height */
                width: 100px; /* Adjust the width */
                position: absolute;
                border-radius: 50%;
              }
    
              .shape:first-child {
                background: linear-gradient(
                  #03E5B7,
                  #037ADE
                );
                left: 350px; /* Adjust the position */
                top: 70px; /* Adjust the position */
              }
    
              .shape:last-child {
                background: linear-gradient(
                  to right,
                  #037ADE,
                  #03E5B7
                );
                right: 360px; /* Adjust the position */
                bottom: -230px; /* Adjust the position */
              }

              .form-container {
                position: relative;
                z-index: 1;
                margin-top: 50px; /* Adjust margin top to clear header */
              }

              form {
                width: 90%;
                max-width: 700px;
                background-color: rgba(255,255,255,0.13);
                border-radius: 10px;
                backdrop-filter: blur(10px);
                border: 2px solid rgba(255,255,255,0.1);
                box-shadow: 0 0 40px rgba(8,7,16,0.6);
                padding: 30px;
                display: flex;
                flex-direction: column;
                justify-content: left;
                align-items: left;
                margin: auto; /* Center the form */
              }

              form * {
                color: #ffffff;
                outline: none;
                border: none;
              }

              form h3 {
                font-size: 24px;
                font-weight: 500;
                line-height: 32px;
                text-align: left;
                margin-bottom: 20px;
              }

              label {
                display: block;
                margin-top: 15px;
                font-size: 16px;
                font-weight: 500;
              }

              input, select {
                width: 100%;
                height: 25px;
                background-color: rgba(255,255,255,0.07);
                border-radius: 13px;
                padding: 0 10px;
                margin-top: 8px;
                font-size: 14px;
                font-weight: 400;
              }

              ::placeholder {
                color: #e5e5e5;
              }

              button {
                margin-top: 30px;
                width: 100%;
                background-color: #ffffff;
                color: #080710;
                padding: 12px 0;
                font-size: 16px;
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
            `}
          </style>
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
          <h3>Sign up As Patient</h3>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Phone:</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
<<<<<<< HEAD
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div> 
=======
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
          <div>
            <label>Gender:</label>
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
          </div>
          <div>
            <label>Age:</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>
          <div>
            <label>Location:</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>
          <div>
            <label>Photo:</label>
            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} required />
          </div>
<<<<<<< HEAD
          <button onClick="handleRegistration">Register</button>
=======
          <button type="submit">Submit</button>
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
        </form>
      </div>
    </Layout>
  );
};

export default PatientRegistration;
