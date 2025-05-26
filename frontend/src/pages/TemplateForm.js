// pages/TemplateForm.js


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

  return (
    <div>
      <h2>Fill Resume Details (Template {id})</h2>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <textarea name="education" placeholder="Education" onChange={handleChange} />
      <textarea name="experience" placeholder="Experience" onChange={handleChange} />
      <textarea name="skills" placeholder="Skills" onChange={handleChange} />

      <button onClick={handlePreview}>Preview</button>
    </div>
  );
}

export default TemplateForm;
