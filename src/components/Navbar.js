import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  // UPDATED: All links now point to internal routes
  const navLinks = [
    { to: "/", label: "Home", exact: true },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/how-to-ride", label: "How to Ride" }, // Changed to internal
    { to: "/sponsor", label: "Sponsor" },
    { to: "/leadership", label: "Leadership" },
    { to: "/now-hiring", label: "Now Hiring" },
  ];

  // UPDATED: Removed external URLs, pointing to internal pages
  const serviceLinks = [
    { to: "/how-to-ride", label: "View Routes" }, 
    { to: "/", label: "Our Future" }, // Points to the 'Something Bigger' section on Home
    { to: "/pricing", label: "Pricing" },
  ];

  return (
    <nav className="sticky top-0 bg-purple-700/95 backdrop-blur-md text-white px-6 py-4 shadow-lg z-[100]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl tracking-tight hover:opacity-90 transition">
          The MAC Bus
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover:bg-purple-600 rounded-lg transition focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-1 items-center">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive ? "bg-purple-800 shadow-inner" : "hover:bg-purple-600"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Desktop Dropdown */}
          <div className="relative group ml-2">
            <button className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium bg-purple-800 hover:bg-purple-900 transition">
              Services <ChevronDown size={16} />
            </button>
            
            <div className="absolute left-0 pt-2 w-48 hidden group-hover:block transition-all">
              <ul className="bg-white text-purple-900 rounded-lg shadow-xl py-2 border border-purple-100">
                {serviceLinks.map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      onClick={closeMenu}
                      className="block px-4 py-2 text-sm hover:bg-purple-50 hover:text-purple-700 transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full bg-purple-700 border-t border-purple-600 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              end={to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg transition ${
                  isActive ? "bg-purple-900 font-bold" : "hover:bg-purple-600"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Mobile Services Section */}
          <div className="mt-4 pt-4 border-t border-purple-500/50">
            <p className="px-4 text-xs font-uppercase tracking-widest text-purple-300 mb-2 font-bold">SERVICES</p>
            {serviceLinks.map(({ to, label }) => (
              <Link
                key={label}
                to={to}
                onClick={closeMenu}
                className="block py-3 px-4 rounded-lg text-purple-100 hover:bg-purple-600 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}