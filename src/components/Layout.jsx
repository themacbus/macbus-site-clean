import React from "react";
import Navbar from "./Navbar";  // ✅ This line imports the Navbar component
import Footer from "./Footer";  // ✅ Footer should also be in the same folder

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
