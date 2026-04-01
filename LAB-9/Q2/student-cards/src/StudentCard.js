import React from "react";

function StudentCard(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
        width: "250px",
        borderRadius: "10px",
        boxShadow: "0px 0px 8px gray"
      }}
    >
      <h3>{props.name}</h3>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>Marks:</strong> {props.marks}</p>
    </div>
  );
}

export default StudentCard;