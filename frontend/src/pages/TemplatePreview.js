// TemplatePreview.js
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

    // Wait for styles and DOM to load before printing
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  if (!formData) return <p>No form data found.</p>;

  return (
    <div>
      <h1>Preview (Template {templateId})</h1>

      {/* This content will be printed */}
      <div
        ref={contentRef}
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          width: "600px",
          marginBottom: "20px"
        }}
      >
        <h2>{formData.fullName}</h2>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Education:</strong> {formData.education}</p>
        <p><strong>Experience:</strong> {formData.experience}</p>
        <p><strong>Skills:</strong> {formData.skills}</p>
      </div>

      <button onClick={handlePrint}>Download as PDF</button>
    </div>
  );
}

export default TemplatePreview;
