const { generateMatchAnalysis } = require("../services/analyzeServices");
const { getAllMatches } = require("../data/matchStore");

const analyzeMatch = (req, res) => {
  try {
    const { scenario } = req.body;
    const result = generateMatchAnalysis(scenario);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getMatchHistory = (req, res) => {
  res.json({
    success: true,
    data: getAllMatches(),
  });
};

module.exports = {
  analyzeMatch,
  getMatchHistory,
};