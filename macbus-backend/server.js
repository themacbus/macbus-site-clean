const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/bookRide", (req, res) => {
  const { name, email, phone, pickup, dropoff, date, time } = req.body;

  if (!name || !email || !phone || !pickup || !dropoff || !date || !time) {
    return res.status(400).json({ error: "All fields are required." });
  }

  console.log("New ride booking:", req.body);

  res.status(200).json({ message: "Booking received. We'll contact you soon!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
