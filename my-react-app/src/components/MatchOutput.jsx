import React from "react";
const MatchOutput = ({ result }) => {
  if (!result) return null;

  return (
    <div className="output-card">
      <h2>🏏 Match Analysis</h2>

      <p>{result.analysis}</p>

      <h3>Win Probability</h3>

      <div className="prob-team">
        Chasing Team: {result.winProbability.chasing}%
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill chasing-bar"
          style={{ width: `${result.winProbability.chasing}%` }}
        />
      </div>

      <div className="prob-team">
        Defending Team: {result.winProbability.defending}%
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill defending-bar"
          style={{ width: `${result.winProbability.defending}%` }}
        />
      </div>
    </div>
  );
};

export default MatchOutput;