import React, { Component } from "react";
import './assets/css/NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
// import Donate from './Donate';

class NavBar extends Component {
  state = { clicked: false, visible: false };

  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollY = window.scrollY;
    const isScrolled = scrollY > 0;

    this.setState({ visible: isScrolled });
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const { clicked, visible } = this.state;
    const navbarTextClass = clicked ? "active" : "";
    const navbarClass = `navbar ${visible ? "visible" : ""}`;

    return (
      <nav className={navbarClass}>
        <a className="navbar-brand" href="/">
          BraveGirls
        </a>
        <div className={navbarTextClass} id="navbarText">
          <span className="navbar-link">
            {/* A link to the page Donate */}
            <Link to="/donate">Donate</Link>
          </span>
          <span className="navbar-link">
          <Link to="/heroins">Heroins</Link>
          </span>
          <span className="navbar-link">
          <Link to="/volunteer">Volunteer</Link>
          </span>
          <span className="navbar-link">
          <Link to="/about us">About Us</Link>
          </span>
        </div>
        <div className="mobile-view" onClick={this.handleClick}>
          <FontAwesomeIcon
            icon={clicked ? faBars : faWindowClose}
            id="bar"
          />
        </div>
      </nav>
    );
  }
}

export default NavBar;
