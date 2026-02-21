import React from "react";

const MatchInput = ({ scenario, setScenario, onGenerate, loading }) => {
  return (
    <div className="input-wrapper">
      <textarea
        className="scenario-textarea"
        placeholder="Enter detailed match scenario..."
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
      />

      <button
        className="generate-btn"
        onClick={onGenerate}
        disabled={loading}
      >
        {loading ? "Analyzing Match..." : "Generate Insight"}
      </button>
    </div>
  );
};

export default MatchInput;