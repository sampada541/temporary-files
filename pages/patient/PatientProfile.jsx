import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/PatientDashboardMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";

const PatientProfile = () => {
  const [profileData, setProfileData] = useState({});
  
  useEffect(() => {
    // Fetch patient profile data from the backend
    const fetchProfileData = async () => {
      try {
        const { data } = await axios.get("/api/patient/profile"); // Replace '/api/patient/profile' with your backend endpoint
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching patient profile:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">Your Profile</h1>
            <div className="border shadow p-3">
              <div className="row mb-2">
                <div className="col-md-3">Name:</div>
                <div className="col-md-9">{profileData.name}</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3">Phone:</div>
                <div className="col-md-9">{profileData.phone}</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3">Email:</div>
                <div className="col-md-9">{profileData.email}</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3">Gender:</div>
                <div className="col-md-9">{profileData.gender}</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3">Age:</div>
                <div className="col-md-9">{profileData.age}</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3">Location:</div>
                <div className="col-md-9">{profileData.location}</div>
              </div>
              {/* Assuming 'photo' is a URL */}
              <div className="row mb-2">
                <div className="col-md-3">Photo:</div>
                <div className="col-md-9">
                  <img src={profileData.photo} alt="Patient" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PatientProfile;
