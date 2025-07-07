import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

// -- Commented out until the page is live again --
// const steps = [ ... ];
// const containerVariants = { ... };

export default function HowToRide() {
  return (
    <Layout>
      <main className="min-h-screen bg-white text-center py-24 px-6">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">🚧 How to Ride</h1>
        <p className="text-xl text-gray-700">
          This page is currently under construction. Check back soon for updates!
        </p>
        <div className="mt-10 animate-bounce text-6xl">🚌</div>
      </main>
    </Layout>
  );
}
