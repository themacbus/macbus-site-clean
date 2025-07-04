import React from "react";
import PageTemplate from "./PageTemplate";

export default function Support() {
  return (
    <PageTemplate title="Support">
      <p>
        Your support helps us keep our buses running and our community connected.
      </p>
      <p>
        You can support us by donating, volunteering, or spreading the word.
      </p>
      <p className="mt-4">
        <a href="mailto:support@themacbus.org" className="text-blue-600 underline">
          Contact Support
        </a>
      </p>
    </PageTemplate>
  );
}
