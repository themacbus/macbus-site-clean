import React from "react";
import PageTemplate from "./PageTemplate";

export default function Pricing() {
  return (
    <PageTemplate title="Pricing">
      <table className="table-auto w-full text-left border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Service</th>
            <th className="border border-gray-300 p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Single Ride</td>
            <td className="border border-gray-300 p-2">$2.00</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 p-2">Day Pass</td>
            <td className="border border-gray-300 p-2">$5.00</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Monthly Pass</td>
            <td className="border border-gray-300 p-2">$50.00</td>
          </tr>
        </tbody>
      </table>
    </PageTemplate>
  );
}
