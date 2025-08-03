import React from "react";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";

function Loginpage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h1 class="heading">Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  
  );
}

export default Loginpage;
