import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import data from "./data/SlideData3.js";
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
      alert(
        `This button will be active from ${startHour}:00 to ${endHour}:00.`
      );
      return false;
    }
    return true;
  };

  const handleBarHover = (data) => {
    setSelectedData(data);
  };

  return (
    <div className="p-8  bg-gradient-to-r from-blue-50 to-teal-50 min-h-screen flex flex-col items-center space-y-8">
      {currentHour >= 12 && currentHour < 18 ? (
        <>
          <h1 className="text-4xl flex text-center justify-center items-center font-extrabold text-gray-700 mb-4">
            Engagement rate by App not open
          </h1>
          <div className="flex space-x-8 w-[80vw] justify-center">
            {/* Bar Chart */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <BarChart
                width={350}
                height={400}
                data={data}
                onMouseOver={(e) =>
                  e.activePayload && handleBarHover(e.activePayload[0].payload)
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
                    maxWidth: "60vw", // Limit tooltip width to 30% of viewport width
                    whiteSpace: "normal",
                    wordWrap: "break-word", // Ensure wrapping of the tooltip text
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
        </>
      ) : (
        <div className="text-4xl w-[80vw] bg-gray-300 p-5 ">
          This page will be available only between 12:00 PM and 6:00 PM. Please
          plan your visit accordingly. We appreciate your cooperation!
        </div>
      )}

      {/* Navigation Buttons */}
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
    </div>
  );
};

export default Dashboard;
