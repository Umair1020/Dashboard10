import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import {
  BsList,
  BsFilter,
  BsSearch,
  BsArrowDown,
  BsPlus,
} from "react-icons/bs";
import { FaFilter, FaAngleDown } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import MaidCard from "../component/MaidCard/MaidCard";
import CreateMaid from "../component/MaidCard/CreateMaid";
const OurMaid = () => {
  const [maids, setMaids] = useState([]);
  console.log(maids);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZklkIjoiNjU1ODRkMWEyZWUwMTI4Nzk2MDljNWI5Iiwic3RhZmZSb2xlcyI6WzEsMiw0LDgsMTYsMzJdLCJpYXQiOjE3MDA1NjgwMjB9.qQLNeZIH1Rh_lVC1TGxXuCxHnDn1Itc0dbGXbAYaOD8";

  const baseUrl = "https://apis.alghawalimanpower.com";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apis.alghawalimanpower.com/api/v1/maids",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZklkIjoiNjU1ODRkMWEyZWUwMTI4Nzk2MDljNWI5Iiwic3RhZmZSb2xlcyI6WzEsMiw0LDgsMTYsMzJdLCJpYXQiOjE3MDA1NjgwMjB9.qQLNeZIH1Rh_lVC1TGxXuCxHnDn1Itc0dbGXbAYaOD8",
              "Content-Type": "application/json",
            },
          }
        );
        setMaids(response.data); // Adjust this depending on the structure of the response
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Handle error appropriately in your UI
      }
    };

    fetchData();
  }, []);
  const [showStaff, setShowStaff] = useState(false);

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 770 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const toggleStaffModal = () => {
    setShowStaff(!showStaff);
  };
  const deleteUser = async (maidId) => {
    try {
      // Call the API to delete the maid
      await axios.delete(
        `https://apis.alghawalimanpower.com/api/v1/maids/delete/${maidId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the state to remove the deleted maid
      setMaids(maids.filter((maid) => maid._id !== maidId));
    } catch (error) {
      console.error("Error deleting maid", error);
      // Optionally handle the error in UI
    }
  };

  return (
    <div>
      <Desktop>
        <Sidebar />
        <main id="main" className="main" style={{ overflowY: "hidden" }}>
          <div className="row">
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
                <button
                  className="btn btn-success"
                  style={{ padding: "9px" }}
                  onClick={toggleStaffModal}
                >
                  <BsPlus />
                  {showStaff ? "Close Form" : "Add New Maids"}
                </button>
              </div>

              {/* Conditionally render CreateMaid component */}
              {showStaff && (
                <div
                  style={{
                    position: "fixed",
                    // right: "450px",
                    top: "0px",
                    zIndex: 9999,
                  }}
                >
                  <CreateMaid show={showStaff} onClose={toggleStaffModal} />
                </div>
              )}
            </div>
          </div>
          <br />

          {maids.map((maid) => {
            return (
              <MaidCard
                details={maid}
                deleteUser={() => deleteUser(maid._id)}
              />
            );
          })}
        </main>
      </Desktop>
      <Mobile>
        <main id="main" className={`main `}>
          <div className="relative bg-neutral-200 w-full overflow-hidden flex flex-col items-start justify-start pt-[116px] px-0 pb-14 box-border text-left text-lg text-neutral-800 font-medium">
            <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[16px] z-[0]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xs text-neutral-600">
                {" "}
                <br />
                <div className="self-stretch  flex flex-row items-start justify-start gap-[4px]">
                  <div className="flex-1  rounded-corner-radius-8-round bg-neutral-300 flex flex-row items-center justify-start py-4 px-2 gap-[4px] border-[1px] border-solid border-neutral-500">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/icons.svg"
                    />
                    {/* <div className="flex-1  gap-[4px]rounded flex flex-row items-center justify-start">
                <div className="flex-1 relative tracking-[0.02em] leading-[136%]">
                  Search
                </div>
              </div> */}
                    <div className="flex-1  gap-[4px]rounded flex flex-row items-center justify-start">
                      <div className="flex-1 relative tracking-[0.02em] leading-[136%]">
                        <div className="search-bar">
                          {/* <form className="search-form d-flex align-items-center" method="POST" action="#"> */}
                          <input
                            className="form-group"
                            type="text"
                            name="query"
                            placeholder="Search"
                            style={{
                              width: "100%",
                              height: "100%",
                              padding: "10px",
                              backgroundColor: "rgba(195, 208, 212, 1)",
                            }}
                            title="Enter search keyword"
                          />

                          {/* </form> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row items-start justify-start gap-[34px] text-center text-neutral-whitepure">
                    <div className="rounded-corner-radius-8-round bg-maincolors-algawali-primary-2 overflow-hidden flex flex-col items-center justify-center">
                      <div className="self-stretch rounded overflow-hidden flex flex-row items-center justify-center p-3">
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/filter.svg"
                        />
                      </div>
                    </div>
                    <div className="hidden flex-row items-start justify-start">
                      <div className="self-stretch rounded-corner-radius-8-round bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center p-3 gap-[4px]">
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/icons1.svg"
                        />
                        <b className="relative tracking-[0.02em] leading-[136%] hidden">
                          Button CTA
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch hidden flex-row flex-wrap items-center justify-start gap-[4px] min-w-[256px] text-neutral-700">
                  <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden flex flex-row items-center justify-center p-3 gap-[2px] border-[1px] border-solid border-neutral-700">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/frame.svg"
                    />
                    <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                      Reject Request
                    </div>
                  </div>
                  <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden flex flex-row items-center justify-center p-3 gap-[2px] border-[1px] border-solid border-neutral-700">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/frame1.svg"
                    />
                    <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                      Reject Request
                    </div>
                  </div>
                  <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden flex flex-row items-center justify-center p-3 gap-[2px] border-[1px] border-solid border-neutral-700">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/frame2.svg"
                    />
                    <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                      Reject Request
                    </div>
                  </div>
                  <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden hidden flex-row items-center justify-center p-3 gap-[2px] border-[1px] border-solid border-neutral-700">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/frame3.svg"
                    />
                    <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                      Reject Request
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start p-3 text-statuscolor-red">
                    <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                      Clear All Filters
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-corner-radius-12-round bg-neutral-400 overflow-hidden flex flex-row items-start justify-center p-1 gap-[4px] border-[1px] border-solid border-neutral-500">
                  <Button
                    className="flex-1"
                    style={{ background: "#fff", color: "#000" }}
                  >
                    Pending
                  </Button>
                  <Button
                    className="flex-1"
                    color="primary"
                    variant="contained"
                  >
                    Accepted
                  </Button>
                  <Button
                    className="flex-1"
                    color="primary"
                    variant="contained"
                  >
                    Rejected
                  </Button>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                  <b className="relative tracking-[0.02em] leading-[140%]">
                    All Pending Requests
                  </b>
                  <div className="flex-1 flex flex-row items-center justify-start text-base text-neutral-700">
                    <div className="relative tracking-[0.02em]">12000</div>
                  </div>
                </div>
              </div>

              {maids.map((maid) => {
                return (
                  <div className="rounded-corner-radius-12-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-center justify-center p-4 box-border gap-[8px] min-w-[256px] text-center">
                    <div className="overflow-hidden flex flex-col  justify-start">
                      <div className="flex flex-col items-center justify-center gap-[16px]">
                        <div className="self-stretch flex flex-col items-centercenter justify-center gap-[8px]">
                          <div className="flex flex-col items-center center justify-center gap-[8px]">
                            <img
                              className="rounded-corner-radius-8-round  h-[295px] object-cover"
                              alt=""
                              src={`${baseUrl}/${maid.maidImg}`}
                            />
                            <b className="self-stretch relative tracking-[0.02em] leading-[140%]">
                              {maid.name}
                            </b>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-center gap-[8px] text-left text-xs text-neutral-700">
                            <div className="w-[295px] overflow-x-auto flex flex-col items-start justify-start min-w-[295px]">
                              <div
                                className="flex flex-col items-start justify-start"
                                style={{ width: "100%" }}
                              >
                                <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 gap-[24px] border-b-[1px] border-solid border-neutral-500">
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                    <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                      Nationality
                                    </div>
                                    <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                                      {maid.nationality}
                                    </div>
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                    <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                      Religion
                                    </div>
                                    <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                                      {maid.religion}
                                    </div>
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                    <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                      Martial Status
                                    </div>
                                    <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                                      {maid.maritalStatus}
                                    </div>
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                    <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                      Children
                                    </div>
                                    <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                                      4
                                    </div>
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                    <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                      Age
                                    </div>
                                    <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                                      {maid.age}Years Old
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 gap-[24px] border-b-[1px] border-solid border-neutral-500">
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                    <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                      Languages
                                    </div>
                                    <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                                      {maid.languages.map((lang) => lang)}
                                    </div>
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                    <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                      Agent Email
                                    </div>
                                    <a
                                      className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium text-[inherit] [text-decoration:none]"
                                      href="mailto:example@email.com"
                                      target="_blank"
                                    >
                                      example@email.com
                                    </a>
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                    <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                      Agent Phone Number
                                    </div>
                                    <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                                      +9272828282882882
                                    </div>
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                    <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                      Request Submission Date
                                    </div>
                                    <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                                      {maid.timestamp}
                                    </div>
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                    <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                      Application Status
                                    </div>
                                    <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium text-maincolors-algawali-primary">
                                      {maid.remarks}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch rounded-corner-radius-16-round-2 bg-neutral-300 overflow-hidden flex flex-col items-start justify-start">
                              <div className="relative rounded-corner-radius-16-round-2 bg-neutral-600 w-[55px] h-2 overflow-hidden shrink-0" />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch rounded-2xl h-14 flex flex-row items-start justify-start text-sm text-maincolors-algawali-secondry-color-dark">
                          <div className="flex-1 rounded-corner-radius-8-round flex flex-row items-center justify-center p-3 border-[2px] border-solid border-maincolors-algawali-secondry-color-dark">
                            <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                              See Details
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-center text-left text-xs text-neutral-700">
                      <div className="self-stretch rounded-corner-radius-8-round bg-neutral-200 flex flex-col items-start justify-start py-4 px-2 gap-[16px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch relative tracking-[0.02em] leading-[136%]">{`Write Your Response `}</div>
                          <div className="self-stretch rounded-corner-radius-8-round bg-neutral-400 [backdrop-filter:blur(80px)] flex flex-row items-center justify-start py-4 px-2 text-neutral-800 border-[1px] border-solid border-neutral-500">
                            <div className="flex-1 rounded flex flex-row items-center justify-start">
                              <div className="self-stretch flex-1 relative tracking-[0.02em] leading-[136%] flex items-center">
                                Thank you for contacting usThank you for
                                contacting usThank you for contacting usThank
                                you for contacting usThank you for contacting us
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch relative tracking-[0.02em] leading-[136%] text-statuscolor-red hidden">
                            error
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-center gap-[16px] text-statuscolor-red">
                          <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <div className="flex-1 rounded-corner-radius-4-round bg-firebrick box-border h-8 overflow-hidden flex flex-row items-center justify-center py-3 px-2 border-[1px] border-solid border-statuscolor-red">
                              <div className="flex flex-row items-center justify-center gap-[4px]">
                                <img
                                  className="relative w-4 h-4 overflow-hidden shrink-0"
                                  alt=""
                                  src="/icons-252.svg"
                                />
                                <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                                  Reject
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 rounded-corner-radius-4-round box-border h-8 overflow-hidden flex flex-row items-center justify-center py-3 px-2 text-neutral-700 border-[1px] border-solid border-neutral-700">
                              <div className="flex flex-row items-center justify-center gap-[4px]">
                                <img
                                  className="relative w-4 h-4 overflow-hidden shrink-0"
                                  alt=""
                                  src="/icons-253.svg"
                                />
                                <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                                  Accept
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch rounded-2xl flex flex-row items-start justify-start text-center text-sm text-neutral-whitepure">
                            <div className="flex-1 rounded-corner-radius-8-round bg-maincolors-algawali-secondry-color-dark shadow-[0px_8px_16px_rgba(1,_71,_38,_0.24)] flex flex-row items-center justify-center p-3">
                              <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                Send
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <Sidebar />
            </div>
          </div>
        </main>
      </Mobile>
    </div>
  );
};

export default OurMaid;
