import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Heart } from "lucide-react"; // Matching your icon style

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-950 text-purple-100 py-12 mt-16 border-t-4 border-purple-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 text-left">
          
          {/* Column 1: Mission/About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">The MAC Bus</h3>
            <p className="text-sm leading-relaxed text-purple-200">
              Mississippi Access Connect Bus, Inc. is a nonprofit dedicated to 
              closing mobility gaps across Jackson County. We connect people 
              to jobs, healthcare, and education.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About Our Mission</Link></li>
              <li><Link to="/programs" className="hover:text-white transition">Community Programs</Link></li>
              <li><Link to="/now-hiring" className="hover:text-white transition">Careers</Link></li>
              <li><a href="https://themacbus.com/shuttle-pricing" target="_blank" rel="noreferrer" className="hover:text-white transition">Route Pricing</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect With Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-purple-400" />
                <a href="mailto:info@themacbus.org" className="hover:text-white transition">info@themacbus.org</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-purple-400" />
                <span>Jackson County, MS</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-800 text-center text-xs text-purple-300">
          <p>&copy; {currentYear} The MAC Bus. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Designed with <Heart size={12} className="text-red-400 fill-red-400" /> by 
            <span className="text-white font-medium ml-1">Henry McFarlin</span>
          </p>
        </div>
      </div>
    </footer>
  );
}