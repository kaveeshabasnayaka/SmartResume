
const API_URL = 'http://localhost:8080/api/auth';

export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      const errorText = await response.text(); 
      console.error("Register error from backend:", errorText);
      throw new Error(errorText || "Failed to register");
    }

    const text = await response.text(); 
    console.log("Register response:", text);
    return text;
  } catch (err) {
    console.error("Register exception:", err.message);
    throw err;
  }
};



export const login = async (userData) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Login failed");
  }

  return await response.json(); 
};


export function logout() {
  localStorage.removeItem('token');
}

export function authHeader() {
  const token = localStorage.getItem('token');
  return token ? { 'Authorization': 'Bearer ' + token } : {};
}


