import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import macbusLogo from "../assets/macbus-logo.PNG";

export default function About() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-r from-purple-700 via-purple-900 to-indigo-900 text-white px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto space-y-6">
            <img
              src={macbusLogo}
              alt="MAC Bus circular logo representing community transportation"
              className="mx-auto w-32 md:w-48 rounded-full border-8 border-white shadow-xl"
            />
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
              About The MAC Bus
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Driving connection. Bridging distance. Empowering families through equitable, compassionate transportation.
            </p>
          </section>

          {/* Our Mission */}
          <section className="bg-white bg-opacity-10 rounded-3xl p-12 max-w-5xl mx-auto shadow-lg backdrop-blur-md">
            <h2 className="text-4xl font-bold mb-6 border-b-4 border-purple-400 inline-block pb-2">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              At The MAC Bus, we believe transportation is more than just movement — it’s a lifeline. 
              We’re committed to reconnecting families, breaking down distance and access barriers, 
              and restoring hope through reliable, dignified rides. Every trip is a journey toward healing and community.
            </p>
          </section>

          {/* Our Story */}
          <section className="max-w-5xl mx-auto space-y-8 text-lg leading-relaxed">
            <h2 className="text-4xl font-bold text-center mb-6 border-b-4 border-indigo-500 inline-block pb-2">
              Our Story
            </h2>
            <p>
              The MAC Bus began as a vision sparked by community leaders who saw the profound challenges families face when separated by barriers and long-distance travel. 
              Lack of accessible transportation often leads to disconnection and despair. We knew there had to be a better way.
            </p>
            <p>
              Since our founding, we’ve grown into a beacon of hope and mobility, operating with heart and professionalism. Our drivers are more than chauffeurs — they’re compassionate allies supporting every rider’s journey.
            </p>
            <p>
              Through partnerships with local organizations, volunteers, and dedicated staff, The MAC Bus is reshaping the narrative around family connection and community support — one ride at a time.
            </p>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Join Us in Driving Change</h2>
            <p className="mb-8 max-w-xl mx-auto">
              Whether as a rider, volunteer, sponsor, or advocate, your support powers our mission. Together, we can keep families connected and communities stronger.
            </p>
            <Link
              to="/sponsor"
              className="inline-block bg-white text-purple-900 font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              Become a Sponsor
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  );
}
