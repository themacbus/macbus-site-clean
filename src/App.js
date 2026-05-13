import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Import your pages
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
import ApplyNow from "./pages/ApplyNow";

// --- 1. UX FIX: Scroll to Top on Route Change ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* --- 2. SECURITY & SEO SHIELD --- */}
        <Helmet>
          <title>MAC Bus | Connecting People to Opportunity</title>
          <meta name="description" content="Reliable workforce and medical transit for Jackson County and Moss Point." />
          {/* Security Header: Prevents content from being embedded in malicious sites */}
          <meta http-equiv="X-Frame-Options" content="DENY" />
        </Helmet>

        <ScrollToTop />

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
          <Route path="/apply" element={<ApplyNow />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;