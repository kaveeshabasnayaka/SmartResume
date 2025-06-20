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
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
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
       <center><button type="submit" style={styles.button}>Login</button></center> 
        <p style={{ color: "#FFFFFF" }}>Don't have an account? <a href="/register">Register</a></p>
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
export default Login;
