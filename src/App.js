import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import HowToRide from "./pages/HowToRide";
import Leadership from "./pages/Leadership";
import NowHiring from "./pages/NowHiring";
import Pricing from "./pages/Pricing";
import Programs from "./pages/Programs";
import Support from "./pages/Support";

function Navbar() {
  const logoUrl = process.env.PUBLIC_URL + "/macbus-logo.jpg";

  return (
    <nav style={{ backgroundColor: "#2563eb", padding: "10px 20px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
      <img src={logoUrl} alt="MAC Bus Logo" style={{ width: 40, borderRadius: "50%" }} />
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
      <Link to="/faq" style={{ color: "white", textDecoration: "none" }}>FAQ</Link>
      <Link to="/how-to-ride" style={{ color: "white", textDecoration: "none" }}>How To Ride</Link>
      <Link to="/leadership" style={{ color: "white", textDecoration: "none" }}>Leadership</Link>
      <Link to="/now-hiring" style={{ color: "white", textDecoration: "none" }}>Now Hiring</Link>
      <Link to="/pricing" style={{ color: "white", textDecoration: "none" }}>Pricing</Link>
      <Link to="/programs" style={{ color: "white", textDecoration: "none" }}>Programs</Link>
      <Link to="/support" style={{ color: "white", textDecoration: "none" }}>Support</Link>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/how-to-ride" element={<HowToRide />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/now-hiring" element={<NowHiring />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}
