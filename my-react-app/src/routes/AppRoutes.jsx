import { Routes, Route } from "react-router-dom";
import AnalyzePage from "../pages/AnalyzePage";
import HistoryPage from "../pages/HistoryPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AnalyzePage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
};

export default AppRoutes;