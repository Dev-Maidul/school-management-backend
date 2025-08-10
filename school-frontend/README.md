Test_School_Frontend
This repository contains the frontend for the Test_School Competency Assessment Platform. The frontend is a React application that provides a user interface for the multi-step quiz, authentication, and results display. It communicates with the backend via a REST API.

🎯 Features
Responsive UI: A modern, mobile-optimized user interface using Tailwind CSS.

3-Step Quiz Flow: A dynamic quiz page that guides users through a 3-step assessment.

Real-time Timer: A countdown timer for each question that auto-submits on expiration.

Conditional Rendering: The UI adapts based on user authentication status and quiz progress.

State Management: Uses React hooks for local state and Tanstack Query for efficient data fetching.

⚙️ Tech Stack
Framework: React.js

Language: JavaScript / JSX

Styling: Tailwind CSS

State/Data Fetching: React Query, Axios

Animations: Framer Motion

Routing: React Router

🚀 Getting Started
Prerequisites
Node.js (v18 or higher)

Running Backend: Ensure the Test_School_Backend server is running and accessible.

Local Setup
Clone the repository:

git clone https://github.com/your-username/Test_School_Frontend.git
cd Test_School_Frontend

Install dependencies:

npm install

Configure API Base URL
Open your axios calls and update the base URL to point to your deployed backend URL. If you are running the backend locally, the URL will be http://localhost:3000.

Start the development server:

npm run dev

The app will run on http://localhost:5173 (or another port).