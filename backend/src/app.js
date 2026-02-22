const express = require("express");
const cors = require("cors");
const path = require("path");

const analyzeRoutes = require("./routes/analyzeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api", analyzeRoutes);

module.exports = app;
