import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./authService";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(form); 
      if (response.token) {
        localStorage.setItem("token", response.token); 
        alert("Login successful");
        navigate("/"); 
      } else {
        alert("Invalid login");
      }
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2 style={{ color: "#c2296b" }}>Login</h2>
      <form onSubmit={handleLogin} style={{ display: "inline-block", textAlign: "left" }}>
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
        <button type="submit" style={buttonStyle}>Login</button>
        <p>Don't have an account? <a href="/register">Register</a></p>
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

export default Login;
