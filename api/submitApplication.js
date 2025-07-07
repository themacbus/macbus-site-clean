// File: api/submitApplication.js

import formidable from "formidable";
import fs from "fs";
import path from "path";

// Disable default body parser — we use formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const uploadDir = path.join(process.cwd(), "/uploads");

  // Ensure the upload directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  const form = new formidable.IncomingForm({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      return res.status(500).json({ message: "Failed to process application." });
    }

    const { name, email, phone, job } = fields;
    const resumeFile = files.resume;

    // Optionally: store data, email notification, etc.
    console.log("📥 New Job Application:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Job Title:", job);
    console.log("Resume Path:", resumeFile?.filepath);

    return res.status(200).json({ message: "Application received." });
  });
}
