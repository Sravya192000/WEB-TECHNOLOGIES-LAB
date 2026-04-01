import React from "react";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Cards</h1>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        
        <StudentCard name="Sravya" department="CSE" marks="85" />
        <StudentCard name="Rahul" department="ECE" marks="78" />
        <StudentCard name="Ananya" department="IT" marks="92" />
        <StudentCard name="Kiran" department="EEE" marks="88" />

      </div>
    </div>
  );
}

export default App;