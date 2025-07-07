import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <Layout>
      <main className="min-h-screen bg-purple-700 text-white flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* 🎊 Confetti effect (subtle and smooth) */}
        <div className="absolute inset-0 pointer-events-none animate-float">
          <div className="absolute top-0 left-0 w-2 h-2 bg-yellow-300 rounded-full animate-bounce-slow delay-75" />
          <div className="absolute top-10 right-10 w-3 h-3 bg-pink-300 rounded-full animate-bounce-slow delay-150" />
          <div className="absolute bottom-10 left-20 w-2.5 h-2.5 bg-purple-300 rounded-full animate-bounce-slow delay-200" />
        </div>

        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg text-center">
          🎉 Thank You!
        </h1>

        <p className="text-xl text-center max-w-2xl mb-10 font-medium leading-relaxed drop-shadow-sm">
          Your application has been successfully submitted. <br />
          The MAC Bus team appreciates your interest — we’ll be in touch soon!
        </p>

        <Link
          to="/"
          className="bg-white text-purple-700 px-10 py-4 rounded-full font-semibold shadow-xl hover:scale-105 hover:bg-purple-100 transition"
        >
          Return to Home
        </Link>

        {/* Extra styling flair */}
        <style>{`
          @keyframes float {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(-20px); opacity: 0.7; }
            100% { transform: translateY(0); opacity: 1; }
          }

          .animate-float div {
            animation: float 4s ease-in-out infinite;
          }

          .animate-bounce-slow {
            animation: bounce 6s infinite ease-in-out;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .delay-75 { animation-delay: 0.75s; }
          .delay-150 { animation-delay: 1.5s; }
          .delay-200 { animation-delay: 2s; }
        `}</style>
      </main>
    </Layout>
  );
}
