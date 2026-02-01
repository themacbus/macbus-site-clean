import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

export default function HowToRide() {
  return (
    <Layout>
      <main className="min-h-screen bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-purple-700 mb-6"
          >
            How to Ride The MAC Bus
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 mb-12"
          >
            Getting around with The MAC Bus is simple, accessible, and built for
            our community. Follow the steps below to get moving.
          </motion.p>

          {/* Steps */}
          <div className="grid gap-8 md:grid-cols-3 text-left mb-16">
            {[
              {
                step: "1",
                title: "Request a Ride",
                text: "Click the Aye Let’s Ride button to open our booking app and submit your ride request."
              },
              {
                step: "2",
                title: "Confirm Details",
                text: "Choose your pickup location, destination, date, and time."
              },
              {
                step: "3",
                title: "Ride With Us",
                text: "A MAC Bus driver will pick you up and get you where you need to go safely."
              }
            ].map(({ step, title, text }) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm"
              >
                <div className="text-purple-700 text-3xl font-bold mb-2">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Aye Let's Ride CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-purple-700 text-white rounded-2xl p-10 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Ride?
            </h2>
            <p className="mb-6 text-lg">
              Book your ride now using our secure booking app.
            </p>

            <a
              href="https://pci.jotform.com/form/252710672217049"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-700 font-semibold text-lg px-10 py-4 rounded-full shadow hover:bg-gray-100 transition"
            >
              Aye Let’s Ride →
            </a>
          </motion.div>

        </div>
      </main>
    </Layout>
  );
}
