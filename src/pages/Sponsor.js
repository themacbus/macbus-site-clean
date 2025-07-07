import React from "react";
import Layout from "../components/Layout";

export default function Sponsor() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-600 to-indigo-700 text-white flex flex-col items-center justify-center px-6 py-20">
        <section className="max-w-4xl text-center">
          <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
            Become a Champion of Change
          </h1>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Your sponsorship powers equitable transportation for our community — 
            reconnecting families, fostering opportunity, and building a future 
            where everyone rides with dignity.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-700 font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          >
            Sponsor The MAC Bus Today
          </a>
        </section>

        <section className="mt-20 grid gap-12 sm:grid-cols-2 max-w-5xl w-full">
          {[
            {
              title: "Visibility & Recognition",
              description:
                "Your brand will shine across our buses, events, and digital platforms, connecting you with an engaged and passionate community.",
            },
            {
              title: "Community Impact",
              description:
                "Be part of a movement that breaks down transportation barriers and fosters inclusion and opportunity for all.",
            },
            {
              title: "Tax Benefits & Reporting",
              description:
                "We provide transparent reporting and documentation to maximize your tax benefits and demonstrate your social impact.",
            },
            {
              title: "Networking & Partnerships",
              description:
                "Connect with other visionary organizations, local leaders, and community advocates who share your values.",
            },
          ].map(({ title, description }, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-20 rounded-3xl p-8 shadow-lg backdrop-blur-md hover:bg-opacity-30 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-lg leading-relaxed">{description}</p>
            </div>
          ))}
        </section>

        <section className="mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg mb-10">
            Whether you're a business, foundation, or individual, your sponsorship fuels hope, access, and connection.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-700 font-bold px-14 py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          >
            Get in Touch & Sponsor Now
          </a>
        </section>
      </main>
    </Layout>
  );
}
