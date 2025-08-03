import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Leaderboard.css";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios
      .get("https://intern-fundraising-portal.onrender.com/api/leaderboard")
      .then((res) => setLeaders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Intern Name</th>
            <th>Referral Code</th>
            <th>Amount Raised (₹)</th>
          </tr>
        </thead>
        <tbody>
          {leaders.length === 0 ? (
            <tr>
              <td colSpan="4">Loading or no data available</td>
            </tr>
          ) : (
            leaders.map((leader, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{leader.name}</td>
                <td>{leader.referralCode}</td>
                <td>{leader.totalRaised}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
