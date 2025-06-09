import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

function TemplatePreview() {
  const location = useLocation();
  const { formData, templateId } = location.state || {};
  const contentRef = useRef();

  const handlePrint = () => {
    const content = contentRef.current.innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write(`
      <html>
        <head>
          <title>${formData?.fullName || 'Resume'}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h2 { color: #c2296b; margin-bottom: 10px; }
            p { margin: 5px 0; }
            .section-title { font-weight: bold; color: #5b5b5b; margin-top: 15px; }
          </style>
        </head>
        <body>
          ${content}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  if (!formData) return <p>No form data found.</p>;

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
      <h2 style={{ marginBottom: "0.5rem" }}>{formData.fullName}</h2>
      <p>{formData.email} | {formData.phone}</p>
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
        marginBottom: "1.5rem"
      }}>
        <h2 style={{ margin: 0 }}>{formData.fullName}</h2>
        <p>{formData.email} | {formData.phone}</p>
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
        onClick={handlePrint}
      >
        Download as PDF
      </button>
    </div>
  );
}

export default TemplatePreview;
