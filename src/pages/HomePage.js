import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout"; 
import macbusLogo from "../assets/macbus-logo.PNG";  // <-- add this import

export default function HomePage() {
  return (
    <Layout>
      <main className="min-h-screen bg-white text-gray-800">
        {/* 🔹 Sticky Community Survey Banner */}
        <section className="sticky top-0 z-50 bg-purple-700 text-white py-4 px-6 text-center shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold">🚌 Help Design Our Routes!</h2>
          <p className="text-sm md:text-base mt-1">
            Click below to take the 2-minute community transit survey.
          </p>
          <a
            href="https://tinyurl.com/The-MAC-Survey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-white text-purple-700 font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Take the Survey →
          </a>
        </section>

        {/* Hero Section */}
        <section className="text-center py-16 px-6 bg-gradient-to-r from-purple-600 to-purple-400 text-white">
          <img
            src={macbusLogo}
            alt="The MAC Bus Logo"
            className="mx-auto w-40 md:w-56 mb-8 rounded-xl shadow-lg border-4 border-white"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to The MAC Bus
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
            Equitable, accessible transportation serving our community — one ride at a time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-sm mx-auto">
            <Link
              to="/how-to-ride"
              className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              How to Ride
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-white hover:text-blue-600 transition"
            >
              About Us
            </Link>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">Who We Are</h2>

          <p className="mb-4 text-gray-700 text-lg leading-relaxed">
            <strong>Mississippi Access Connect Bus, Inc. (The MAC Bus)</strong> is a nonprofit transportation organization
            dedicated to closing mobility gaps across Jackson County, Mississippi. Founded by a local veteran, woman, and
            minority entrepreneur, The MAC Bus was created in response to a critical need for safe, reliable, and affordable
            transit services — especially for seniors, workers, students, and underserved families.
          </p>

          <p className="mb-4 text-gray-700 text-lg leading-relaxed">
            We’re more than a bus. We are a community-driven solution designed to improve quality of life, promote economic
            opportunity, and connect people to the resources that matter most — jobs, healthcare, education, and one another.
          </p>

          <ul className="list-disc list-inside mb-4 text-gray-700 text-lg leading-relaxed">
            <li>ADA-compliant and accessible to all</li>
            <li>Rooted in community partnerships</li>
            <li>Designed to serve rural and urban riders alike</li>
            <li>Powered by a dual-entity model (nonprofit & for-profit) to ensure long-term sustainability</li>
          </ul>

          <p className="mb-4 text-gray-700 text-lg leading-relaxed">
            Through innovative route planning, community feedback, and strategic collaboration with cities, sponsors, and local
            stakeholders, The MAC Bus is ready to roll — launching free public service in <strong>August 2025</strong>.
          </p>

          <p className="italic text-purple-700 font-medium text-center text-lg">
            Because everyone deserves a way to get where they’re going.
          </p>
        </section>

        {/* MAC Bus Expansion CTA */}
        <section className="bg-purple-100 text-center py-16 px-6 mt-12 rounded-lg shadow-md max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
            We’re Building More Than a Bus System
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Visit{" "}
            <a
              href="https://themacbus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 font-semibold underline hover:text-purple-900 transition"
            >
              The Transporter
            </a>{" "}
            to explore routes, invest in community growth, and see what’s next.
          </p>

          <a
            href="https://themacbus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-700 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-purple-800 transition"
          >
            Visit The Transporter
          </a>
        </section>

        {/* Call To Action Section */}
        <section className="py-16 px-6 text-center bg-purple-600 text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to ride?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg">
            Contact us to schedule transportation or learn more about our service.
          </p>
          <Link to="/book-ride">
            <button className="bg-white text-purple-600 font-semibold px-10 py-4 rounded-full shadow hover:bg-gray-100 transition">
              Book a Ride
            </button>
          </Link>
        </section>
      </main>
    </Layout>
  );
}
