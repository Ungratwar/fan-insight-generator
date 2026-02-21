# ⚡ Fan Insight Generator – Backend

Node.js and Express-based backend API service for generating cricket match insights and win probability analytics.

---

## 📌 Overview

The backend provides:

- RESTful API endpoint for match analysis
- Insight generation logic
- Win probability calculation
- Scalable service-controller architecture
- Structured error handling

---

## 🛠 Tech Stack

- Node.js
- Express.js
- JavaScript (ES6+)
- REST API Architecture
- Service Layer Pattern

---

## 📂 Project Structure

```
backend/
│
├── src/
│   ├── routes/
│   │   └── analyzeRoutes.js
│   │
│   ├── controller/
│   │   └── analyzeController.js
│   │
│   ├── services/
│   │   └── analyzeService.js
│   │
│   ├── data/
│   │   └── matchStore.js
│   │
│   └── app.js
│
└── server.js
```

## 📁 File-Wise Explanation

### 📌 server.js
- Entry point of backend application
- Starts Express server

---

### 📌 app.js
- Registers routes
- Central app configuration

---

### 📌 routes/analysisRoutes.js
- Defines API endpoints
- Connects routes to controller

---

### 📌 controllers/analysisController.js
- Handles request & response
- Calls service layer
- Sends formatted JSON response

---

### 📌 services/analysisService.js
- Contains core business logic
- Generates match insight
- Calculates win probability

---

### 📌 middlewares/errorHandler.js
- Ensures consistent API responses

---

## 🔌 API Endpoint

### POST /api/analyze

### 📥 Request Body

```json
{
  "teamA": "India",
  "teamB": "Australia",
  "currentScore": 150,
  "oversRemaining": 5,
  "runsNeeded": 45,
  "wicketsLeft": 4,
  "matchPhase": "death"
}``

---

### Response

```json
{
  "success": true,
  "data": [
    {
      "teamA": "India",
      "teamB": "Australia",
      "runsNeeded": 45,
      "oversRemaining": 5,
      "winProbability": {
        "chasing": 40,
        "defending": 60
      }
    }
  ]
}
```

---

## 🚀 Installation & Setup

### 1️⃣ Navigate to Backend Folder

```bash
cd backend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 🧪 Future Enhancements

- Connect real ML model
- Integrate MongoDB for match history
- Add authentication & authorization
- Add logging (Winston)
- Docker containerization
- Cloud deployment (AWS / Render)

---

## 👨‍💻 Developer Notes

This backend follows:

- Clean code principles
- Separation of concerns
- Scalable service pattern
- Production-ready API structure



** Here are proper testing prompts to fully test your system (runs, balls, overs, wickets, powerplay, death overs, easy chase, tough chase, etc.)

🧪 ✅ BASIC SCENARIOS
1️⃣ Simple Ball Scenario
India need 20 runs in 10 balls
2️⃣ With Wickets
India need 30 runs in 24 balls with 4 wickets left
3️⃣ Tough Chase
Pakistan need 40 runs in 12 balls with 3 wickets left
🧪 ✅ OVERS SCENARIOS
4️⃣ Using Overs
Australia need 45 runs in 3 overs
5️⃣ Overs with Wickets
England need 36 runs in 4 overs with 6 wickets left
6️⃣ Decimal Overs (3.2 format)
SriLanka need 25 runs in 3.2 overs with 5 wickets left
🧪 ✅ POWERPLAY SCENARIOS
7️⃣ Powerplay Easy Chase
India need 40 runs in 6 overs with 8 wickets left during powerplay
8️⃣ Powerplay Pressure
Pakistan need 55 runs in 6 overs with 4 wickets left in powerplay

(Chasing probability should increase slightly)

🧪 ✅ DEATH OVER SCENARIOS
9️⃣ Death Over Thriller
India need 18 runs in 6 balls with 4 wickets left in death overs
🔟 High Pressure Finish
Australia need 32 runs in 12 balls with 3 wickets left in death overs

(Probability should reduce slightly)

🧪 ✅ EASY CHASE
11️⃣ Comfortable Situation
England need 15 runs in 24 balls with 7 wickets left

(Expected high probability)

🧪 ✅ EXTREME HARD CHASE
12️⃣ Almost Impossible
India need 60 runs in 18 balls with 2 wickets left

(Expected low probability)

🧪 ✅ LOW TARGET DEFENSE FEEL
13️⃣ Mid Pressure
Pakistan need 50 runs in 30 balls with 5 wickets left
🧪 ✅ LAST OVER CLASSIC
14️⃣ Last Over Drama
India need 12 runs in 6 balls with 5 wickets left
🧪 ✅ SUPER PRESSURE
15️⃣ One Wicket Left
SriLanka need 20 runs in 12 balls with 1 wicket left