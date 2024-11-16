import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "../Components/Slide2.jsx";
import SecondPage from "../Components/Slide1.jsx";
import EngagementDashboard from "../Components/Slide3.jsx";

const AppRouter = () => {
  // const isWithinTimeRange = (startHour, endHour) => {
  //   const currentHour = new Date().getHours();
  //   return currentHour >= startHour && currentHour < endHour;
  // };

  // // Function to handle button click outside active hours
  // const handleButtonClick = (startHour, endHour) => {
  //   if (!isWithinTimeRange(startHour, endHour)) {
  //     alert(
  //       `This button will be active from ${startHour}:00 to ${endHour}:00.`
  //     );
  //     return false;
  //   }
  //   return true;
  // };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SecondPage />} />
        <Route path="/secondpage" element={<Dashboard />} />
        <Route path="/engagementdashboard" element={<EngagementDashboard />} />
      </Routes>
      <div className="flex space-x-4 mt-8 justify-center">
        <Link
          to="/"
          onClick={(e) => {
            if (!handleButtonClick(13, 16)) e.preventDefault();
          }}>
          <button
            className={`px-4 py-2 rounded-md transition-colors text-white hover:bg-blue-900 ${
              location.pathname === "/" ? "bg-purple-900" : "bg-blue-600"
            }`}>
            Task 1
          </button>
        </Link>
        <Link
          to="/secondpage"
          onClick={(e) => {
            if (!handleButtonClick(15, 18)) e.preventDefault();
          }}>
          <button
            className={`px-4 py-2 rounded-md transition-colors text-white hover:bg-blue-900 ${
              location.pathname === "/secondpage"
                ? "bg-purple-900"
                : "bg-blue-600"
            }`}>
            Task 2
          </button>
        </Link>
        <Link
          to="/engagementdashboard"
          onClick={(e) => {
            if (!handleButtonClick(12, 18)) e.preventDefault();
          }}>
          <button
            className={`px-4 py-2 rounded-md transition-colors text-white hover:bg-blue-900 ${
              location.pathname === "/engagementdashboard"
                ? "bg-purple-900"
                : "bg-blue-600"
            }`}>
            Task 3
          </button>
        </Link>
      </div>
    </Router>
  );
};

export default AppRouter;
