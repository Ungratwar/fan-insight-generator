require("dotenv").config();
const app = require("./src/app");
const path = require("path");

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
