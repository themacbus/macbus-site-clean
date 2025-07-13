import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import confetti from "canvas-confetti";

export default function ThankYou() {
  useEffect(() => {
    // Launch confetti once when page loads
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <Layout>
      <main className="min-h-screen flex items-center justify-center bg-white text-gray-900 px-6 py-20">
        <div className="max-w-xl text-center space-y-6">
          <h1 className="text-4xl font-bold text-purple-700">
            Thank You for Applying!
          </h1>

          <p className="text-lg text-gray-700">
            We've received your application and will be in touch if you’re a match.
            In the meantime, please send your resume to{" "}
            <a
              href="mailto:info@themacbus.org"
              className="text-purple-600 underline font-medium"
            >
              info@themacbus.org
            </a>
            .
          </p>

          <Link
            to="/"
            className="inline-block mt-4 px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </Layout>
  );
}
