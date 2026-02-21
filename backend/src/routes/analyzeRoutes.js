const express = require("express");
const router = express.Router();

const {
  analyzeMatch,
  getMatchHistory,
} = require("../controller/analyzeController");

router.post("/analyze", analyzeMatch);
router.get("/history", getMatchHistory);

module.exports = router;