import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* The 'flex-grow' ensures the footer stays at the bottom even on short pages.
        The 'pt-0' (or 'pt-16' if your navbar overlaps content) handles the spacing.
      */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}