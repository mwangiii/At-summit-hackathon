import React, { Component } from "react";
import './assets/css/NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

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

  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked });
  // }

  handleClick = (e) => {
    e.preventDefault();
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
        <span className={`navbar-link ${clicked ? "disabled" : ""}`}>
            <Link to="/donate">Donate</Link>
          </span>
           <span className={`navbar-link ${clicked ? "disabled" : ""}`}>
            <Link to="/heroins">Heroins</Link>
          </span>
          <span className={`navbar-link ${clicked ? "disabled" : ""}`}>
            <Link to="/volunteer">Volunteer</Link>
          </span>
           <span className={`navbar-link ${clicked ? "disabled" : ""}`}>
            <Link to="/about us">About Us</Link>
          </span>
           <span className={`navbar-link ${clicked ? "disabled" : ""}`}>
            <Link to="/Admin">Admin</Link>
          </span>
        </div>
        <div className={`mobile-view ${clicked ? "clickable" : ""}`} onClick={this.handleClick}>
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
