import React from "react";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} The MAC Bus. All rights reserved.</p>
        <p className="mt-2">Designed with ❤️ by Henry McFarlin</p>
      </div>
    </footer>
  );
}
