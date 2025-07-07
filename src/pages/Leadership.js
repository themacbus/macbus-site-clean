import React from "react";
import Layout from "../components/Layout";

const team = {
  "Tawanna McFarlin":
    "Executive Director of The MAC Bus, Inc. Tawanna brings over 25 years of public service experience and leads the organization with a vision for equitable, accessible transportation.",
  "April Gainer":
    "President of the Board. April leads strategic board governance and brings strong community advocacy to the organization.",
  "Commancia Davison":
    "Treasurer of the Board. Commancia oversees the financial strategy and reporting, ensuring transparency and stewardship.",
  "Brandy Smith":
    "Secretary of the Board. Brandy brings administrative excellence and community engagement insight.",
  "Natasha Rankin":
    "Board Member focused on outreach and community development partnerships.",
};

// Helper to get initials from a name
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

// Array of background gradient classes for variety
const bgGradients = [
  "from-purple-400 via-pink-500 to-red-500",
  "from-indigo-400 via-purple-500 to-pink-500",
  "from-green-400 via-teal-500 to-cyan-500",
  "from-yellow-400 via-orange-500 to-red-500",
  "from-pink-400 via-red-500 to-yellow-500",
];

export default function Leadership() {
  return (
    <Layout>
      <main className="min-h-screen bg-white py-16 px-6 text-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-purple-700 mb-2 relative inline-block">
            Board Of Directors
            <span className="block w-20 h-1 bg-purple-400 rounded mt-2 mx-auto"></span>
          </h1>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Meet the passionate individuals guiding The MAC Bus toward a more connected and equitable future.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {Object.entries(team).map(([name, description], i) => (
              <div
                key={name}
                className="bg-white rounded-3xl shadow-lg p-8 flex space-x-6 items-start
                border border-purple-100
                hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
              >
                {/* Circle with initials */}
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${bgGradients[i % bgGradients.length]} 
                text-white text-2xl font-bold flex items-center justify-center`}
                >
                  {getInitials(name)}
                </div>

                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-2">{name}</h3>
                  <p className="text-gray-700 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
