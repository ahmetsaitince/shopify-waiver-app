import express from "express";
import Form from "../models/Form.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { email } = req.query;
  const form = await Form.findOne({ email });

  res.json({ waiverSigned: !!form });
});

export default router;