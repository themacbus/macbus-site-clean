import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Layout from "../components/Layout";

const jobs = [
  {
    title: "Licensed Driver",
    description:
      "Transport clients safely and courteously to their destinations. Must have a valid driver’s license and clean driving record.",
  },
  {
    title: "Community Outreach Coordinator",
    description:
      "Engage with community partners, organize events, and promote MAC Bus programs. Strong communication skills required.",
  },
  {
    title: "Administrative Assistant",
    description:
      "Manage scheduling, client intake, and general office duties. Detail-oriented with strong organizational skills preferred.",
  },
];

export default function NowHiring() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    )
      newErrors.email = "Invalid email address.";
    if (!formData.job) newErrors.job = "Please select a position.";
    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("job", formData.job);

    try {
      const response = await fetch("https://formspree.io/f/mzzvppzb", {
        method: "POST",
        body: formPayload,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Form submission failed");

      setFormData({ name: "", email: "", phone: "", job: "" });
      navigate("/thank-you"); // ✅ Redirect after submit
    } catch (error) {
      alert("There was an error submitting the form. Please try again later.");
      console.error("Submission error:", error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Layout>
      <main className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 text-purple-700 text-center tracking-tight">
          We're Hiring!
        </h1>

        <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed text-center">
          Join The MAC Bus team and make a real difference in your community.
          We're looking for passionate individuals dedicated to equity, safety,
          and service.
        </p>

        <section className="space-y-8 mb-16">
          {jobs.map(({ title, description }, idx) => (
            <div
              key={idx}
              className="p-6 border border-purple-300 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2 text-purple-600">{title}</h2>
              <p className="text-gray-800">{description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-700 tracking-wide">
            Apply Now
          </h2>

          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-6 bg-purple-50 p-8 rounded-xl shadow-md"
            noValidate
            aria-describedby="form-errors"
          >
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded border px-3 py-2 ${
                  errors.name
                    ? "border-red-500 focus:border-red-600"
                    : "border-gray-300 focus:border-purple-500"
                } focus:outline-none focus:ring-1 ${
                  errors.name ? "focus:ring-red-500" : "focus:ring-purple-400"
                }`}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                required
              />
              {errors.name && (
                <p id="name-error" className="text-red-600 mt-1 text-sm">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded border px-3 py-2 ${
                  errors.email
                    ? "border-red-500 focus:border-red-600"
                    : "border-gray-300 focus:border-purple-500"
                } focus:outline-none focus:ring-1 ${
                  errors.email ? "focus:ring-red-500" : "focus:ring-purple-400"
                }`}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                required
              />
              {errors.email && (
                <p id="email-error" className="text-red-600 mt-1 text-sm">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-500"
                placeholder="Optional"
              />
            </div>

            <div>
              <label htmlFor="job" className="block font-semibold text-gray-700 mb-1">
                Position Applying For <span className="text-red-600">*</span>
              </label>
              <select
                id="job"
                name="job"
                value={formData.job}
                onChange={handleChange}
                className={`mt-1 block w-full rounded border px-3 py-2 ${
                  errors.job
                    ? "border-red-500 focus:border-red-600"
                    : "border-gray-300 focus:border-purple-500"
                } focus:outline-none focus:ring-1 ${
                  errors.job ? "focus:ring-red-500" : "focus:ring-purple-400"
                }`}
                aria-invalid={errors.job ? "true" : "false"}
                aria-describedby={errors.job ? "job-error" : undefined}
                required
              >
                <option value="">Select a position</option>
                {jobs.map((job) => (
                  <option key={job.title} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
              {errors.job && (
                <p id="job-error" className="text-red-600 mt-1 text-sm">
                  {errors.job}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-3 rounded-xl font-semibold text-white transition ${
                submitting
                  ? "bg-purple-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            After submitting, please email your resume to{" "}
            <a
              href="mailto:tmac@themacbus.com"
              className="text-purple-600 underline font-medium"
            >
              tmac@themacbus.com
            </a>
            .
          </p>
        </section>

        <style>{`
          @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-in forwards;
          }
        `}</style>
      </main>
    </Layout>
  );
}
