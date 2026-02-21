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

// Serve React build
app.use(express.static(path.join(__dirname, "../../my-react-app/build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../my-react-app/build", "index.html")
  );
});

module.exports = app;