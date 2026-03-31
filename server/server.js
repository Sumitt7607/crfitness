require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

// ================= ENV CHECK
if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET missing");
  process.exit(1);
}

// ================= MIDDLEWARE
app.use(cors());
app.use(express.json());

const SECRET = process.env.JWT_SECRET;

// ================= LOGIN
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@crfitness" && password === "crfitnessgym93") {
    const token = jwt.sign({ role: "admin" }, SECRET, { expiresIn: "1d" });
    return res.json({ success: true, token });
  }

  res.status(401).json({ success: false });
});

// ================= AUTH
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};

// ================= DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ================= MODEL
const Package = mongoose.model("Package", new mongoose.Schema({
  name: String,
  price: Number,
  duration: String,
  features: [String],
}));

const Review = mongoose.model(
  "Review",
  new mongoose.Schema({
    name: String,
    message: String,
  }, { timestamps: true })
);

// ================= CRUD

// CREATE
app.post("/api/packages", auth, async (req, res) => {
  const pkg = await Package.create(req.body);
  res.json(pkg);
});

// GET
app.get("/api/packages", async (req, res) => {
  const data = await Package.find();
  res.json(data);
});

// UPDATE
app.put("/api/packages/:id", auth, async (req, res) => {
  const updated = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
app.delete("/api/packages/:id", auth, async (req, res) => {
  await Package.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

app.post("/api/reviews", async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL REVIEWS
app.get("/api/reviews", async (req, res) => {
  try {
    const data = await Review.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= START
app.listen(5000, () => console.log("Server running"));