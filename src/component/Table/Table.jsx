import React from "react";
import "./Table.css"; // Make sure to include the CSS file
import axios from "axios";
function Table({ interview }) {
  const calculateDaysLeft = (date) => {
    const today = new Date();
    const interviewDate = new Date(date);
    const timeDiff = interviewDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft >= 0 ? daysLeft : 0; // Ensure we don't show negative numbers
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // This will return the date part in 'YYYY-MM-DD' format
  };
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toISOString().split("T")[1].substring(0, 5); // This will return the time part in 'HH:MM' format
  };
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZklkIjoiNjU1ODRkMWEyZWUwMTI4Nzk2MDljNWI5Iiwic3RhZmZSb2xlcyI6WzEsMiw0LDgsMTYsMzJdLCJpYXQiOjE3MDA1NjgwMjB9.qQLNeZIH1Rh_lVC1TGxXuCxHnDn1Itc0dbGXbAYaOD8";

  const updateInterviewStatus = async (id) => {
    const apiUrl = `https://apis.alghawalimanpower.com/api/v1/interviews/status/${id}`;

    try {
      const response = await axios.put(
        apiUrl,
        {
          // Include the data you need to send, e.g.:
          // status: "newStatus"
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response here
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error making PUT request:", error);
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Maid Image</th>
            <th>Maid Name</th>
            <th>Maid Tracking Code</th>
            <th>Client Ph#</th>
            <th>Client Email</th>
            <th>Interview Date</th>
            <th>Interview Time</th>
            <th>Days Left</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "15px" }}>
          <tr>
            <td>
              <img className="img" src="/girl.png" alt="" />
            </td>
            <td>
              <p>{interview.maidName}</p>
            </td>
            <td>
              <p>{interview.userPhoneNumber}</p>
            </td>
            <td>
              <p>{interview.maidId}</p>
            </td>
            <td>
              <p>{interview.clientEmail}</p>
            </td>
            <td>
              <p>{formatDate(interview.interviewDate)}</p>
            </td>
            <td>
              <p>{formatTime(interview.timestamp)}</p>
            </td>
            <td>
              <p>{calculateDaysLeft(interview.interviewDate)}</p>
            </td>
            <td>
              <p>{interview.Status}</p>
              {interview.Status === "pending" ? (
                <button
                  onClick={() => {
                    updateInterviewStatus(interview._id);
                  }}
                >
                  Approve
                </button>
              ) : (
                ""
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
