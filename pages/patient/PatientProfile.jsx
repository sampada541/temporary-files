import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import PatientDashboardMenu from "../../components/Layout/PatientDashboardMenu";

const PatientProfile = () => {
  const [profileData, setProfileData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({});

=======
import UserMenu from "../../components/Layout/PatientDashboardMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";

const PatientProfile = () => {
  const [profileData, setProfileData] = useState({});
  
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
  useEffect(() => {
    // Fetch patient profile data from the backend
    const fetchProfileData = async () => {
      try {
        const { data } = await axios.get("/api/patient/profile"); // Replace '/api/patient/profile' with your backend endpoint
        setProfileData(data);
      } catch (error) {
<<<<<<< HEAD
        console.error("Error fetching patient profile:", error);
=======
        console.error('Error fetching patient profile:', error);
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
      }
    };

    fetchProfileData();
  }, []);

<<<<<<< HEAD
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({
      ...updatedProfile,
      [name]: value,
    });
  };

  const handleUpdateProfile = async () => {
    try {
      // Send updated profile data to the backend for updating
      await axios.put("/api/patient/profile", updatedProfile); // Replace '/api/patient/profile' with your backend endpoint
      // Update local profile data
      setProfileData(updatedProfile);
      // Exit editing mode
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating patient profile:", error);
    }
  };

=======
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
<<<<<<< HEAD
            <PatientDashboardMenu />
          </div>
          <div className="col-md-9">
            <div className="profile-details">
              <h1 className="text-center">Your Profile</h1>
              <div className="profile-info">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={updatedProfile.name || profileData.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{profileData.name}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={updatedProfile.phone || profileData.phone}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{profileData.phone}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  {isEditing ? (
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={updatedProfile.email || profileData.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{profileData.email}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      name="gender"
                      value={updatedProfile.gender || profileData.gender}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{profileData.gender}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="age"
                      name="age"
                      value={updatedProfile.age || profileData.age}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{profileData.age}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      value={updatedProfile.location || profileData.location}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{profileData.location}</p>
                  )}
                </div>
                <div className="form-group">
                  <label>Photo:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="photo"
                      name="photo"
                      value={updatedProfile.photo || profileData.photo}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <img
                      src={profileData.photo}
                      alt="Patient"
                      className="img-fluid"
                    />
                  )}
                </div>
              </div>
              <div className="form-group">
                {isEditing ? (
                  <button
                    type="button"
                    className="btn btn-primary update-button"
                    onClick={handleUpdateProfile}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary edit-button"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </button>
                )}
=======
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
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <style>
        {`
          .profile-details {
            margin-top: 20px;
          }

          .profile-info {
            max-width: 400px;
            margin: auto;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-group label {
            display: block;
            font-weight: bold;
          }

          .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .form-control:focus {
            outline: none;
            border-color: #007bff;
          }

          .btn {
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
          }

          .btn-primary {
            background-color: #007bff;
            border: none;
            color: white;
          }

          .btn-primary:hover {
            background-color: #0056b3;
          }

          .edit-button {
            background-color: #28a745;
            margin: auto;
          }

          .edit-button:hover {
            background-color: #218838;
          }
        `}
      </style>
=======
>>>>>>> 1216347d3bf4ad0f393a1ccb152a3ade8509d7c0
    </Layout>
  );
};

export default PatientProfile;
