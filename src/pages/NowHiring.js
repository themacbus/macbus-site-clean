import React from "react";
import PageTemplate from "./PageTemplate";

export default function NowHiring() {
  return (
    <PageTemplate title="Now Hiring">
      <p>
        We're looking for motivated individuals to join our team!
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>Bus Drivers</li>
        <li>Customer Service Representatives</li>
        <li>Maintenance Staff</li>
      </ul>
      <p className="mt-4">
        To apply, please send your resume to <a href="mailto:jobs@themacbus.org" className="text-blue-600 underline">jobs@themacbus.org</a>.
      </p>
    </PageTemplate>
  );
}
