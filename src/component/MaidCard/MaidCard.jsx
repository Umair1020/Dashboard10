// CardComponent.jsx
import React, { useState } from "react";
import "./MaidCard.css"; // Make sure to create a corresponding CSS file
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import UpdateMaid from "./UpdateMaid";
const MaidCard = ({ details, deleteUser, dashboardId }) => {
  const baseUrl = "https://apis.alghawalimanpower.com";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZklkIjoiNjU1ODRkMWEyZWUwMTI4Nzk2MDljNWI5Iiwic3RhZmZSb2xlcyI6WzEsMiw0LDgsMTYsMzJdLCJpYXQiOjE3MDA1NjgwMjB9.qQLNeZIH1Rh_lVC1TGxXuCxHnDn1Itc0dbGXbAYaOD8";

  const updatePassword = async () => {
    console.log(dashboardId);
    const apiUrl = `https://apis.alghawalimanpower.com/api/v1/staff/${dashboardId}`;

    try {
      const response = await axios.put(
        apiUrl,
        {
          fullName: newName,
          email: newEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        // Handle the response data here
        console.log("Password updated successfully", response.data);
      }
    } catch (error) {
      // Handle the error here
      console.error("Error updating password", error);
    }
  };
  const [showStaff, setShowStaff] = useState(false);
  const toggleStaffModal = () => {
    setShowStaff(!showStaff);
  };
  const handleSeeDetails = async () => {
    try {
      const response = await axios.get(
        "https://apis.alghawalimanpower.com/cv/pdf/655f00958d667c256e8a79ae",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          responseType: "blob", // Important for handling binary data like PDF
        }
      );

      // Create a Blob from the PDF Stream
      const file = new Blob([response.data], { type: "application/pdf" });

      // Build a URL from the file
      const fileURL = URL.createObjectURL(file);

      // Open the URL on new Window
      window.open(fileURL);

      // Optionally download the file directly:
      // const link = document.createElement('a');
      // link.href = fileURL;
      // link.setAttribute('download', 'filename.pdf');  // Name the file
      // document.body.appendChild(link);
      // link.click();
    } catch (error) {
      console.error("Error fetching details", error);
      // Handle error appropriately
    }
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={`${baseUrl}/${details.maidImg}`} alt={`${details.name}`} />
      </div>
      <div className="card-details">
        <h2>{details.name}</h2>
        <div className="card-info">
          <div>Nationality: {details.nationality}</div>
          <div>Religion: {details.religion}</div>
          <div>Marital Status: {details.maritalStatus}</div>
          <div>Children: {details.children}</div>
          <div>Age: {details.age}</div>
          <div>Languages: {details.languages.join(", ")}</div>
          <div>Salary Per Month: {details.salery}</div>
          <div>Maid Tracking Code: {details.code}</div>
          <div>Added To System By: {details.remarks}</div>
          <div style={{ marginTop: "40px", marginLeft: "130px" }}></div>
        </div>
        <button className="details-button" onClick={handleSeeDetails}>
          See Details
        </button>

        <button onClick={toggleStaffModal}>
          <FaRegEdit
            className="mx-2"
            style={{ fontSize: "30px" }}
            onClick={updatePassword}
          />
        </button>
        {showStaff && (
          <div
            style={{
              position: "fixed",
              right: "150px",
              top: "0px",
              zIndex: 9999,
            }}
          >
            <UpdateMaid
              show={showStaff}
              onClose={toggleStaffModal}
              userId={details._id}
            />
          </div>
        )}
        <MdDelete
          className="mx-2"
          style={{ fontSize: "30px" }}
          onClick={() => deleteUser(details._id)}
        />
      </div>
    </div>
  );
};

export default MaidCard;
