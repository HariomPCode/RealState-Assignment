require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Middleware
app.use(
  cors({
    origin: "https://real-state-assignment-vrzg.vercel.app/",
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  }),
);

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/content", require("./routes/content"));

app.get("/", (req, res) => res.json({ message: "Real Estate API running 🏠" }));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
