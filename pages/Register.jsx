import React, { useState } from 'react';

const Register = () => {
  const [userType, setUserType] = useState('patient'); // Default to patient
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [yearsOfExp, setYearsOfExp] = useState('');
  const [docPhoto, setDocPhoto] = useState('');
  const [proofOfIdentity, setProofOfIdentity] = useState('');
  const [proofOfAddress, setProofOfAddress] = useState('');
  const [proofOfLicense, setProofOfLicense] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', {
      userType,
      name,
      phone,
      email,
      password,
      gender,
      age,
      location,
      photo,
      speciality,
      yearsOfExp,
      docPhoto,
      proofOfIdentity,
      proofOfAddress,
      proofOfLicense
    });
    // Reset form fields
    setUserType('patient');
    setName('');
    setPhone('');
    setEmail('');
    setPassword('');
    setGender('');
    setAge('');
    setLocation('');
    setPhoto('');
    setSpeciality('');
    setYearsOfExp('');
    setDocPhoto('');
    setProofOfIdentity('');
    setProofOfAddress('');
    setProofOfLicense('');
  };

  return (
    <div>
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
            position: absolute;
            transform: translate(-50%,-50%);
            top: 90%;
            left: 50%;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255,255,255,0.1);
            box-shadow: 0 0 40px rgba(8,7,16,0.6);
            padding: 30px; /* Adjust the padding */
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: left;
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
      <form onSubmit={handleSubmit}>
        <h3>Sign up page ({userType === 'patient' ? 'Patient' : 'Doctor'})</h3>
        <div>
          <label>User Type:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="patient" style={{ color: 'black' }}>Patient</option>
            <option value="doctor" style={{ color: 'black' }}>Doctor</option>
          </select>
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {userType === 'patient' && (
          <>
            <div>
              <label>Gender:</label>
              <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
            </div>
            <div>
              <label>Age:</label>
              <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
          </>
        )}
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        {userType === 'patient' && (
          <div>
            <label>Photo:</label>
            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
          </div>
        )}
       {userType === 'doctor' && (
  <>
    <div>
      <label>Speciality:</label>
      <input type="text" value={speciality} onChange={(e) => setSpeciality(e.target.value)} />
    </div>
    <div>
      <label>Years of Experience:</label>
      <input type="text" value={yearsOfExp} onChange={(e) => setYearsOfExp(e.target.value)} />
    </div>
    <div>
      <label>Doctor Photo:</label>
      <input type="file" onChange={(e) => setDocPhoto(e.target.files[0])} />
    </div>
    <div>
      <label>Proof of Identity:</label>
      <input type="file" onChange={(e) => setProofOfIdentity(e.target.files[0])} />
    </div>
    <div>
      <label>Proof of Address:</label>
      <input type="file" onChange={(e) => setProofOfAddress(e.target.files[0])} />
    </div>
    <div>
      <label>Proof of License:</label>
      <input type="file" onChange={(e) => setProofOfLicense(e.target.files[0])} />
    </div>
  </>
)}



        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
