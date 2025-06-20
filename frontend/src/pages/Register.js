import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "./authService";

function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
  e.preventDefault();
  try {
    const data = await register(form);
    if (typeof data === "string" && data.includes("User registered")) {
      alert("Registration successful. Please login.");
      navigate("/login");
    } else {
      alert("Registration failed: " + data);
    }
  } catch (err) {
    alert("Registration failed: " + err.message);
  }
};


  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>
      <form onSubmit={handleRegister} style={{ display: "inline-block", textAlign: "left" }}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={inputStyle}
        />
        <center><button type="submit" style={styles.button}>Register</button></center>
        <p style={{ color: "#FFFFFF" }}>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "300px",
  marginBottom: "1rem",
  padding: "0.75rem",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
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
    alignItems:"center",
    backgroundColor: "#c2296b",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "1rem",
  },
}
export default Register;
