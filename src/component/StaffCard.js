import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
const StaffCard = ({ name, dashboardId, email, imageSrc, deleteUser }) => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
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
  return (
    <div
      className="staff-card d-flex mx-1 my-3"
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "20px",
        background: "#fdfdfd",
        width: "100%",
      }}
    >
      <img
        src={imageSrc}
        alt={name}
        style={{ width: "120px", height: "110px" }}
      />
      <div style={{ marginTop: "0px" }}>
        <p className="mx-5">Staff Name</p>
        <input
          className="mx-5"
          placeholder={name}
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <p className="mx-5">Dashboard ID:</p>
        <p className="mx-5">{dashboardId}</p>
        <hr style={{ width: "200%" }} />
      </div>
      <div style={{ marginTop: "38px" }}>
        <p className="mx-3">Email</p>
        <input
          className="mx-3"
          placeholder={email}
          value={newEmail}
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
        />
      </div>
      <div style={{ marginTop: "40px", marginLeft: "130px" , display:'flex' }}>
        <FaRegEdit
          className="mx-2"
          style={{ fontSize: "30px" }}
          onClick={updatePassword}
        />
        <MdDelete
          className="mx-2"
          style={{ fontSize: "30px" }}
          onClick={deleteUser}
        />
      </div>
    </div>
  );
};

export default StaffCard;
