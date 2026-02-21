const express = require("express");
const cors = require("cors");
const path = require("path");

const analyzeRoutes = require("./routes/analyzeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", analyzeRoutes);

// Serve React build
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;