const API_URL = "http://localhost:3000/students";

/* Display message */
function showMessage(text, type) {
    const msg = document.getElementById("message");
    msg.className = type;
    msg.innerText = text;
}

/* CREATE */
function addStudent() {

    const student = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        marks: document.getElementById("marks").value
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", API_URL, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 200) {
            showMessage("Student added successfully", "success");
            fetchStudents();
        } else if (xhr.status === 400) {
            showMessage("Invalid data", "error");
        } else {
            showMessage("Server error", "error");
        }
    };

    xhr.onerror = function () {
        showMessage("Network error", "error");
    };

    xhr.send(JSON.stringify(student));
}

/* READ */
function fetchStudents() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const students = JSON.parse(xhr.responseText);
            const table = document.getElementById("studentTable");
            table.innerHTML = "";

            students.forEach(s => {
                table.innerHTML += `
                    <tr>
                        <td>${s.id}</td>
                        <td>${s.name}</td>
                        <td>${s.department}</td>
                        <td>${s.marks}</td>
                        <td>
                            <button onclick="updateStudent('${s.id}')">Edit</button>
                            <button onclick="deleteStudent('${s.id}')">Delete</button>
                        </td>
                    </tr>
                `;
            });

        } else {
            showMessage("Failed to fetch students", "error");
        }
    };

    xhr.send();
}

/* UPDATE */
function updateStudent(id) {

    const name = prompt("Enter new name:");
    const department = prompt("Enter new department:");
    const marks = prompt("Enter new marks:");

    const updatedStudent = { id, name, department, marks };

    const xhr = new XMLHttpRequest();
    xhr.open("PUT", API_URL + "/" + id, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 200) {
            showMessage("Student updated", "success");
            fetchStudents();
        } else if (xhr.status === 404) {
            showMessage("Student not found", "error");
        } else {
            showMessage("Server error", "error");
        }
    };

    xhr.send(JSON.stringify(updatedStudent));
}

/* DELETE */
function deleteStudent(id) {

    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", API_URL + "/" + id, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            showMessage("Student deleted", "success");
            fetchStudents();
        } else if (xhr.status === 404) {
            showMessage("Student not found", "error");
        } else {
            showMessage("Server error", "error");
        }
    };

    xhr.send();
}
