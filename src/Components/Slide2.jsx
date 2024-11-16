import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import data from "./data/SlideData2.js";
import { Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const [selectedData, setSelectedData] = useState(data[0]);
  const currentHour = new Date().getHours();

  // Function to check if the current time is within the given range
  const isWithinTimeRange = (startHour, endHour) => {
    return currentHour >= startHour && currentHour < endHour;
  };

  // Function to handle button click outside active hours
  const handleButtonClick = (startHour, endHour) => {
    if (!isWithinTimeRange(startHour, endHour)) {
      alert(`This button will be active from ${startHour}:00 to ${endHour}:00.`);
      return false;
    }
    return true;
  };

  const handleBarHover = (data) => {
    setSelectedData(data);
  };

  return (
    <div className="p-5  justify-center bg-gradient-to-r from-blue-50 to-teal-50 min-h-screen flex flex-col items-center space-y-8">
      {currentHour >= 15 && currentHour < 18 ? (
        <>
          <h1 className="text-2xl  text-center font-extrabold text-gray-700 ">
            Twitter Engagement Dashboard
          </h1>
          <div className="flex justify-center sm:w-full">
            {/* Bar Chart */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="w-[90vw] sm:w-[500px]">
                <BarChart
                  width={Math.min(window.innerWidth * 0.9, 500)} // Responsive width
                  height={250}
                  data={data}
                  onMouseOver={(e) =>
                    e.activePayload &&
                    handleBarHover(e.activePayload[0].payload)
                  }>
                  <XAxis
                    dataKey="tweet"
                    tick={{
                      fill: "#4A5568",
                      fontSize: 12,
                      style: {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      },
                    }}
                    tickFormatter={(value) =>
                      value.length > 10 ? value.slice(0, 5) + "..." : value
                    }
                  />
                  <YAxis tick={{ fill: "#4A5568", fontSize: 12 }} />
                  <Tooltip
                    cursor={{ fill: "#e0f2fe" }}
                    contentStyle={{
                      maxWidth: "60vw",
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                    }}
                  />
                  <Bar
                    dataKey="engagement"
                    fill="#38BDF8"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </div>
            </div>
          </div>

          {/* Display Weekday and Impressions */}

          <div className="flex flex-col gap-4 p-4 rounded text-center w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 h-24 sm:h-auto bg-teal-200 rounded text-center shadow-md">
                <h2 className="text-xl font-semibold">WeekDay</h2>
                <p className="text-sm sm:text-2xl font-medium text-blue-600 ">
                  {selectedData.day}
                </p>
              </div>
              <div className="p-3 h-24 sm:h-auto bg-teal-200 rounded text-center shadow-md">
                <h2 className="text-xl font-semibold">Impressions on Tweet</h2>
                <p className="text-sm sm:text-2xl font-medium text-blue-600 truncate">
                  {selectedData.impressions}
                </p>
              </div>
              <div className="p-1 flex flex-col justify-center bg-teal-200 rounded text-center shadow-md">
                <h2 className="text-xl font-semibold">User ID</h2>
                <p className="text-sm sm:text-xl font-medium text-blue-600 truncate">
                  {selectedData.userId}
                </p>
              </div>
              <div className="p-6 bg-teal-200 rounded text-center shadow-md">
                <h2 className="text-xl font-semibold">Date</h2>
                <p className="text-lg sm:text-2xl font-medium text-blue-600 truncate">
                  {selectedData.Date}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-4xl w-[80vw] bg-gray-300 p-5 ">
          This page will be available only between 3:00 PM and 6:00 PM. Please
          plan your visit accordingly. We appreciate your cooperation!
        </div>
      )}

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

      {/* Navigation Buttons */}
    </div>
  );
};

export default Dashboard;
