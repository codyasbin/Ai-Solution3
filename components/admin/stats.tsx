"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // For Chart.js

ChartJS.register(ArcElement, Tooltip, Legend); // Register chart components

// Refined Type Definitions
interface CountryStat {
  label: string;
  value: number;
}

interface StatsData {
  totalContacts: number;
  countryStats: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
  };
}

interface StatsProps {
  stats: StatsData | null; // Allow stats to be null initially
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Dashboard Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Total Contacts */}
        <div className="bg-cyan-700 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Total Contacts</h3>
          <div className="flex justify-center items-center h-40">
            <p className="text-9xl font-bold">
              {stats ? stats.totalContacts : 0}
            </p>
          </div>
        </div>

        {/* Country Stats Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Contacts by Country</h3>
          {stats?.countryStats && stats.countryStats.labels.length > 0 ? (
            <Pie
              data={stats.countryStats}
              options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: (tooltipItem) => {
                        const dataset =
                          tooltipItem.dataset.data[tooltipItem.dataIndex];
                        return ` ${tooltipItem.label}: ${dataset}`;
                      },
                    },
                  },
                },
              }}
            />
          ) : (
            <p className="text-center text-gray-600 mt-4">
              No data available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Example Usage
const randomColors = (count: number) =>
  Array.from({ length: count }, () =>
    `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 0.6)`
  );

// Dummy Data Example (to test the component)
const statsExample = {
  totalContacts: 120,
  countryStats: {
    labels: ["USA", "Canada", "Germany", "India"],
    datasets: [
      {
        label: "Country Stats",
        data: [40, 30, 20, 30],
        backgroundColor: randomColors(4),
        borderColor: ["rgba(255, 255, 255, 0.5)"],
        borderWidth: 1,
      },
    ],
  },
};

// Rendering the Stats Component with Dummy Data
// You can replace `statsExample` with dynamic data from an API
<Stats stats={statsExample} />;
export default Stats;