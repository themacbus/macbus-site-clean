import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Plane, Bus, MapPin } from "lucide-react";

export default function Pricing() {
  return (
    <Layout>
      <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-6 py-20">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
            Affordable Rates for Our Community
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Transparent pricing designed to keep Jackson County moving.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Fixed Route Pricing */}
            <div className="border-2 border-purple-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition bg-purple-50">
              <Bus className="text-purple-600 mb-4" size={32} />
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Fixed Routes</h2>
              <ul className="text-left space-y-4 mb-8 text-gray-700">
                <li className="flex justify-between font-semibold border-b pb-2">
                  <span>Single Ride</span> <span>$10</span>
                </li>
                <li className="flex justify-between font-semibold border-b pb-2">
                  <span>Weekly Pass</span> <span>$35</span>
                </li>
                <li className="text-sm text-gray-500 italic">Up to 10 rides per week</li>
                <li className="flex justify-between font-semibold border-b pb-2">
                  <span>Monthly Pass</span> <span>$225</span>
                </li>
              </ul>
              {/* FIXED: Internal Link */}
              <Link to="/book-ride" className="block text-center w-full bg-purple-700 text-white py-3 rounded-xl font-bold hover:bg-purple-800 transition">
                Book a Ride
              </Link>
            </div>

            {/* On-Demand Pricing */}
            <div className="border-2 border-purple-600 p-8 rounded-2xl shadow-lg relative bg-white transform md:scale-105">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                New Service
              </span>
              <MapPin className="text-purple-600 mb-4" size={32} />
              <h2 className="text-2xl font-bold text-purple-800 mb-4">On-Demand</h2>
              <ul className="text-left space-y-4 mb-8 text-gray-700">
                <li className="flex justify-between font-semibold border-b pb-2">
                  <span>Daily Rate</span> <span>$25</span>
                </li>
                <li className="flex justify-between font-semibold border-b pb-2 opacity-60">
                  <span>Weekly Option</span> <span>TBD</span>
                </li>
                <li className="flex justify-between font-semibold border-b pb-2 opacity-60">
                  <span>Monthly Option</span> <span>TBD</span>
                </li>
                <li className="text-sm text-gray-500 italic">Weekly/Monthly pricing coming soon.</li>
              </ul>
              {/* FIXED: Internal Link */}
              <Link to="/contact" className="block text-center w-full bg-purple-700 text-white py-3 rounded-xl font-bold hover:bg-purple-800 transition">
                Inquire for Rates
              </Link>
            </div>

            {/* Airport Rates */}
            <div className="border-2 border-purple-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition bg-purple-50">
              <Plane className="text-purple-600 mb-4" size={32} />
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Airports</h2>
              <ul className="text-left space-y-4 mb-8 text-gray-700">
                <li className="flex flex-col border-b pb-2">
                  <span className="text-sm text-gray-500">Mobile (MOB)</span>
                  <span className="text-xl font-bold">$90 Flat Rate</span>
                </li>
                <li className="flex flex-col border-b pb-2">
                  <span className="text-sm text-gray-500">Gulfport (GPT)</span>
                  <span className="text-xl font-bold">$165 Flat Rate</span>
                </li>
                <p className="text-xs text-gray-500 italic mt-4">
                  *New Orleans and long-distance trips subject to higher rates.
                </p>
              </ul>
              {/* FIXED: Internal Link */}
              <Link to="/contact" className="block text-center w-full border-2 border-purple-700 text-purple-700 py-3 rounded-xl font-bold hover:bg-purple-50 transition">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Nonprofit Support Section */}
          <div className="mt-12 p-10 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Support Our Connectivity Mission</h3>
            <p className="text-gray-600 mb-6 max-w-xl">
              As a 501(c)3 nonprofit, your fares and donations directly support workforce mobility in Moss Point.
            </p>
            {/* FIXED: Internal Link to Sponsor/Donate page */}
            <Link to="/sponsor" className="inline-block bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition shadow-lg">
              Donate to MAC Bus
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}