import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes (controlled components)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label><br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Success Message */}
      {submitted && (
        <p style={styles.success}>Form submitted successfully!</p>
      )}
    </div>
  );
}

// Simple styling
const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    textAlign: "left",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
};

export default App;