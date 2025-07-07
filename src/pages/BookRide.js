// src/pages/BookRide.js
import React, { useState } from "react";

export default function BookRide() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors(prev => ({ ...prev, [e.target.name]: "" })); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.pickup.trim()) newErrors.pickup = "Pickup location is required.";
    if (!formData.dropoff.trim()) newErrors.dropoff = "Dropoff location is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Booking info submitted:", formData);
    alert("Thanks for booking! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      pickup: "",
      dropoff: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded mt-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-700">Book a Ride</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          { label: "Name", name: "name", type: "text", placeholder: "Your full name" },
          { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
          { label: "Phone", name: "phone", type: "tel", placeholder: "(555) 123-4567" },
          { label: "Pickup Location", name: "pickup", type: "text", placeholder: "Enter pickup address" },
          { label: "Dropoff Location", name: "dropoff", type: "text", placeholder: "Enter dropoff address" },
          { label: "Date", name: "date", type: "date" },
          { label: "Time", name: "time", type: "time" },
        ].map(({ label, name, type, placeholder }) => (
          <label key={name} className="block">
            <span className="text-gray-700 font-semibold">{label}</span>
            <input
              name={name}
              type={type}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className={`mt-1 w-full rounded border px-3 py-2 
                ${errors[name] ? "border-red-500" : "border-gray-300"} 
                focus:outline-none focus:ring-2 focus:ring-purple-600`}
            />
            {errors[name] && (
              <p className="text-red-600 text-sm mt-1">{errors[name]}</p>
            )}
          </label>
        ))}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded font-semibold hover:bg-purple-700 transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
