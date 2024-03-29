import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
<<<<<<< HEAD
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/dreg.css";
=======
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0

const DoctorRegistration = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [yearsOfExp, setYearsOfExp] = useState('');
  const [docPhoto, setDocPhoto] = useState('');
  const [proofOfIdentity, setProofOfIdentity] = useState('');
  const [proofOfAddress, setProofOfAddress] = useState('');
  const [proofOfLicense, setProofOfLicense] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/register', {
        name,
        phone,
        email,
        password,
        speciality,
        yearsOfExp,
        docPhoto,
        proofOfIdentity,
        proofOfAddress,
        proofOfLicense
      });
      if (res && res.data.success) {
        console.log(res.data);
        navigate('/login'); // Navigate to login page after successful registration
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <Layout>
<<<<<<< HEAD
      {/*<div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        </div>*/}
=======
      <style>
        {`
          body {
            background-color: #000112;
            font-family: 'Poppins', sans-serif;
          }

          .background {
            width: 100%;
            height: 520px; /* Adjust the height */
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
            left: 250px; /* Adjust the position */
            top: 30px; /* Adjust the position */
          }

          .shape:last-child {
            background: linear-gradient(
              to right,
              #037ADE,
              #03E5B7
            );
            right: 250px; /* Adjust the position */
            bottom: -430px; /* Adjust the position */
          }

          form {
            width: 90%; /* Adjust the width */
            max-width: 700px; /* Set max-width for larger screens */
            background-color: rgba(255,255,255,0.13);
            margin: auto; /* Center the form horizontally */
            border-radius: 10px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255,255,255,0.1);
            box-shadow: 0 0 40px rgba(8,7,16,0.6);
            padding: 30px; /* Adjust the padding */
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          form * {
            color: #ffffff;
            outline: none;
            border: none;
          }

          form h3 {
            font-size: 24px; /* Adjust the font size */
            font-weight: 500;
            line-height: 32px;
            text-align: left;
            margin-bottom: 20px; /* Adjust the margin */
          }

          label {
            display: block;
            margin-top: 15px; /* Adjust the margin */
            font-size: 16px;
            font-weight: 500;
          }

          input, select {
            width: 100%;
            height: 25px; /* Adjust the height */
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
            margin-top: 30px; /* Adjust the margin */
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
        `}
      </style>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
      <form onSubmit={handleSubmit}>
        <h3>Sign up page (Doctor)</h3>
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
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Speciality:</label>
          <input type="text" value={speciality} onChange={(e) => setSpeciality(e.target.value)} required />
        </div>
        <div>
          <label>Years of Experience:</label>
          <input type="text" value={yearsOfExp} onChange={(e) => setYearsOfExp(e.target.value)} required />
        </div>
        <div>
          <label>Doctor Photo:</label>
          <input type="file" onChange={(e) => setDocPhoto(e.target.files[0])} required />
        </div>
        <div>
          <label>Proof of Identity:</label>
          <input type="file" onChange={(e) => setProofOfIdentity(e.target.files[0])} required />
        </div>
        <div>
          <label>Proof of Address:</label>
          <input type="file" onChange={(e) => setProofOfAddress(e.target.files[0])} required />
        </div>
        <div>
          <label>Proof of License:</label>
          <input type="file" onChange={(e) => setProofOfLicense(e.target.files[0])} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default DoctorRegistration;
