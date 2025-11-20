import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Gmail SMTP using App Password (Replace with your email + new app password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ruchisonawane30112001@gmail.com", // <-- YOUR EMAIL
    pass: "sgvt vhdc idzi hhzb"      // <-- REPLACE THIS WITH APP PASSWORD
  },
});

// ✅ API to send OTP
app.post("/send-otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    await transporter.sendMail({
      from: "ruchisonawane30112001@gmail.com",
      to: email,
      subject: "Your OTP Verification Code",
      text: `Your OTP code is: ${otp}`,
    });

    res.json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ API to send final message after OTP verification
app.post("/send-message", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: "ruchisonawane30112001@gmail.com",
      to: "ruchisonawane30112001@gmail.com", // message delivered to your inbox
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    });

    res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Start backend
app.listen(5000, () => console.log("Backend running on port 5000"));