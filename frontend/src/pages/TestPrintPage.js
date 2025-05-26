// TestPrintPage.js
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function TestPrintPage() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "test_resume",
  });

  return (
    <div>
      <h2>Print Test</h2>

      {/* This must be a DOM element, not a component */}
      <div
        ref={componentRef}
        style={{
          padding: "20px",
          border: "1px solid black",
          marginBottom: "20px",
        }}
      >
        <h3>John Doe</h3>
        <p>Email: john@example.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Education: B.Sc. in Computer Science</p>
        <p>Experience: 3 years at ABC Corp</p>
        <p>Skills: JavaScript, React, Node.js</p>
      </div>

      <button onClick={handlePrint}>Download as PDF</button>
    </div>
  );
}

export default TestPrintPage;
