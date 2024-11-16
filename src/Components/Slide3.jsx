import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import data from "./data/SlideData3.js";
import { Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const [selectedData, setSelectedData] = useState(data[0]);

  // Function to check if the current time is within the given range
  const isWithinTimeRange = (startHour, endHour) => {
    const currentHour = new Date().getHours();
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
    <div className="p-8 bg-gradient-to-r from-blue-50 to-teal-50 min-h-screen flex flex-col items-center space-y-8">
      <h1 className="text-4xl font-extrabold text-gray-700 mb-4">
        Engagement rate by App not open
      </h1>
      <div className="flex space-x-8 w-full justify-center">
        {/* Bar Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <BarChart
            width={500}
            height={300}
            data={data}
            onMouseOver={(e) =>
              e.activePayload && handleBarHover(e.activePayload[0].payload)
            }
          >
            <XAxis
              dataKey="tweet"
              tick={{
                fill: "#4A5568",
                fontSize: 12,
                style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
              }}
              tickFormatter={(value) =>
                value.length > 10 ? value.slice(0, 5) + "..." : value
              }
            />
            <YAxis tick={{ fill: "#4A5568", fontSize: 12 }} />
            <Tooltip
              cursor={{ fill: "#e0f2fe" }}
              contentStyle={{
                maxWidth: "30vw", // Limit tooltip width to 30% of viewport width
                whiteSpace: "normal",
                wordWrap: "break-word", // Ensure wrapping of the tooltip text
              }}
            />
            <Bar dataKey="engagement" fill="#38BDF8" radius={[10, 10, 0, 0]} />
          </BarChart>
        </div>
      </div>

      {/* Navigation Buttons */}
    </div>
  );
};

export default Dashboard;
