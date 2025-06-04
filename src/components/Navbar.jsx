import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Evently</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
