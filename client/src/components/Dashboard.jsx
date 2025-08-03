import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [intern, setIntern] = useState({});

  useEffect(() => {
    axios
      .get("https://intern-fundraising-portal.onrender.com/api/intern") // Fetch intern data, not leaderboard here
      .then((res) => setIntern(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>Welcome, {intern.name || "Intern"}</h2>
      <p>
        Referral Code: <strong>{intern.referralCode || "N/A"}</strong>
      </p>
      <h3>Total Raised: ₹{intern.totalRaised || 0}</h3>

      <div className="rewards">
        <h4>Rewards</h4>
        <ul>
          <li>🎉 Bronze Badge</li>
          <li>🎯 5 Referrals Unlocked</li>
        </ul>
      </div>

      <Link to="/leaderboard" className="leaderboard-btn">
        View Leaderboard
      </Link>
    </div>
  );
}

export default Dashboard;
