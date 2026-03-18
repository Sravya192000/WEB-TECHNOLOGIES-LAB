const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let students = [];

/* CREATE */
app.post("/students", (req, res) => {
    const student = req.body;

    if (!student.id || !student.name) {
        return res.status(400).json({ message: "Invalid data" });
    }

    students.push(student);
    res.status(200).json({ message: "Student added successfully" });
});

/* READ */
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

/* UPDATE */
app.put("/students/:id", (req, res) => {
    const id = req.params.id;
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students[index] = req.body;
    res.status(200).json({ message: "Student updated" });
});

/* DELETE */
app.delete("/students/:id", (req, res) => {
    const id = req.params.id;
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students.splice(index, 1);
    res.status(200).json({ message: "Student deleted" });
});

/* SERVER ERROR HANDLER */
app.use((err, req, res, next) => {
    res.status(500).json({ message: "Server error" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
