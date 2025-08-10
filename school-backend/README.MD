Test_School_Backend
This repository contains the backend for the Test_School Competency Assessment Platform. The backend is built with Node.js, Express, and TypeScript, and uses MongoDB for data storage. It provides a RESTful API for user authentication and the multi-step quiz functionality.

🎯 Features
Secure Authentication: User registration, login, and logout with JWT access and refresh tokens.

Progressive Quiz System: A 3-step assessment flow based on Test_School levels (A1 to C2).

Automated Scoring: The backend calculates quiz scores and determines certification levels.

Database Seeding: A script to populate the database with all 132 questions categorized by level and competency.

⚙️ Tech Stack
Framework: Node.js, Express

Language: TypeScript

Database: MongoDB (via Mongoose)

Authentication: JWT, bcryptjs

Utilities: dotenv, cors

🚀 Getting Started
Prerequisites
Node.js (v18 or higher)

MongoDB Atlas account (or local MongoDB instance)

Local Setup
Clone the repository:

git clone https://github.com/your-username/Test_School_Backend.git
cd Test_School_Backend

Install dependencies:

npm install

Create a .env file in the root directory and add your environment variables.

PORT=3000
MONGO_URI=<Your MongoDB Atlas connection string>
JWT_ACCESS_SECRET=<A long, random string>
JWT_REFRESH_SECRET=<A long, random string>
ACCESS_TOKEN_EXPIRES=15m
REFRESH_TOKEN_EXPIRES=7d

Add Quiz Questions to the Database
Run the following command to populate the database with all 132 questions as per the project specification. This script will connect to your MongoDB and add the questions automatically.

npm run add:questions

Start the development server:

npm run dev

The server will run on http://localhost:3000.

🌐 API Endpoints
Method

Endpoint

Description

Access

POST

/api/auth/register

Register a new user

Public

POST

/api/auth/login

Authenticate a user and return tokens

Public

POST

/api/quiz/questions

Get questions for a specific step

Private

POST

/api/quiz/submit

Submit answers and get results

Private

GET

/api/quiz/last-session

Get user's last quiz session details

Private

