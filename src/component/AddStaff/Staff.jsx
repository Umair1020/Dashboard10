import React, { useState } from "react";
import "./Staf.css"; // Ensure this CSS file is correctly linked

const Staff = ({ show, onClose }) => {
  const [staffMember, setStaffMember] = useState({
    fullName: "",
    email: "",
    password: "",
    roles: [],
  });
  const handleClose = (e) => {
    e.stopPropagation(); // Prevents the event from propagating up to parent elements
    onClose();
  };

  // Stop propagation for clicks within the modal
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };
  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      // Convert checkbox name to a role number and toggle the role in the array
      const roleValue = parseInt(name, 10);
      const newRoles = checked
        ? [...staffMember.roles, roleValue]
        : staffMember.roles.filter((role) => role !== roleValue);
      setStaffMember({ ...staffMember, roles: newRoles.sort((a, b) => a - b) });
    } else {
      // Handle change for text inputs
      setStaffMember({ ...staffMember, [name]: value });
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // API token should be stored securely, not hardcoded
    const apiToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZklkIjoiNjU1ODRkMWEyZWUwMTI4Nzk2MDljNWI5Iiwic3RhZmZSb2xlcyI6WzEsMiw0LDgsMTYsMzJdLCJpYXQiOjE3MDA1NjgwMjB9.qQLNeZIH1Rh_lVC1TGxXuCxHnDn1Itc0dbGXbAYaOD8"; // Replace with your actual token

    fetch("https://apis.alghawalimanpower.com/api/v1/staff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`, // Use the token from your environment
      },
      body: JSON.stringify({
        fullName: staffMember.fullName,
        email: staffMember.email,
        password: staffMember.password,
        roles: staffMember.roles,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success actions here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });
  };

  // Checkbox components for roles
  const roleCheckboxes = [1, 2, 4, 8, 16, 32].map((role) => (
    <div className="checkbox-group" key={`role-${role}`}>
      <input
        type="checkbox"
        id={`role-${role}`}
        name={`${role}`}
        checked={staffMember.roles.includes(role)}
        onChange={handleChange}
      />
      <label htmlFor={`role-${role}`}>
        {"Show " +
          (role === 1 ? "Agents Requests" : `Permission ${role}`) +
          " to this member?"}
      </label>
    </div>
  ));
  if (!show) {
    return null;
  }
  return (
    <div className="add-staff-member-container" onClick={handleClose}>
      <div className="add-staff-member-modal" onClick={handleModalContentClick}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Add new staff member</h2>
            <button className="close-button" onClick={handleClose}>
              &times;
            </button>
          </div>
          <div className="staff-info">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={staffMember.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={staffMember.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={staffMember.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              {roleCheckboxes}
              <button type="submit" className="submitbutton">
                Add To System
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
