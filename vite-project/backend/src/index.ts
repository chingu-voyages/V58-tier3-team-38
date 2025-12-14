import express from "express";
import cors from "cors";
import { entries } from "./data.js";
import type { SignupEntry } from "./types/Entry.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/", (_, res) => {
  res.send("Signup API running.");
});

// GET all entries
app.get("/entries", (req, res) => {
  res.json(entries);
});

// FILTER entries by Country Code / Gender / Goal
app.get("/entries/filter", (req, res) => {
  const { country, gender, goal } = req.query;

  let result = [...entries];

  if (country) result = result.filter((e) => e["Country Code"] === country);
  if (gender) result = result.filter((e) => e.Gender === gender);
  if (goal) result = result.filter((e) => e.Goal === goal);

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
