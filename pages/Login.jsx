import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "../styles/login.css";

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission
    console.log("Login submitted:", {
      emailOrPhone,
      password,
    });
    // Reset form fields
    setEmailOrPhone("");
    setPassword("");
  };

  return (
    <Layout title={"Login - CureConnect"}>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
        <Link to="/forgot-password" className="forgot-password">
          Forgot Password?
        </Link>{" "}
        {/* Link to the Forgot Password page */}
      </form>
    </Layout>
  );
};

export default Login;
