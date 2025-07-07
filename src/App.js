import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Programs from "./pages/Programs";
import HowToRide from "./pages/HowToRide";
import Sponsor from "./pages/Sponsor";
import Pricing from "./pages/Pricing";
import NowHiring from "./pages/NowHiring";
import BookRide from "./pages/BookRide";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/how-to-ride" element={<HowToRide />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/now-hiring" element={<NowHiring />} />
        <Route path="/book-ride" element={<BookRide />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
