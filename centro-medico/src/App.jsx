import "../src/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CV from "../src/pages/CV";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CV />} />
        </Routes>
      </Router>
    </div>
  )
}