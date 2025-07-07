// src/pages/HomePage.js
import React from 'react';
import macbusLogo from '../macbus-logo.jpg';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: 40 }}>
      <img src={macbusLogo} alt="MAC Bus Logo" style={{ width: 200, borderRadius: 20 }} />
      <h1>Welcome to The MAC Bus</h1>
      <p>Your go-to accessible transportation service.</p>
    </div>
  );
}
