# ⚡ Fan Insight Generator – Frontend

A scalable React.js application built using **Create React App (CRA)** that generates AI-based cricket match insights along with win probability predictions.

This project follows a modular architecture with clean separation of concerns, reusable components, and production-ready coding standards.

---

## 🚀 Project Overview

The application allows users to:

- Enter a cricket match scenario
- Generate AI-powered match insights
- View win probability percentage
- Navigate between analysis and history pages
- Experience smooth UI transitions with loading states

This frontend demonstrates structured React development practices suitable for mid-level production applications.

---

## 🛠 Tech Stack

- React.js (Create React App)
- JavaScript (ES6+)
- Functional Components
- React Hooks (`useState`)
- React Router (Client-side routing)
- Modular Component Architecture
- Service Layer Abstraction

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── HistoryCard.jsx
│   ├── MatchInput.jsx
│   ├── MatchOutput.jsx
│   ├── Navbar.jsx
│   └── Loader.jsx
│
├── pages/
│   ├── AnalyzePage.jsx
│   └── HistoryPage.jsx
│
├── services/
│   └── analysisService.js
│
├── routes/
│   └── AppRoutes.jsx
│
├── App.jsx
├── App.css
└── index.js
```

---

## 🧩 Folder Explanation

### 📁 components/
Reusable UI components used across multiple pages.

- **Navbar.jsx** → Navigation between pages  
- **MatchInput.jsx** → Form to enter match details  
- **MatchOutput.jsx** → Displays analysis results  
- **HistoryCard.jsx** → Displays previously analyzed matches  
- **Loader.jsx** → Loading indicator component  

---

### 📁 pages/
Page-level components representing application views.

- **AnalyzePage.jsx** → Main analysis interface  
- **HistoryPage.jsx** → Displays previous match insights  

---

### 📁 services/
Contains API abstraction logic.

- **analysisService.js** → Handles backend communication or mock logic  

---

### 📁 routes/
Routing configuration.

- **AppRoutes.jsx** → Defines application routes using React Router  

---

### 📄 App.jsx
Main application container that renders routes and layout.

---

### 📄 index.js
Application entry point that mounts React to the DOM.

---

## 🔄 Application Flow

1. User enters match scenario on Analyze page  
2. Data is sent to `analysisService`  
3. Backend (or mock service) returns insight + probability  
4. Result is displayed with conditional rendering  
5. History page shows stored match analysis records  

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
gh repo clone Ungratwar/fan-insight-generator
cd my-react-app
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start Development Server

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## 🧪 Future Enhancements

- Connect real AI/ML backend model
- Add global state management (Redux / Context API)
- Implement authentication
- Add input validation
- Improve UI animations
- Add responsive mobile optimization

---

## 👨‍💻 Developer Notes

This project demonstrates:

✔ Clean component architecture  
✔ Service layer abstraction  
✔ Scalable folder structure  
✔ Conditional rendering best practices  
✔ Route-based page separation  
✔ Production-ready coding style  

---
