import React from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2>Intern Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Loginpage;
