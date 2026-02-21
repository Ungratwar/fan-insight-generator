import { useState } from "react";
import MatchInput from "../components/MatchInput";
import MatchOutput from "../components/MatchOutput";
import { generateAnalysis } from "../services/analysisService";

const AnalyzePage = () => {
  const [scenario, setScenario] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!scenario.trim()) return;

    setLoading(true);

    try {
      const res = await generateAnalysis(scenario);
      setResult(res?.data || null);

      // ❌ REMOVE THIS LINE
      // setScenario("");

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <MatchInput
        scenario={scenario}
        setScenario={setScenario}
        onGenerate={handleGenerate}
        loading={loading}
      />

      {loading && (
        <div className="loader-section">
          <div className="spinner"></div>
          <p>Analyzing Match Situation...</p>
        </div>
      )}

      <MatchOutput result={result} />
    </div>
  );
};

export default AnalyzePage;