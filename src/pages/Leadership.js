import React from "react";

export default function Leadership() {
  const team = [
    {
      name: "Tawanna McFarlin",
      role: "Executive Director",
      bio: "Tawanna brings over 25 years of public service experience and leads the MAC Bus with a mission of equity and accessibility.",
    },
    {
      name: "John Smith",
      role: "Operations Manager",
      bio: "John coordinates daily logistics, ensuring routes are efficient and riders are supported across every stop.",
    },
    {
      name: "Latoya Rivers",
      role: "Community Outreach",
      bio: "Latoya connects with the community and builds partnerships to support transportation accessibility.",
    },
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Leadership Team</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 border border-gray-200"
          >
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-blue-700 font-medium">{member.role}</p>
            <p className="mt-2 text-sm text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
