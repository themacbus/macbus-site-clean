import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-100 py-10 px-4 text-center">
        <img
          src="/macbus-logo.jpg"
          alt="MAC Bus Logo"
          className="mx-auto mb-6 w-40 h-40 object-contain rounded-xl shadow-lg"
        />
        <h1 className="text-3xl font-bold mb-2">Mobile Access for Communities</h1>
        <p className="text-lg mb-6">Providing safe, reliable transportation for families and communities.</p>
        <div className="flex justify-center gap-4">
          <Link to="/about">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
              Learn More
            </button>
          </Link>
          <Link to="/faq">
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-xl hover:bg-gray-300 transition">
              FAQ
            </button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p>
          The MAC Bus exists to bridge transportation gaps in our community, especially for families of incarcerated individuals. 
          We aim to reconnect loved ones, reduce isolation, and provide equitable access to mobility.
        </p>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="p-4 bg-white rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2">1. Schedule</h3>
              <p>Request a ride through our form or hotline.</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2">2. Ride</h3>
              <p>Our licensed drivers pick you up and drop you off safely.</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2">3. Return</h3>
              <p>We'll ensure you get back home reliably.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to ride?</h2>
        <p className="mb-6">Contact us to schedule transportation or learn more about our service.</p>
        <Link to="/contact">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
            Book a Ride
          </button>
        </Link>
      </section>
    </main>
  );
}
