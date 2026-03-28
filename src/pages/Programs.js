import React from "react";
import { 
  Bus, 
  Heart, 
  Briefcase, 
  Users, 
  Stethoscope, 
  ShieldAlert, 
  Star, 
  Zap, 
  ArrowRight 
} from "lucide-react";
import Layout from "../components/Layout";

export default function Programs() {
  const programs = [
    {
      title: "Community Connector Rides",
      icon: <Bus className="text-purple-600" size={28} />,
      description: "Free or low-cost fixed-route service linking neighborhoods to essential services like grocery stores and clinics.",
      bullets: ["Focus on transit deserts", "Weekdays & Weekends", "Community-led design"],
      color: "border-blue-100 bg-blue-50/30"
    },
    {
      title: "Senior Mobility Program",
      icon: <Heart className="text-purple-600" size={28} />,
      description: "Door-to-door shuttle service for seniors (60+) to attend medical appointments and stay socially connected.",
      bullets: ["Rider assistance included", "Advance scheduling", "Church & Center partnerships"],
      color: "border-purple-100 bg-purple-50/30"
    },
    {
      title: "Workforce Access Shuttles",
      icon: <Briefcase className="text-purple-600" size={28} />,
      description: "Reliable transportation for low-income workers commuting to job sites, manufacturing, or hospitality venues.",
      bullets: ["Shift-based scheduling", "Home pickup options", "Job training support"],
      color: "border-indigo-100 bg-indigo-50/30"
    },
    {
      title: "Youth Access Initiative",
      icon: <Users className="text-purple-600" size={28} />,
      description: "Safe rides for youth (ages 13–18) to reach summer jobs, after-school programs, and tutoring.",
      bullets: ["Safe & Supervised", "Summer & After-school", "Vulnerable pop. focus"],
      color: "border-purple-100 bg-purple-50/30"
    },
    {
      title: "Community Health Shuttle",
      icon: <Stethoscope className="text-purple-600" size={28} />,
      description: "Direct transit to hospitals, clinics, pharmacies, and wellness events across Jackson County.",
      bullets: ["Singing River Coordination", "VA Clinic links", "Pharmacy drop-offs"],
      color: "border-blue-100 bg-blue-50/30"
    },
    {
      title: "Disaster & Resilience",
      icon: <ShieldAlert className="text-purple-600" size={28} />,
      description: "Emergency transportation during hurricanes, evacuations, or extreme weather events.",
      bullets: ["Jackson County Integrated", "Shelter access focus", "Health-priority riders"],
      color: "border-red-100 bg-red-50/30"
    },
    {
      title: "Rider Ambassador",
      icon: <Star className="text-purple-600" size={28} />,
      description: "A peer-to-peer outreach model training local residents to promote services and support digital access.",
      bullets: ["Stipends provided", "Trusted community voices", "Digital literacy support"],
      color: "border-indigo-100 bg-indigo-50/30"
    }
  ];

  return (
    <Layout>
      <main className="bg-slate-50 min-h-screen pb-20">
        {/* Header Section */}
        <section className="bg-purple-800 text-white py-20 px-6 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Community Programs
            </h1>
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
              Operated by <span className="text-white font-bold">Mississippi Access Connect Bus, Inc.</span> — 
              a 501(c)(3) nonprofit (pending) dedicated to reducing transportation barriers in Jackson County.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="max-w-7xl mx-auto px-6 -mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p, i) => (
              <div key={i} className={`p-8 rounded-3xl border-2 shadow-sm bg-white transition-all hover:shadow-xl hover:-translate-y-1 ${p.color}`}>
                <div className="mb-4 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-purple-100">
                  {p.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {p.description}
                </p>
                <ul className="space-y-2">
                  {p.bullets.map((bullet, index) => (
                    <li key={index} className="text-xs font-semibold text-purple-700 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="p-8 rounded-3xl border-2 border-dashed border-purple-200 bg-purple-50/50 flex flex-col justify-center items-center text-center">
              <Zap className="text-purple-400 mb-4 animate-pulse" size={32} />
              <h2 className="text-xl font-bold text-purple-900 mb-2">Coming Soon</h2>
              <p className="text-purple-700/70 text-sm">
                Free Ride Days, Travel Vouchers, and Mobile Wi-Fi pilots.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-4xl mx-auto mt-20 px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Have questions about our programs?</h2>
            <p className="text-gray-600 mb-8">We are always looking for community partners, sponsors, and volunteers.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="bg-purple-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-800 transition shadow-lg flex items-center justify-center gap-2">
                 Get Involved <ArrowRight size={18} />
               </button>
               <button className="border-2 border-purple-200 text-purple-700 px-8 py-3 rounded-xl font-bold hover:bg-purple-50 transition">
                 Contact Us
               </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}