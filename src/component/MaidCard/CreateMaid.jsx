import React, { useState } from "react";
import axios from "axios";
import "./CreateMaid.css"; // Ensure this file exists and contains necessary CSS

const CreateMaid = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    nationality: "",
    otherNationality: "",
    salery: "",
    remarks: "",
    price: "",
    religion: "",
    maritalStatus: "",
    age: "",
    education: "",
    languages: [],
    otherLanguage: "",
    contractPeriod: "",
    appliedFor: "",
    agentName: "",
    children: "",
    profileImage: null,
    videoLink: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "nationality" && value === "Other") {
      setFormData({ ...formData, [name]: value, otherNationality: "" });
    } else if (name === "otherNationality") {
      setFormData({ ...formData, otherNationality: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const languagesOptions = ["English", "Hindi", "Urdu", "Arabic", "Other"]; // Add "Other" option

  const isOtherLanguageChecked = formData.languages.includes("Other");
  const handleLanguageCheckbox = (event) => {
    const { value, checked } = event.target;
    if (value === "Other" && checked) {
      // Reset otherLanguage when "Other" is checked
      setFormData((prevFormData) => ({
        ...prevFormData,
        languages: [...prevFormData.languages, value],
        otherLanguage: "",
      }));
    } else if (value === "Other" && !checked) {
      // Remove "Other" and clear otherLanguage when unchecked
      setFormData((prevFormData) => ({
        ...prevFormData,
        languages: prevFormData.languages.filter((lang) => lang !== value),
        otherLanguage: "",
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        languages: checked
          ? [...prevFormData.languages, value]
          : prevFormData.languages.filter((lang) => lang !== value),
      }));
    }
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({ ...formData, [name]: files[0] });
  };
  const isOtherNationality = formData.nationality === "Other";
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "languages") {
        let languages = formData[key];
        if (languages.includes("Other") && formData.otherLanguage) {
          // Replace "Other" with the value from otherLanguage
          languages = languages
            .filter((lang) => lang !== "Other")
            .concat(formData.otherLanguage);
        }
        data.append(key, JSON.stringify(languages));
      } else if (key === "nationality" && formData.nationality === "Other") {
        // Replace "nationality" with the value from otherNationality
        data.append(key, formData.otherNationality);
      } else if (key !== "otherNationality" && key !== "otherLanguage") {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        "https://apis.alghawalimanpower.com/api/v1/maids",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZklkIjoiNjU1ODRkMWEyZWUwMTI4Nzk2MDljNWI5Iiwic3RhZmZSb2xlcyI6WzEsMiw0LDgsMTYsMzJdLCJpYXQiOjE3MDA1NjgwMjB9.qQLNeZIH1Rh_lVC1TGxXuCxHnDn1Itc0dbGXbAYaOD8", // Replace with actual token
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };
  console.log(formData.nationality);
  const handleMultiSelectChange = (event) => {
    const { name, options } = event.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setFormData({ ...formData, [name]: selectedValues });
  };
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };
  const handleClose = (e) => {
    e.stopPropagation(); // Prevents the event from propagating up to parent elements
    onClose();
  };
  return (
    <div className="maid-form-container" onClick={handleModalContentClick}>
      <button
        style={{ background: "red", color: "white", borderRadius: "5px" }}
        onClick={handleClose}
      >
        &times;
      </button>
      <form
        className="maid-form"
        onSubmit={handleSubmit}
        style={{ height: "100vh", width: "600px", overflow: "scroll" }}
      >
        <h1>Add New Maid</h1>

        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="nationality">Nationality:</label>
        <select
          id="nationality"
          name="nationality"
          style={{ width: "100%", height: "50px" }}
          value={formData.nationality}
          onChange={handleInputChange}
        >
          <option value="India">India</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Other">Other</option>
        </select>
        {isOtherNationality && (
          <div>
            <label htmlFor="otherNationality">Specify Nationality:</label>
            <input
              type="text"
              id="otherNationality"
              name="otherNationality"
              value={formData.otherNationality}
              onChange={handleInputChange}
            />
          </div>
        )}

        <label>Languages:</label>
        <div style={{ display: "flex" }}>
          {languagesOptions.map((language, index) => (
            <div key={index} style={{ display: "flex" }}>
              <input
                type="checkbox"
                id={`language-${language}`}
                name="languages"
                value={language}
                onChange={handleLanguageCheckbox}
                checked={formData.languages.includes(language)}
              />
              <label htmlFor={`language-${language}`}>{language}</label>
            </div>
          ))}
        </div>

        {isOtherLanguageChecked && (
          <div>
            <label htmlFor="otherLanguage">Specify Language:</label>
            <input
              type="text"
              id="otherLanguage"
              name="otherLanguage"
              value={formData.otherLanguage}
              onChange={handleInputChange}
            />
          </div>
        )}

        <label htmlFor="religion">Religion:</label>
        <select
          id="religion"
          name="religion"
          value={formData.religion}
          onChange={handleInputChange}
          style={{ width: "100%", height: "50px" }}
        >
          <option value="Islam">Islam</option>
          <option value="Christianity">Christianity</option>
          <option value="Hinduism">Hinduism</option>
          {/* ... Other religions ... */}
        </select>
        <label htmlFor="salary">Salary:</label>
        <select
          id="salary"
          name="salery"
          value={formData.salery}
          onChange={handleInputChange}
          style={{ width: "100%", height: "50px" }}
        >
          {Array.from({ length: 13 }, (_, i) => 70 + i * 10).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>

        <label htmlFor="remarks">Remarks:</label>
        <textarea
          id="remarks"
          name="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />

        <label htmlFor="maritalStatus">Marital Status:</label>
        <input
          type="text"
          id="maritalStatus"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleInputChange}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />

        <label htmlFor="education">Education:</label>
        <input
          type="text"
          id="education"
          name="education"
          value={formData.education}
          onChange={handleInputChange}
        />

        <label htmlFor="contractPeriod">Contract Period:</label>
        <input
          type="text"
          id="contractPeriod"
          name="contractPeriod"
          value={formData.contractPeriod}
          onChange={handleInputChange}
        />

        <label htmlFor="appliedFor">Applied For:</label>
        <input
          type="text"
          id="appliedFor"
          name="appliedFor"
          value={formData.appliedFor}
          onChange={handleInputChange}
        />

        <label htmlFor="agentName">Agent Name:</label>
        <input
          type="text"
          id="agentName"
          name="agentName"
          value={formData.agentName}
          onChange={handleInputChange}
        />

        <label htmlFor="children">Children:</label>
        <select
          id="children"
          name="children"
          value={formData.children}
          onChange={handleInputChange}
          style={{ width: "100%", height: "50px" }}
        >
          {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>

        {/* <label htmlFor="profileImage">Profile Image:</label>
        <input
          type="file"
          id="profileImage"
          name="maidImg"
          onChange={handleFileChange}
        />

        <label htmlFor="videoLink">Video Link:</label>
        <input
          type="file"
          id="videoLink"
          name="videoLink"
          onChange={handleFileChange}
        /> */}
        <div className="file-upload-container">
          <label htmlFor="profileImage" className="file-upload-label">
            <span>Upload Maid Pic (Profile Image)</span>
            <input
              id="profileImage"
              type="file"
              name="maidImg"
              className="file-input"
              onChange={handleFileChange}
              accept=".png,.pdf,.jpg" // Specify accepted file types
            />
            <div className="upload-instructions">
              <button type="button" className="upload-button">
                Upload
              </button>
              <span className="drag-drop-text">Drag & Drop File Here</span>
              <span className="file-types">PNG, PDF & JPG only</span>
            </div>
            <span className="error-message">error</span>{" "}
            {/* Hide this span if there's no error */}
          </label>
        </div>
        <div className="file-upload-container">
          <label htmlFor="videoLink" className="file-upload-label">
            <span>Upload Maid (Profile video)</span>
            <input
              id="videoLink"
              type="file"
              className="file-input"
              onChange={handleFileChange}
              name="videoLink"
              // Specify accepted file types
            />
            <div className="upload-instructions">
              <button type="button" className="upload-button">
                Upload
              </button>
              <span className="drag-drop-text">Drag & Drop File Here</span>
              <span className="file-types">mp4,avi</span>
            </div>
            <span className="error-message">error</span>{" "}
            {/* Hide this span if there's no error */}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateMaid;
