import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl">
          The MAC Bus
        </Link>
        <div className="space-x-6 hidden md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/programs"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Programs
          </NavLink>
          <NavLink
            to="/how-to-ride"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            How to Ride
          </NavLink>
          <NavLink
            to="/sponsor"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Sponsor
          </NavLink>
          <NavLink
            to="/leadership"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Leadership
          </NavLink>

          {/* Pricing with Coming Soon tag */}
          <div className="relative inline-block">
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Pricing
            </NavLink>
            <span className="absolute -top-3 -right-14 bg-yellow-200 text-purple-800 text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm animate-pulse">
              🚧 Coming Soon
            </span>
          </div>

          <NavLink
            to="/now-hiring"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Now Hiring
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
