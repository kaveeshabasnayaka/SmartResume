// pages/TemplateSelectionPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

function TemplateSelectionPage() {
  const navigate = useNavigate();

  const handleTemplateSelect = (id) => {
    navigate(`/template/${id}`);
  };

  return (
    <div>
      <h2>Select a Template</h2>
      <button onClick={() => handleTemplateSelect(1)}>Template 1</button>
      <button onClick={() => handleTemplateSelect(2)}>Template 2</button>
      <button onClick={() => handleTemplateSelect(3)}>Template 3</button>
    </div>
  );
}

export default TemplateSelectionPage;
