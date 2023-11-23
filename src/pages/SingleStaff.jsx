import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sidebar from "../component/Sidebar";

const SingleStaff = () => {
  const { id } = useParams();
  useEffect(() => {
    // Function to make the API request
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `https://apis.alghawalimanpower.com/api/v1/staff/${id}`,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZklkIjoiNjU1ODRkMWEyZWUwMTI4Nzk2MDljNWI5Iiwic3RhZmZSb2xlcyI6WzEsMiw0LDgsMTYsMzJdLCJpYXQiOjE3MDA1NjgwMjB9.qQLNeZIH1Rh_lVC1TGxXuCxHnDn1Itc0dbGXbAYaOD8",
            "Content-Type": "application/json",
          },
        });

        // Handle the response however you like
        console.log(response.data);
      } catch (error) {
        // Handle the error however you like
        console.error("There was an error!", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default SingleStaff;
