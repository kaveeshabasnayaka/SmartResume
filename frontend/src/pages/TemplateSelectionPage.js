import React from "react";
import { useNavigate } from "react-router-dom";

function TemplateSelectionPage() {
  const navigate = useNavigate();

  const handleTemplateSelect = (id) => {
    navigate(`/template/${id}`);
  };

const styles = {
    container: {
      backgroundColor: "#0d0d0d",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      color: "#cccccc",
    },
    heading: {
      fontSize: "2.5rem",
      color: "#c2296b",
      marginBottom: "2rem",
    },
    button: {
      backgroundColor: "#c2296b",
      color: "#fff",
      border: "none",
      padding: "1rem 2rem",
      borderRadius: "10px",
      fontSize: "1rem",
      fontWeight: "bold",
      margin: "0.5rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Select a Template</h2>
      {[1, 2, 3,4,5].map((id) => (
        <button
          key={id}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#a51e57")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#c2296b")}
          onClick={() => handleTemplateSelect(id)}
        >
          Template {id}
        </button>
       
      ))}
    </div>
  );
}

export default TemplateSelectionPage;
