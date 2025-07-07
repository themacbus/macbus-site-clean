import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <Layout>
      <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 py-24">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-6 text-center">
          Pricing Page 🚧
        </h1>

        <p className="text-xl text-center max-w-2xl mb-8 text-gray-700">
          This page is currently under construction while we finalize our pricing structure.
          Please check back soon!
        </p>

        <Link
          to="/"
          className="mt-4 bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-purple-800 transition"
        >
          Return to Home
        </Link>

        {/* Simple under construction visual */}
        <div className="mt-12 text-center opacity-80">
          <span className="text-6xl">🚧</span>
          <p className="mt-2 text-sm text-gray-500">MAC Bus is paving the way.</p>
        </div>
      </main>
    </Layout>
  );
}
