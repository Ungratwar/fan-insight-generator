const HistoryCard = ({ item }) => {
  return (
    <div className="history-card">
      <div className="history-scenario">
        {item.scenario}
      </div>

      <div className="history-prob">
        Chasing: {item.winProbability?.chasing}% | Defending:{" "}
        {item.winProbability?.defending}%
      </div>
    </div>
  );
};

export default HistoryCard;