import React from "react";
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
        <a className="navbar-brand" href="h#">
          BraveGirls
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          // aria-controls="navbarText"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarText">
          <span className="navbar-text">
            <a href="#">Donate</a>
          </span>
          <span className="navbar-text">
            <a href="#">Heroines</a>
          </span>
          <span className="navbar-text">
            <a href="#">Volunteer</a>
          </span>
          <span className="navbar-text">
            <a href="#">About us</a>
          </span>
        </div>
    </nav>
  );
}