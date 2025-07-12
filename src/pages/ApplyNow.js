import React, { useState } from "react";

export default function ApplyNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
    resume: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const body = new FormData();
    for (let key in formData) {
      body.append(key, formData[key]);
    }

    try {
const response = await fetch("hhttps://formspree.io/f/mzzvppzb", {
        method: "POST",
        body,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (result.ok || response.status === 200) {
        setSuccess("✅ Application submitted! We’ll be in touch.");
        setFormData({ name: "", email: "", phone: "", job: "", resume: null });
      } else {
        throw new Error(result?.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError("❌ There was an error submitting the form. Please try again later.");
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

      <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
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
              value={formData[name] || ""}
              onChange={handleChange}
              className="mt-1 w-full rounded border px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              disabled={submitting}
              required
            />
          </label>
        ))}

        <label className="block">
          <span className="text-gray-700 font-semibold">Resume (PDF or DOC)</span>
          <input
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="mt-1 w-full"
            disabled={submitting}
            required
          />
        </label>

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
