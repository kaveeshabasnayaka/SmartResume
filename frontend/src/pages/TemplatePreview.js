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
            h2 { margin-bottom: 10px; }
            p { margin: 5px 0; }
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
    previewBox: {
      backgroundColor: "#1a1a1a",
      padding: "2rem",
      border: "2px solid #5b5b5b",
      borderRadius: "12px",
      width: "100%",
      maxWidth: "700px",
      marginBottom: "2rem",
    },
    sectionTitle: {
      color: "#c2296b",
      marginTop: "1rem",
      marginBottom: "0.5rem",
    },
    button: {
      backgroundColor: "#c2296b",
      color: "#ffffff",
      padding: "0.75rem 2rem",
      border: "none",
      borderRadius: "10px",
      fontWeight: "bold",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Preview (Template {templateId})</h1>


      <div
        ref={contentRef}
        style={styles.previewBox}
      >
        <h2>{formData.fullName}</h2>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <h3 style={styles.sectionTitle}>Education</h3>
        <p>{formData.education}</p>
        <h3 style={styles.sectionTitle}>Experience</h3>
        <p>{formData.experience}</p>
        <h3 style={styles.sectionTitle}>Skills</h3>
        <p>{formData.skills}</p>
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
