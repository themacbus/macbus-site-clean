// src/components/Leadership.js

import React from 'react';

const team = {
  "Tawanna McFarlin": "Executive Director of The MAC Bus, Inc. Tawanna brings over 25 years of public service experience and leads the organization with a vision for equitable, accessible transportation.",
  "April Gainer": "President of the Board. April leads strategic board governance and brings strong community advocacy to the organization.",
  "Commancia Davison": "Treasurer of the Board. Commancia oversees the financial strategy and reporting, ensuring transparency and stewardship.",
  "Brandy Smith": "Secretary of the Board. Brandy brings administrative excellence and community engagement insight.",
  "Natasha Rankin": "Board Member focused on outreach and community development partnerships."
};

export default function Leadership() {
  return (
    <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Leadership
      </h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.entries(team).map(([name, description]) => (
          <li
            key={name}
            style={{
              marginBottom: '2rem',
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '10px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{name}</h3>
            <p style={{ margin: 0 }}>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
