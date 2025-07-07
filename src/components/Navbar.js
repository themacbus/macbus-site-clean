import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "/", label: "Home", exact: true },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/how-to-ride", label: "How to Ride", tag: "Coming Soon" },
    { to: "/sponsor", label: "Sponsor" },
    { to: "/leadership", label: "Leadership" },
    { to: "/pricing", label: "Pricing", tag: "Coming Soon" },
    { to: "/now-hiring", label: "Now Hiring" },
  ];

  return (
    <nav className="bg-purple-700 text-white px-6 py-4 shadow-md z-50 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl">
          The MAC Bus
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ to, label, tag }) => (
            <div key={to} className="relative">
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "underline font-semibold"
                    : "hover:underline transition"
                }
              >
                {label}
              </NavLink>
              {tag && (
                <span className="absolute -top-3 -right-14 bg-yellow-200 text-purple-800 text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm animate-pulse">
                  🚧 {tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden mt-3 space-y-2 px-4 pb-4 bg-purple-600 rounded-b-xl shadow-lg z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navLinks.map(({ to, label, tag }) => (
          <div key={to} className="relative">
            <NavLink
              to={to}
              end={to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block py-2 px-4 rounded ${
                  isActive
                    ? "bg-purple-800 font-semibold"
                    : "hover:bg-purple-700 transition"
                }`
              }
            >
              {label}
            </NavLink>
            {tag && (
              <span className="absolute top-2 right-4 bg-yellow-200 text-purple-800 text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm animate-pulse">
                🚧 {tag}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
