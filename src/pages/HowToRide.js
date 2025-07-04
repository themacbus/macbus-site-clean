import React from "react";
import PageTemplate from "./PageTemplate";

export default function HowToRide() {
  return (
    <PageTemplate title="How To Ride The MAC Bus">
      <ol className="list-decimal list-inside space-y-2">
        <li>Check the bus routes and schedules on our Programs page.</li>
        <li>Plan your trip ahead of time.</li>
        <li>Purchase your ticket online or from the driver.</li>
        <li>Be ready at your stop a few minutes early.</li>
        <li>Enjoy your ride!</li>
      </ol>
    </PageTemplate>
  );
}
