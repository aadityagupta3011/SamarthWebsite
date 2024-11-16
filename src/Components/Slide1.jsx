import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import data from "./data/SlideData1.js";
import { Link, useLocation } from "react-router-dom";

const SecondPage = () => {
  const [hoveredData, setHoveredData] = useState(data[0]);
  const location = useLocation();

  // Function to check if the current time is within the given range

  return (
    <div className="p-6 bg-gradient-to-r h-full w-full flex flex-col items-center space-y-8 flex-grow">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Engagement Rate by Tweet and Week Day
      </h1>

      <div className="flex flex-col lg:flex-row w-full max-w-5xl space-y-8 lg:space-y-0 lg:space-x-8 justify-center items-center">
        {/* Bar Chart */}
        <div className="bg-white shadow-lg rounded-xl p-4 w-full lg:w-2/3 max-w-lg">
          <BarChart
            width={320}
            height={400}
            data={data}
            onMouseOver={(e) => {
              if (e.activePayload) {
                setHoveredData(e.activePayload[0].payload);
              }
            }}
          >
            <XAxis
              dataKey="tweet"
              tickFormatter={(value) => {
                return value.length > 20 ? value.slice(0, 5) + "..." : value;
              }}
              tick={{ fontSize: 12 }}
            />
            <YAxis />
            <Tooltip
              contentStyle={{
                maxWidth: "60vw", // Limit tooltip width to 30% of viewport width
                whiteSpace: "normal",
                wordWrap: "break-word", // Make sure the text wraps within the box
              }}
            />
            <Bar dataKey="engagementRate" fill="#3182CE" />
          </BarChart>
        </div>
      </div>

      {/* Display Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg mt-8">
        <div className="p-6 bg-yellow-200 rounded-xl text-center shadow-lg transition duration-300 hover:scale-105">
          <h2 className="text-lg font-semibold text-gray-700">
            Likes on Tweet
          </h2>
          <p className="text-4xl font-bold text-blue-600">{hoveredData.likes}</p>
        </div>
        <div className="p-6 bg-yellow-300 rounded-xl text-center shadow-lg transition duration-300 hover:scale-105">
          <h2 className="text-lg font-semibold text-gray-700">Weekday</h2>
          <p className="text-4xl font-bold text-blue-600">{hoveredData.weekday}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
    </div>
  );
};

export default SecondPage;
