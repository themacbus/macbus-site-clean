import React from "react";

const faqs = [
  {
    question: "Who can use The MAC Bus services?",
    answer:
      "Our services are available primarily to families of incarcerated individuals and underserved community members who need reliable transportation to visits and essential appointments.",
  },
  {
    question: "How do I schedule a ride?",
    answer:
      "You can schedule a ride by filling out our online form or calling our hotline during business hours. We recommend booking at least 48 hours in advance.",
  },
  {
    question: "Are there any fees for the rides?",
    answer:
      "We strive to keep rides affordable and often provide services free of charge or at a reduced rate depending on your circumstances. Contact us for details.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Currently, The MAC Bus operates within the greater metropolitan area and surrounding counties. Please check our coverage map or contact us for specifics.",
  },
  {
    question: "Can I volunteer or donate?",
    answer:
      "Absolutely! We welcome volunteers and donors. Visit our Support page to learn how you can get involved and help us keep the wheels turning.",
  },
];

export default function FAQ() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-black-700 text-center">Frequently Asked Questions</h1>

      <section className="space-y-8">
        {faqs.map(({ question, answer }, idx) => (
          <div key={idx} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-3">{question}</h2>
            <p className="text-lg leading-relaxed">{answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
