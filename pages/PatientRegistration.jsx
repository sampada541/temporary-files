import React, { useState } from "react";
import Layout from "../components/Layout/Layout";

const PatientRegistration = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Patient registration submitted:", {
      name,
      phone,
      email,
      password,
      gender,
      age,
      location,
      photo,
    });
    // Reset form fields
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setGender("");
    setAge("");
    setLocation("");
    setPhoto("");
  };

  return (
    <Layout title={"Registeration Pgae - CureConnect"}>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Sign up As Patient</h3>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Photo:</label>
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default PatientRegistration;
