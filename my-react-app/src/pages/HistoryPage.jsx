import { useEffect, useState } from "react";
import { getHistory } from "../services/analysisService";
import HistoryCard from "../components/HistoryCard";

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await getHistory();
      if (res.success) {
        setHistory(res.data);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="page-container">
      <h2>📜 Match History</h2>

      {history.length === 0 ? (
        <p>No history available</p>
      ) : (
        history.map((item) => (
          <HistoryCard key={item.id} item={item} />
        ))
      )}
    </div>
  );
};

export default HistoryPage;