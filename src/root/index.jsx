import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import Dashboard from "../components/Dashboard";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;
