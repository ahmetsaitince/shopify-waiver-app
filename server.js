import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import formRoutes from "./routes/form.js";
import waiverCheckRoutes from "./routes/waiverCheck.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/form", formRoutes);
app.use("/check-waiver", waiverCheckRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));