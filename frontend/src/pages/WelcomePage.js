import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/templates");
  };

  const styles = {
    container: {
      backgroundColor: "#0d0d0d",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "2rem",
    },
    title: {
      fontSize: "3rem",
      color: "#c2296b",
      marginBottom: "2rem",
    },
    button: {
      backgroundColor: "#c2296b",
      color: "#ffffff",
      border: "none",
      padding: "1rem 2rem",
      borderRadius: "12px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },

  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Resume Builder</h1>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#a51e57")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#c2296b")}
        onClick={handleCreateClick}>Create</button>    </div>
  );
}

export default WelcomePage;
