import Layout from "../components/Layout";

export default function Programs() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-purple-800">
          MAC Bus Community Programs
        </h1>
        <p className="text-lg mb-10">
          Operated by <strong>Mississippi Access Connect Bus, Inc.</strong> — a{" "}
          <span className="font-semibold">501(c)(3) nonprofit (pending)</span> — our
          programs are designed to reduce transportation barriers and increase mobility
          access for underserved residents in Jackson County.
        </p>

        <div className="space-y-12">
          {/* Program 1 */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-2">
              1. Community Connector Rides
            </h2>
            <p className="text-gray-700">
              Free or low-cost fixed-route service linking underserved neighborhoods to
              essential services like grocery stores, clinics, job centers, and schools.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Designed based on community needs and surveys</li>
              <li>Coverage includes weekdays and weekends</li>
              <li>Focus on transportation deserts</li>
            </ul>
          </div>

          {/* Program 2 */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-2">
              2. Senior Mobility Program
            </h2>
            <p className="text-gray-700">
              Door-to-door shuttle service for seniors (60+) to attend medical
              appointments, run errands, and stay socially connected.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Partnered with senior centers and churches</li>
              <li>Advance scheduling available</li>
              <li>Rider assistance included</li>
            </ul>
          </div>

          {/* Program 3 */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-2">
              3. Workforce Access Shuttles
            </h2>
            <p className="text-gray-700">
              Reliable transportation for low-income workers commuting to job sites,
              hospitality venues, or manufacturing plants.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Designed around employer shifts</li>
              <li>Home pickup or rideshare drop zone integration</li>
              <li>Supported by job training organizations</li>
            </ul>
          </div>

          {/* Program 4 */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-2">
              4. Youth Access Initiative
            </h2>
            <p className="text-gray-700">
              Safe and reliable rides for youth (ages 13–18) to reach summer jobs,
              after-school programs, sports, and tutoring.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Partnerships with schools, rec centers, and churches</li>
              <li>Focus on vulnerable youth populations</li>
              <li>Runs during after-school and summer hours</li>
            </ul>
          </div>

          {/* Program 5 */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-2">
              5. Community Health Shuttle
            </h2>
            <p className="text-gray-700">
              Transit to hospitals, clinics, pharmacies, and pop-up wellness events.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Coordination with Singing River Health System</li>
              <li>Medical appointment scheduling support</li>
              <li>Links to VA clinics and mental health providers</li>
            </ul>
          </div>

          {/* Program 6 */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-2">
              6. Disaster & Resilience Transit
            </h2>
            <p className="text-gray-700">
              Emergency transportation during hurricanes, evacuations, or extreme weather
              events.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Integrated with Jackson County disaster plans</li>
              <li>Assists with shelter access and supply distribution</li>
              <li>Riders prioritized by need and health conditions</li>
            </ul>
          </div>

          {/* Program 7 */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-2">
              7. Rider Ambassador Program
            </h2>
            <p className="text-gray-700">
              A peer-to-peer outreach model that trains local residents to promote
              services, distribute route info, and support digital access.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Ambassadors are trusted voices in their communities</li>
              <li>Stipends and training provided</li>
              <li>Strengthens community engagement</li>
            </ul>
          </div>

          {/* Bonus Add-ons */}
          <div>
            <h2 className="text-xl font-semibold text-purple-800 mb-2">
              💡 Additional Services (Coming Soon)
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Free Ride Days sponsored by local businesses</li>
              <li>Transportation Vouchers for families in crisis</li>
              <li>Mobile Wi-Fi Access pilot for digital equity</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
