import React from "react";
import { Link } from "react-router-dom";
import { ClipboardCheck, Bus, Handshake, Landmark } from "lucide-react";
import Layout from "../components/Layout"; 
import macbusLogo from "../assets/macbus-logo.PNG";

export default function HomePage() {
  return (
    <Layout>
      <main className="min-h-screen bg-slate-50 text-gray-800">
        
        {/* 🔹 Community Survey Banner */}
        <section className="bg-purple-900 text-white py-3 px-6 text-center shadow-inner">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
            <p className="font-medium flex items-center gap-2">
              <ClipboardCheck size={20} className="text-purple-300" />
              Help Design Our Routes! Take the 2-minute community survey.
            </p>
            <a
              href="https://tinyurl.com/The-MAC-Survey"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-900 text-xs md:text-sm font-bold py-1.5 px-4 rounded-full hover:bg-purple-100 transition shadow-sm uppercase tracking-wider"
            >
              Take Survey →
            </a>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative text-center py-20 px-6 bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <img
              src={macbusLogo}
              alt="The MAC Bus Logo"
              className="mx-auto w-40 md:w-52 mb-8 rounded-2xl shadow-2xl border-4 border-white/20"
            />
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-md">
              Connecting People to <span className="text-purple-200">Opportunity</span>
            </h1>
            
            {/* NEW MISSION STATEMENT */}
            <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 text-purple-50 font-light leading-relaxed">
              Mississippi Access Connect Bus, Inc. is committed to providing reliable, affordable, and accessible transportation that connects people to opportunity, supports workforce mobility, and strengthens communities.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
              <Link to="/book-ride" className="bg-white text-purple-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all text-lg">
                Request a Ride
              </Link>
              <Link to="/sponsor" className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-green-500 transition-all text-lg">
                Donate Now
              </Link>
              <Link to="/contact" className="bg-purple-800/40 backdrop-blur-sm border-2 border-white/50 text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-purple-700 transition-all text-lg">
                Become a Partner
              </Link>
            </div>
          </div>
        </section>

        {/* 501(c)(3) Credibility Section */}
        <section className="py-12 px-6 bg-white border-b">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
              <Landmark size={16} /> Official 501(c)(3) Nonprofit
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>Mississippi Access Connect Bus, Inc.</strong> is a nonprofit organization focused on providing equitable transportation access, workforce mobility, and community connectivity. 100% of your support goes directly toward keeping our community moving.
            </p>
          </div>
        </section>

        {/* Services At a Glance - 10 Second Scan */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600">Simple, reliable transit solutions for Jackson County.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fixed Routes", desc: "Reliable, scheduled stops for daily commutes." },
              { title: "On-Demand Rides", desc: "Flexible door-to-door service tailored to you." },
              { title: "Airport Shuttles", desc: "Flat-rate transport to Mobile and Gulfport." },
              { title: "Workforce Transit", desc: "Dedicated support for local employees." }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-purple-300 transition-colors">
                <Bus className="text-purple-600 mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEW: Strategic Partners Section */}
        <section className="py-16 bg-slate-100 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-500 uppercase tracking-widest mb-10">Community & Strategic Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70">
              <div className="flex flex-col items-center">
                <Landmark size={48} className="text-slate-400 mb-2" />
                <span className="text-xl font-bold text-slate-600">City of Moss Point</span>
              </div>
              <div className="flex flex-col items-center">
                <Handshake size={48} className="text-slate-400 mb-2" />
                <span className="text-xl font-bold text-slate-600">Southern Connect</span>
              </div>
            </div>
          </div>
        </section>

        {/* TEASER: Something Bigger is Coming */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-purple-700 rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Something Bigger is Coming</h2>
              <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto mb-8">
                A new hub for mobility, connection, and opportunity is coming to Moss Point. We are expanding our reach and building the **MAC Mobility Hub**.
              </p>
              <div className="inline-block bg-purple-900/50 backdrop-blur-md border border-purple-400 px-6 py-3 rounded-full font-bold tracking-wide">
                🚀 Expansion & Community Impact 2026
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to ride?</h2>
          <p className="mb-10 max-w-xl mx-auto text-gray-600 text-lg">
            Experience the future of community transit today.
          </p>
          <Link to="/book-ride" className="inline-block bg-purple-700 text-white font-bold px-12 py-5 rounded-full shadow-xl hover:bg-purple-800 transition-all text-lg">
             Request a Ride Now
          </Link>
        </section>
      </main>
    </Layout>
  );
}