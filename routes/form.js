import express from "express";
import Form from "../models/Form.js";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", async (req, res) => {
  const { email, checkbox, signature, otherFields } = req.body;

  try {
    const form = new Form({ email, checkbox, signature, otherFields });
    await form.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: `${email}, ${process.env.EMAIL_USER}`,
      subject: "Waiver Form Submission Confirmation",
      text: `Thank you for your submission.`,
    });

    res.status(200).json({ message: "Form submitted and email sent." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;