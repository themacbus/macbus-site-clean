import React from "react";
import { Link } from "react-router-dom";
import { ClipboardCheck, Bus, Users, Globe, ArrowRight, Heart } from "lucide-react";
import Layout from "../components/Layout"; 
import macbusLogo from "../assets/macbus-logo.PNG";

export default function HomePage() {
  return (
    <Layout>
      <main className="min-h-screen bg-slate-50 text-gray-800">
        
        {/* 🔹 Community Survey Banner - Slimmer & Non-Sticky to save space */}
        <section className="bg-purple-800 text-white py-3 px-6 text-center shadow-inner">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
            <p className="font-medium flex items-center gap-2">
              <ClipboardCheck size={20} className="text-purple-300" />
              Help Design Our Routes! Take the 2-minute community survey.
            </p>
            <a
              href="https://tinyurl.com/The-MAC-Survey"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-800 text-xs md:text-sm font-bold py-1.5 px-4 rounded-full hover:bg-purple-100 transition shadow-sm uppercase tracking-wider"
            >
              Take Survey →
            </a>
          </div>
        </section>

        {/* Hero Section - Dynamic Gradient & Subtle Polish */}
        <section className="relative text-center py-20 px-6 bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 text-white overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <img
              src={macbusLogo}
              alt="The MAC Bus Logo"
              className="mx-auto w-40 md:w-52 mb-8 rounded-2xl shadow-2xl border-4 border-white/20 animate-fade-in"
            />
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-md">
              Welcome to <span className="text-purple-200">The MAC Bus</span>
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-purple-50 font-light leading-relaxed">
              Equitable, accessible transportation serving our community — one ride at a time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link
                to="/how-to-ride"
                className="bg-white text-purple-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:translate-y-[-2px] transition-all"
              >
                How to Ride
              </Link>
              <Link
                to="/about"
                className="bg-purple-800/40 backdrop-blur-sm border-2 border-white/50 text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-purple-700 transition-all"
              >
                Our Mission
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Are Section - Grid Cards for Readability */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Who We Are</h2>
            <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong className="text-purple-700">Mississippi Access Connect Bus, Inc. (The MAC Bus)</strong> is a nonprofit transportation organization dedicated to closing mobility gaps across Jackson County, Mississippi.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Founded by a local veteran, woman, and minority entrepreneur, we focus on safe, reliable, and affordable transit for seniors, students, and underserved families.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Bus className="text-purple-600" />, text: "ADA-Compliant" },
                { icon: <Users className="text-purple-600" />, text: "Community Roots" },
                { icon: <Globe className="text-purple-600" />, text: "Rural & Urban" },
                { icon: <Heart className="text-purple-600" />, text: "Sustainable Model" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-purple-100 flex items-center gap-3">
                  {item.icon}
                  <span className="font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="italic text-purple-700 font-semibold text-center text-xl bg-purple-50 py-6 rounded-2xl">
            "Because everyone deserves a way to get where they’re going."
          </p>
        </section>

        {/* The Transporter Section - Elevated Design */}
        <section className="px-6 mb-20">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
             {/* Abstract background shape */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full -mr-20 -mt-20"></div>
             
             <div className="relative z-10 text-left md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Building More Than a Bus System
                </h2>
                <p className="text-slate-400 text-lg mb-0 leading-relaxed">
                  Visit <span className="text-purple-400 font-bold italic">The Transporter</span> to explore routes, invest in community growth, and see what’s next for Jackson County.
                </p>
             </div>
             
             <a
              href="https://themacbus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center gap-2 bg-purple-600 text-white text-lg font-bold py-4 px-8 rounded-xl hover:bg-purple-500 transition-transform hover:scale-105 active:scale-95 shadow-xl"
            >
              Visit The Transporter <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* Final CTA - "Ready to Ride" */}
        <section className="py-20 px-6 text-center bg-purple-700 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to ride?</h2>
          <p className="mb-10 max-w-xl mx-auto text-purple-100 text-lg">
            Whether you're heading to work, the doctor, or school, we've got you covered.
          </p>
          <Link to="/how-to-ride" className="inline-block bg-white text-purple-700 font-bold px-12 py-5 rounded-full shadow-2xl hover:bg-purple-50 transition-all text-lg">
             Book Your Ride Now
          </Link>
        </section>
      </main>
    </Layout>
  );
}