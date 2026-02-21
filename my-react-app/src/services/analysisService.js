const API_URL = "http://localhost:5000/api";

export const generateAnalysis = async (scenario) => {
  const response = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ scenario }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch analysis");
  }

  return data; // returns { success, message, data }
};

export const getHistory = async () => {
  const response = await fetch(`${API_URL}/history`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch history");
  }

  return data; // returns { success, data }
};