import React from "react";
import { NavLink } from "react-router-dom";

const PatientDashboardMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/patient/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/patient/appointments"
            className="list-group-item list-group-item-action"
          >
            Appointments
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboardMenu;
