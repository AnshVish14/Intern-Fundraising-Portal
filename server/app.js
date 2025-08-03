const express = require("express");
const cors = require("cors");
const internRoutes = require("./routes/intern");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", internRoutes);

// Leaderboard route - reads data from JSON file
app.get("/api/leaderboard", (req, res) => {
  const filePath = path.join(__dirname, "leaderboardData.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading leaderboard data:", err);
      return res.status(500).json({ error: "Failed to load leaderboard data" });
    }
    try {
      const leaderboard = JSON.parse(data);
      res.json(leaderboard);
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).json({ error: "Invalid leaderboard data format" });
    }
  });
});

// start the server to  run the backend
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
