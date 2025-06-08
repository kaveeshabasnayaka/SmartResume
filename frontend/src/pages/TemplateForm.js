import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TemplateForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePreview = () => {
    navigate("/preview", { state: { formData, templateId: id } });
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
    title: {
      color: "#c2296b",
      fontSize: "2rem",
      marginBottom: "1.5rem",
    },
    input: {
      width: "100%",
      maxWidth: "400px",
      backgroundColor: "#2a2a2a",
      border: "2px solid #c2296b",
      color: "#fff",
      padding: "0.75rem",
      borderRadius: "8px",
      marginBottom: "1rem",
      fontSize: "1rem",
    },
    textarea: {
      width: "100%",
      maxWidth: "400px",
      minHeight: "80px",
      backgroundColor: "#2a2a2a",
      border: "2px solid #c2296b",
      color: "#fff",
      padding: "0.75rem",
      borderRadius: "8px",
      marginBottom: "1rem",
      fontSize: "1rem",
      resize: "vertical"
    },
    button: {
      backgroundColor: "#c2296b",
      color: "#ffffff",
      border: "none",
      padding: "0.75rem 2rem",
      borderRadius: "10px",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease"
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Fill Resume Details (Template {id})</h2>
      <input
        style={styles.input}
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
      />
      <input
        style={styles.input}
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        style={styles.input}
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />
      <textarea
        style={styles.textarea}
        name="education"
        placeholder="Education"
        onChange={handleChange}
      />
      <textarea
        style={styles.textarea}
        name="experience"
        placeholder="Experience"
        onChange={handleChange}
      />
      <textarea
        style={styles.textarea}
        name="skills"
        placeholder="Skills"
        onChange={handleChange}
      />
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#a51e57")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#c2296b")}
        onClick={handlePreview}
      >   Preview
      </button>
    </div>
  );
}

export default TemplateForm;
