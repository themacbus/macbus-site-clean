import React from "react";
import PageTemplate from "./PageTemplate";

export default function FAQ() {
  return (
    <PageTemplate title="Frequently Asked Questions">
      <h2 className="font-semibold text-xl mb-2">How do I buy tickets?</h2>
      <p>You can purchase tickets online or directly from the bus driver.</p>

      <h2 className="font-semibold text-xl mt-4 mb-2">Are the buses wheelchair accessible?</h2>
      <p>Yes, all our buses are fully accessible and equipped with ramps.</p>

      <h2 className="font-semibold text-xl mt-4 mb-2">What are the operating hours?</h2>
      <p>Our buses operate Monday through Saturday, 6am to 10pm.</p>
    </PageTemplate>
  );
}
