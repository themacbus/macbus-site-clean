// src/pages/Contact.js

import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">Contact Us</h1>
        
        <p className="mb-8 text-center text-lg text-gray-600">
          Have a question or want to schedule a ride? We’d love to hear from you.
        </p>

        {/* Contact Info Section */}
        <div className="mb-10 text-center">
          <p className="text-lg font-semibold text-gray-800">Tawanna McFarlin</p>
          <p className="text-gray-700">Executive Director</p>
          <p className="text-gray-700">📞 228-424-1394</p>
          <p className="text-purple-600">
            <a href="mailto:tmcfarlin@themacbus.org" className="hover:underline">
              tmcfarlin@themacbus.org
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
