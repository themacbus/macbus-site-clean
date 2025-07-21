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
    {
      external: true,
      href: "https://themacbus.com/pricing",
      label: "How to Ride",
    },
    { to: "/sponsor", label: "Sponsor" },
    { to: "/leadership", label: "Leadership" },
    {
      external: true,
      href: "https://themacbus.com/pricing",
      label: "Pricing",
    },
    { to: "/now-hiring", label: "Now Hiring" },
  ];

  const externalLinks = [
    {
      href: "https://themacbus.com/routes",
      label: "View Routes",
    },
    {
      href: "https://themacbus.com/invest",
      label: "Invest in Mobility",
    },
    {
      href: "https://themacbus.com/community",
      label: "Our Future",
    },
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
          {navLinks.map(({ to, href, label, external }) => (
            <div key={label} className="relative">
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition"
                >
                  {label}
                </a>
              ) : (
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
              )}
            </div>
          ))}

          {/* MAC Bus Services Dropdown (Desktop) */}
          <div className="relative group">
            <span className="cursor-pointer px-4 py-2 block hover:underline">
              MAC Bus Services ▾
            </span>
            <ul className="absolute left-0 mt-1 bg-white text-purple-800 rounded shadow-lg hidden group-hover:block z-50">
              {externalLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-purple-100"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden mt-3 space-y-2 px-4 pb-4 bg-purple-600 rounded-b-xl shadow-lg z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navLinks.map(({ to, href, label, external }) => (
          <div key={label} className="relative">
            {external ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block py-2 px-4 rounded hover:bg-purple-700 transition"
              >
                {label}
              </a>
            ) : (
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
            )}
          </div>
        ))}

        {/* MAC Bus Services Dropdown (Mobile) */}
        <div className="pt-4 border-t border-purple-400">
          <p className="text-sm font-semibold text-white mb-2">MAC Bus Services</p>
          {externalLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-4 rounded hover:bg-purple-700 transition"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
