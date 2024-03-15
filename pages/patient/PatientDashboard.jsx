<<<<<<< HEAD
import React from "react";
import Layout from "../../components/Layout/Layout";
import PatientDashboardMenu from "../../components/Layout/PatientDashboardMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - CureConnect"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <PatientDashboardMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
             
            </div>
          </div>
=======
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import "../../styles/PatientDashboard.css";
const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch user's appointment history from backend
    const fetchAppointments = async () => {
      try {
        // const response = await axios.get('/api/appointments'); // Replace '/api/appointments' with your backend endpoint
        // setAppointments(response.data);
        // For demonstration purposes, let's mock appointment data
        const mockAppointments = [
          { id: 1, date: '2024-03-15', time: '10:00 AM', doctor: 'Dr. Smith', status: 'Confirmed' },
          { id: 2, date: '2024-03-17', time: '11:30 AM', doctor: 'Dr. Johnson', status: 'Pending' },
          { id: 3, date: '2024-03-20', time: '2:00 PM', doctor: 'Dr. Brown', status: 'Cancelled' }
        ];
        setAppointments(mockAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <Layout>
      <style>
        {`
          .dashboard-container {
            margin: 20px auto;
            padding: 20px;
            max-width: 800px;
            border-radius: 10px;
            background: linear-gradient(to bottom, #001732, #005f7f);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .appointment-box {
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .appointment-table {
            width: 100%;
            border-collapse: collapse;
          }

          .appointment-table th,
          .appointment-table td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
          }

          .appointment-table th {
            background-color: #f2f2f2;
          }

          .appointment-table tbody tr:nth-child(even) {
            background-color: #f2f2f2;
          }
        `}
      </style>
      <div className="dashboard-container">
        <div className="appointment-box">
          <h2>Appointment History</h2>
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Doctor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
        </div>
      </div>
    </Layout>
  );
};

<<<<<<< HEAD
export default Dashboard;
=======
export default PatientDashboard;
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
