import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sidebar from "./component/layout/Sidebar";
import Header from "./component/layout/Header";
import Home from "./component/views";
import CompetitionManagement from "./component/views/CompetitionManagement";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/app.min.css";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/competition-management"
            element={<CompetitionManagement />}
          />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
