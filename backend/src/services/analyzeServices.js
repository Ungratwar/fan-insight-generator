const { addMatch } = require("../data/matchStore");

const generateMatchAnalysis = (scenario) => {
  if (!scenario) throw new Error("Scenario required");
  const text = scenario.toLowerCase().trim();
  // Team name
  const teamMatch = text.match(/^([a-zA-Z]+)/);
  const teamName = teamMatch
    ? teamMatch[1].charAt(0).toUpperCase() + teamMatch[1].slice(1)
    : "The team";
  // Runs
  const runsMatch = text.match(/(\d+)\s*runs?/);
  if (!runsMatch) throw new Error("Runs not found");
  const runsNeeded = parseInt(runsMatch[1]);
  // Balls
  const ballsMatch = text.match(/(\d+)\s*balls?/);
  // Overs (supports 3.2)
  const oversMatch = text.match(/(\d+(\.\d+)?)\s*overs?/);
  let ballsRemaining;
  if (ballsMatch) {
    ballsRemaining = parseInt(ballsMatch[1]);
  } else if (oversMatch) {
    const overs = parseFloat(oversMatch[1]);
    const fullOvers = Math.floor(overs);
    const remainingBalls = Math.round((overs - fullOvers) * 10);
    ballsRemaining = fullOvers * 6 + remainingBalls;
  } else {
    throw new Error("Mention balls or overs");
  }
  // Wickets
  const wicketMatch = text.match(/(\d+)\s*wicket/);
  const wicketsLeft = wicketMatch ? parseInt(wicketMatch[1]) : 5;
  if (ballsRemaining <= 0) throw new Error("Invalid balls");
  // Required Run Rate
  const requiredRunRate = ((runsNeeded / ballsRemaining) * 6).toFixed(2);
  const rrr = Number(requiredRunRate);
  // Base probability
  let chasingProbability;
  if (rrr <= 6) chasingProbability = 85;
  else if (rrr <= 8) chasingProbability = 70;
  else if (rrr <= 10) chasingProbability = 55;
  else if (rrr <= 12) chasingProbability = 40;
  else chasingProbability = 25;
  // Wicket impact
  if (wicketsLeft >= 7) chasingProbability += 5;
  if (wicketsLeft <= 3) chasingProbability -= 10;
  // 🔥 NEW: Powerplay Logic
  if (text.includes("powerplay")) {
    chasingProbability += 5; // Easier scoring
  }
  // 🔥 NEW: Death Over Logic
  if (text.includes("death")) {
    chasingProbability -= 5; // High pressure
  }
  chasingProbability = Math.max(5, Math.min(95, chasingProbability));
  // 🔥 NEW: Defending probability
  const defendingProbability = 100 - chasingProbability;
  const analysis = `
${teamName} need ${runsNeeded} runs from ${ballsRemaining} balls with ${wicketsLeft} wickets remaining.

Required run rate: ${requiredRunRate}.

Considering wickets and match phase, ${teamName}'s win probability is ${chasingProbability}%.
The defending team has ${defendingProbability}% chance.
`.trim();

  const result = {
    scenario,
    teamName,
    runsNeeded,
    ballsRemaining,
    wicketsLeft,
    requiredRunRate,
    winProbability: {
      chasing: chasingProbability,
      defending: defendingProbability,
    },
    analysis,
  };

  addMatch(result);
  return result;
};

module.exports = { generateMatchAnalysis };
