import React, { useState } from "react";

export default function ApplyNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/yourFormID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error submitting form");

      setSuccess("Thanks for applying! We'll be in touch.");
      setFormData({ name: "", email: "", phone: "", job: "" });
    } catch (err) {
      console.error(err);
      setError("There was an error submitting the form. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-700">
        Apply Now
      </h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          { label: "Name", name: "name", type: "text", placeholder: "Your full name" },
          { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
          { label: "Phone", name: "phone", type: "tel", placeholder: "(555) 123-4567" },
          { label: "Job Title", name: "job", type: "text", placeholder: "Position you're applying for" },
        ].map(({ label, name, type, placeholder }) => (
          <label key={name} className="block">
            <span className="text-gray-700 font-semibold">{label}</span>
            <input
              name={name}
              type={type}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className="mt-1 w-full rounded border px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              disabled={submitting}
              required
            />
          </label>
        ))}

        <button
          type="submit"
          disabled={submitting}
          className={`w-full bg-purple-600 text-white py-3 rounded font-semibold transition ${
            submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"
          }`}
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
