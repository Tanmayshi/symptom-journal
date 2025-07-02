# Symptom Journal 🩺🧠

A full-stack web application that helps users log their daily health symptoms, mood, and energy levels. The app provides a visual trend of health over time, aiding in better self-awareness and proactive wellness tracking.

---

## 📌 Problem Statement

People often ignore daily health issues due to busy schedules. They lack a simple tool to record how they feel physically and emotionally each day. This delays diagnosis and self-care.

---

## 💡 Solution

Symptom Journal offers:

- Daily symptom logging  
- Mood and energy tracking  
- Chart visualizations to analyze health trends  
- Secure authentication for personal data  
- Clean and intuitive UI

---

## 🚀 Features

- 👤 User Registration & Login  
- 📋 Journal Entry Form with multiple symptom categories  
- 📊 Symptom Trend Graph (Chart.js)  
- 🌙 Mood & Energy Selector  
- 🔒 Token-based authentication (JWT + Cookies)

---

## 🛠️ Tech Stack

| Frontend  | Backend   | Database |
|-----------|-----------|----------|
| React.js  | Node.js + Express | MongoDB |
| TailwindCSS | JWT Auth | Mongoose |
| Framer Motion | Bcrypt |          |

---

## 🧾 Folder Structure

symptom-journal/
├── backend/ # Node.js + Express API
│ └── src/
│ └── index.js
│ └── routes/
│ └── models/
│ └── controllers/
│ └── .env
│ └── package.json
│
├── frontend/ # React + Vite Client
│ └── src/
│ └── pages/
│ └── components/
│ └── context/
│ └── index.html
│ └── package.json

yaml
Copy
Edit

## 🧪 How to Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/symptom-journal.git
cd symptom-journal

cd backend
npm install
npm start


 cd frontend
npm install
npm run dev
