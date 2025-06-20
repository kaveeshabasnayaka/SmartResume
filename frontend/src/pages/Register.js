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
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2 style={{ color: "#c2296b" }}>Register</h2>
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
        <button type="submit" style={buttonStyle}>Register</button>
        <p>Already have an account? <a href="/login">Login</a></p>
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

const buttonStyle = {
  backgroundColor: "#c2296b",
  color: "#fff",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginBottom: "1rem",
};

export default Register;
