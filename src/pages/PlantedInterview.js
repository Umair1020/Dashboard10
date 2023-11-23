import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import { BsList, BsFilter, BsSearch, BsPlus } from "react-icons/bs";
import { FaAngleDown, FaFilter } from "react-icons/fa";
import axios from "axios";
import Table from "../component/Table/Table";
import "../global.css"

const PlantedInterview = () => {
  const [interviews, setInterviews] = useState([]);
  const [error, setError] = useState(null);
  console.log(interviews);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apis.alghawalimanpower.com/api/v1/interviews",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZklkIjoiNjU1ODRkMWEyZWUwMTI4Nzk2MDljNWI5Iiwic3RhZmZSb2xlcyI6WzEsMiw0LDgsMTYsMzJdLCJpYXQiOjE3MDA1NjgwMjB9.qQLNeZIH1Rh_lVC1TGxXuCxHnDn1Itc0dbGXbAYaOD8",
              "Content-Type": "application/json",
            },
          }
        );
        setInterviews(response.data); // Adjust according to the structure of response
      } catch (error) {
        setError(error);
        console.error("Error fetching interviews data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Sidebar />
      <main id="main" className="main">
        <div className="row overflow-x-auto">
          <div className="col-lg-12 d-flex ">
            <div className="search-bar">
              <form
                className="search-form d-flex align-items-center"
                method="POST"
                action="#"
              >
                <div style={{ position: "relative", width: "100%" }}>
                  <input
                    type="text"
                    name="query"
                    placeholder="Search"
                    style={{ width: "100%", height: "100%", padding: "10px" }}
                    title="Enter search keyword"
                  />
                  <BsSearch
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                </div>
              </form>
            </div>

            <div className="filter-button mx-4">
              <button className="btn btn-filter" style={{ padding: "10px" }}>
                <FaFilter /> Filter Button <FaAngleDown />
              </button>
            </div>
            <div className="filter-button ">
              <button className="btn btn-success" style={{ padding: "9px" }}>
                <BsPlus /> Plan Miad Interview
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12 d-flex ">
            <div className="search-bar">
              <form
                className="search-form d-flex align-items-center"
                method="POST"
                action="#"
              >
                <div style={{ position: "relative", width: "100%" }}>
                  <input
                    type="text"
                    name="query"
                    placeholder="Done"
                    style={{ width: "100%", height: "100%", padding: "10px" }}
                    title="Enter search keyword"
                  />
                  <BsSearch
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                </div>
              </form>
            </div>

            <div className="search-bar">
              <form
                className="search-form d-flex align-items-center"
                method="POST"
                action="#"
              >
                <div style={{ position: "relative", width: "100%" }}>
                  <input
                    type="text"
                    name="query"
                    placeholder="Pending"
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "10px",
                      backgroundColor: "rgba(195, 208, 212, 1)",
                    }}
                    title="Enter search keyword"
                  />
                  <BsSearch
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                </div>
              </form>
            </div>

            <div className="search-bar">
              <form
                className="search-form d-flex align-items-center"
                method="POST"
                action="#"
              >
                <div style={{ position: "relative", width: "100%" }}>
                  <BsSearch
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                  <input
                    type="text"
                    name="query"
                    placeholder="Late"
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "10px",
                      backgroundColor: "rgba(195, 208, 212, 1)",
                    }}
                    title="Enter search keyword"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <div className="overflow-x-auto self-stretch rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-col items-start justify-start">
  <table
    className="table-users"
    style={{ borderCollapse: "collapse", width: "100%" }}
  >
    <tbody>
      {interviews.map((interview, index) => (
        <tr key={index}>
          {/* Update Table component to render table rows */}
          <Table interview={interview} />
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </main>
    </div>
  );
};

export default PlantedInterview;
