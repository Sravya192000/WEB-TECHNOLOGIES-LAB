import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Runs once when component loads
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError("Error fetching data. Check internet or API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>API Data Fetch Example</h2>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={styles.error}>{error}</p>}

      {/* Data */}
      {!loading && !error && (
        <ul>
          {data.map((user) => (
            <li key={user.id} style={styles.card}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Company: {user.company.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "500px",
    margin: "50px auto",
    textAlign: "left",
  },
  error: {
    color: "red",
  },
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
};

export default App;