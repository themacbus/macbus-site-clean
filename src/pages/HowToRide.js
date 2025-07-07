import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const steps = [
  {
    title: "Request a Ride",
    description:
      "Fill out our simple online form or call our hotline to request your ride. Provide your pickup location, destination, and preferred date/time.",
    icon: (
      <svg
        className="w-10 h-10 text-purple-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Get Confirmation",
    description:
      "Our team will promptly review your request and confirm the details with you, including any additional instructions.",
    icon: (
      <svg
        className="w-10 h-10 text-purple-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Pickup",
    description:
      "On your scheduled day, a licensed MAC Bus driver will arrive safely and on time at your location to pick you up.",
    icon: (
      <svg
        className="w-10 h-10 text-purple-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11v4H3zM16 18v-6h5v6" />
      </svg>
    ),
  },
  {
    title: "Enjoy Your Ride",
    description:
      "Travel comfortably and securely to your destination with our trained and courteous drivers.",
    icon: (
      <svg
        className="w-10 h-10 text-purple-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Return Trip",
    description:
      "When you’re ready, we’ll provide safe and reliable transportation back home or to your next destination.",
    icon: (
      <svg
        className="w-10 h-10 text-purple-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 1l4 4-4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 5H9a7 7 0 0 0 0 14h3" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HowToRide() {
  return (
    <Layout>
      <main className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-purple-700 text-center">
          How to Ride The MAC Bus
        </h1>

        <section className="space-y-10">
          {steps.map(({ title, description, icon }, idx) => (
            <motion.article
              key={idx}
              className="flex items-start space-x-6 p-6 bg-purple-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              aria-labelledby={`step-title-${idx}`}
            >
              <div className="flex-shrink-0">{icon}</div>
              <div>
                <h2
                  id={`step-title-${idx}`}
                  className="text-2xl font-semibold mb-2 text-purple-700"
                >
                  {title}
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">{description}</p>
              </div>
            </motion.article>
          ))}
        </section>

        <section className="mt-16 text-center">
          <p className="text-lg mb-8 max-w-xl mx-auto text-gray-700">
            Have questions or need assistance? Our team is here to help.
          </p>
          <div className="flex justify-center gap-6">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition"
            >
              Contact Us
            </Link>
            <Link
              to="/book-ride"
              className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
            >
              Book a Ride
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
