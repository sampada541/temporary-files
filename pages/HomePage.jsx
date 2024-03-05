import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="container">
        <h1 className="title">
          <Typewriter
            options={{
              strings: ['Welcome to CureConnect!'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="user-actions">
          <div className="patient-actions">
            <h2 className="action-title">Patients</h2>
            <p className="action-description">If you are a patient, please <Link to="/register" style={{ color: 'white' }}>Register</Link> or <Link to="/login" style={{ color: 'white' }}>Login</Link> to schedule an appointment.</p>
          </div>
          <div className="doctor-actions">
            <h2 className="action-title">Doctors</h2>
            <p className="action-description">If you are a doctor, please <Link to="/register" style={{ color: 'white' }}>Register</Link> or <Link to="/login" style={{ color: 'white' }}>Login</Link> to view appointments.</p>
          </div>
          <div className="prediction-box">
            <Link to="/predict" className="prediction-link">
              <button className="prediction-button">Based On Your Symptoms Predict The Disease Here!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
