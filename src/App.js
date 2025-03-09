import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/message`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const { text } = await response.json();
        setData(text);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // ✅ Added dependency array to prevent infinite re-renders

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌍 Welcome to Our App!</h1>
      {loading ? (
        <p style={styles.message}>⏳ Loading message...</p>
      ) : error ? (
        <p style={{ color: "red" }}>❌ Error: {error}</p>
      ) : (
        <p style={styles.message}>💬 Message: {data}</p>
      )}
    </div>
  );
}

// Simple inline styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#0078D7",
    fontSize: "2rem",
  },
  message: {
    color: "#555",
    fontSize: "1.2rem",
  },
};

export default App;
