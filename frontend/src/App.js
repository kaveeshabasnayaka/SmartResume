// App.js
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import TemplateSelectionPage from "./pages/TemplateSelectionPage";
import TemplateForm from "./pages/TemplateForm";
import TemplatePreview from "./pages/TemplatePreview";
import TestPrintPage from './pages/TestPrintPage';

function App() {
  return (
     <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/templates" element={<TemplateSelectionPage />} />
        <Route path="/template/:id" element={<TemplateForm />} />
        <Route path="/preview" element={<TemplatePreview />} />
        <Route path="/test-print" element={<TestPrintPage />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;

// import logo from './logo.svg';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
