import React from "react";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import SearchInput from "../../components/Form/SearchInput";


import "../../styles/header.css";

const Header = () => {
  const handleLogout = () => {
    // Perform logout actions here
    // For demonstration purposes, let's assume the user is logged out successfully
    toast.success("Logout Successful"); // Display toast notification
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <span className="navbar-brand">
              ⚕ 
            </span>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <SearchInput />
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/predict-disease" className="nav-link">
                  Predict Disease
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/book-appointments" className="nav-link">
                  Book Appointments
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="nav-link">Schedule Your Appointment</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
