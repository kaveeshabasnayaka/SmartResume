import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/templates");
  };

  return (
    <div>
      <h1>Welcome to Resume Builder</h1>
      <button onClick={handleCreateClick}>Create</button>
    </div>
  );
}

export default WelcomePage;
