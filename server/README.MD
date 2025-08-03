* Intern Fundraising Portal
This is a full-stack web application built for interns to track referral progress, view their achievements, and see a live leaderboard of top performers. The portal includes a React frontend and a Node.js/Express backend, both of which are deployed live.

* Live Demo
Frontend URL: https://intern-fundraising-portal.vercel.app/
Backend URL: https://intern-fundraising-portal.onrender.com/

* Tech Stack
Frontend: React, CSS
Backend: Node.js, Express
Hosting: Render, Vercel

* Project Structure
bash
Copy
Edit
Intern-Fundraising-Portal/
│
├── client/        # React frontend
├── server/        # Express backend
└── README.md

* Prerequisites
Node.js installed (v16 or later recommended)

npm (comes with Node.js)

Git

* How to Run and Install the Project

➤ Frontend:
Make a folder named client, then run the following commands:

bash
Copy
Edit
cd client
npm install
npm start
 You don’t need to run npx create-react-app client if the frontend code is already present.

➤ Backend:
Make a folder named server, then run the following commands to start the backend server and expose the APIs:

bash
Copy
Edit
cd server
npm install
node app.js

➤ To install the required backend dependencies (Express + CORS):
bash
Copy
Edit
npm install express cors