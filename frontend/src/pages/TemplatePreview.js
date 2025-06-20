
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


function TemplatePreview() {
  const location = useLocation();
  const { formData, templateId } = location.state || {};
  const contentRef = useRef();

  const handleDownloadPDF = async () => {
    const input = contentRef.current;

const images = input.querySelectorAll("img");
  const loadPromises = Array.from(images).map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(resolve => {
      img.onload = img.onerror = resolve;
    });
  });

  await Promise.all(loadPromises);
  
    const canvas = await html2canvas(input, { scale: 2 });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${formData?.fullName || "resume"}.pdf`);
  };

  if (!formData) return <p>No form data found.</p>;
const imageStyle = {
  width: "120px",
  height: "120px",
  objectFit: "cover",
  borderRadius: "50%",
  border: "3px solid #c2296b",
  marginBottom: "1rem",
};

  const styles = {
    page: {
      backgroundColor: "#0d0d0d",
      minHeight: "100vh",
      padding: "2rem",
      color: "#cccccc",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      color: "#c2296b",
      fontSize: "2.5rem",
      marginBottom: "2rem",
    },
    box: {
      backgroundColor: "#1a1a1a",
      border: "2px solid #5b5b5b",
      borderRadius: "12px",
      padding: "2rem",
      marginBottom: "2rem",
      width: "100%",
      maxWidth: "800px",
    },
    button: {
      backgroundColor: "#c2296b",
      color: "#fff",
      padding: "0.75rem 2rem",
      border: "none",
      borderRadius: "10px",
      fontWeight: "bold",
      fontSize: "1rem",
      cursor: "pointer",
    },
  };

  const TemplateOne = () => (
    <div style={{ display: "flex", gap: "2rem" }}>
    <div style={{ flex: 1 }}>
      {formData.image && <img src={formData.image} alt="Profile" style={imageStyle} />}
        <h2>{formData.fullName}</h2>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p className="section-title">Skills</p>
        <p>{formData.skills}</p>
      </div>
      <div style={{ flex: 2 }}>
        <p className="section-title">Education</p>
        <p>{formData.education}</p>
        <p className="section-title">Experience</p>
        <p>{formData.experience}</p>
      </div>
    </div>
  );

  const TemplateTwo = () => (
   <div style={{ textAlign: "center" }}>
    {formData.image && <img src={formData.image} alt="Profile" style={imageStyle} />}
      <h2>{formData.fullName}</h2>
      <p>{formData.email} | {formData.phone}</p>
      <hr style={{ borderColor: "#5b5b5b", margin: "1rem 0" }} />
      <p className="section-title">Education</p>
      <p>{formData.education}</p>
      <p className="section-title">Experience</p>
      <p>{formData.experience}</p>
      <p className="section-title">Skills</p>
      <p>{formData.skills}</p>
    </div>
  );

  const TemplateThree = () => (
   <div>
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      {formData.image && <img src={formData.image} alt="Profile" style={imageStyle} />}
      <div>
        <h2 style={{ marginBottom: "0.5rem" }}>{formData.fullName}</h2>
        <p>{formData.email} | {formData.phone}</p>
      </div>
    </div>

      <div style={{ marginTop: "1.5rem" }}>
        <p className="section-title">Education</p>
        <p>{formData.education}</p>
        <p className="section-title">Experience</p>
        <p>{formData.experience}</p>
        <p className="section-title">Skills</p>
        <p>{formData.skills}</p>
      </div>
    </div>
  );

  const TemplateFour = () => (
    <div>
    <div style={{
      backgroundColor: "#c2296b",
      color: "#fff",
      padding: "1rem 2rem",
      borderRadius: "8px 8px 0 0",
      marginBottom: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "1.5rem"
    }}>
      {formData.image && <img src={formData.image} alt="Profile" style={imageStyle} />}
      <div>
        <h2 style={{ margin: 0 }}>{formData.fullName}</h2>
        <p>{formData.email} | {formData.phone}</p>
      </div>      
      </div>

      <div>
        <p className="section-title">Education</p>
        <p>{formData.education}</p>
        <p className="section-title">Experience</p>
        <p>{formData.experience}</p>
        <p className="section-title">Skills</p>
        <p>{formData.skills}</p>
      </div>
    </div>
  );

  const TemplateFive = () => (
    <div>
     {formData.image && (
      <div style={{ textAlign: "center" }}>
        <img src={formData.image} alt="Profile" style={imageStyle} />
      </div>
    )}
      <h2 style={{ borderBottom: "2px solid #5b5b5b", paddingBottom: "0.5rem" }}>{formData.fullName}</h2>
      <p style={{ margin: "0.5rem 0" }}>{formData.email} | {formData.phone}</p>
      <div style={{ marginTop: "1.5rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <p className="section-title">🎓 Education</p>
          <p>{formData.education}</p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <p className="section-title">💼 Experience</p>
          <p>{formData.experience}</p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <p className="section-title">🛠 Skills</p>
          <p>{formData.skills}</p>
        </div>
      </div>
    </div>
  );

  const renderTemplate = () => {
    {formData.image && (
  <div style={{ marginBottom: "1rem" }}>
    <img
      src={formData.image}
      alt="Profile"
      style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%" }}
    />
  </div>
)}

    switch (templateId) {
      case "1": return <TemplateOne />;
      case "2": return <TemplateTwo />;
      case "3": return <TemplateThree />;
      case "4": return <TemplateFour />;
      case "5": return <TemplateFive />;
      default: return <TemplateOne />;
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Preview (Template {templateId})</h1>
      <div ref={contentRef} style={styles.box}>
        {renderTemplate()}
      </div>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#a51e57")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#c2296b")}
        onClick={handleDownloadPDF}
      >
        Download as PDF
      </button>
    </div>
  );
}

export default TemplatePreview;
