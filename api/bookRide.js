import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // 🔐 use env var

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { name, email, phone, pickup, dropoff, date, time } = req.body;

  if (!name || !email || !phone || !pickup || !dropoff || !date || !time) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const emailResponse = await resend.emails.send({
      from: 'bookings@themacbus.org', // You can update this domain once verified
      to: 'tmac@themacbus.com',       // 🔁 Replace with your actual email
      subject: 'New MAC Bus Booking',
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Pickup:</strong> ${pickup}</p>
        <p><strong>Dropoff:</strong> ${dropoff}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
    });

    return res.status(200).json({ message: "Booking received and email sent!" });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Email send failed." });
  }
}
