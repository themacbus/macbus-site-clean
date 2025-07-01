import React, { useState } from "react";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Normally you'd send the data to a backend here
    console.log("Form submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Support</h1>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded shadow">
          ✅ Thank you for your message! We'll get back to you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded shadow"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded shadow"
            />
          </div>
          <div>
            <label className="block font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded shadow"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      )}
    </main>
  );
}
