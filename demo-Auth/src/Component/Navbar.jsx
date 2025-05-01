import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#333", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>Firebase</div>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li><Link to="/" style={{ color: "white", fontSize: "16px", padding: "8px 15px", transition: "background 0.3s ease" }}>Home</Link></li>
        <li><Link to="/dashboard" style={{ color: "white", fontSize: "16px", padding: "8px 15px", transition: "background 0.3s ease" }}>Dashboard</Link></li>
        <li><Link to="/signin" style={{ color: "white", fontSize: "16px", padding: "8px 15px", transition: "background 0.3s ease" }}>SignIn</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
