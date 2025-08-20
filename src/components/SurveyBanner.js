// src/components/SurveyBanner.js
import React from "react";

export default function SurveyBanner() {
  return (
    <div className="bg-purple-700 text-white py-6 px-4 text-center shadow-lg">
      <h2 className="text-2xl font-bold mb-2">🚌 Help Design Our Routes!</h2>
      <p className="mb-4">
        Click below to take the 2-minute community transit survey.
      </p>
      <a
        href="https://tinyurl.com/The-MAC-Survey"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-purple-700 font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition"
      >
        Take the Survey →
      </a>

      {/* Optional flyer image */}
      {/* <div className="mt-4">
        <img
          src="/images/survey-flyer.jpg"
          alt="Community Transit Survey Flyer"
          className="mx-auto max-w-md rounded-lg shadow"
        />
      </div> */}
    </div>
  );
}
