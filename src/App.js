import React from "react";

function App() {
  const name = "friend"; // More welcoming!
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌟 Hello, {name}! 🌟</h1>
      <p style={styles.message}>
        Welcome to our awesome React app. Have a fantastic day! 😊
      </p>
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
