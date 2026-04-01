import React from "react";

function StudentProfile() {
  // Student details
  const name = "Sravya";
  const department = "Computer Science";
  const year = "3rd Year";
  const section = "A";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Profile</h1>

      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          width: "300px",
          margin: "auto",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px gray"
        }}
      >
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Section:</strong> {section}</p>
      </div>
    </div>
  );
}

export default StudentProfile;