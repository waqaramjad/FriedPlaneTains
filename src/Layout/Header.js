import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu'
// import "./navStyle.css";
// import Logo from './../socialfinderapp.png'
import { Link } from "react-router-dom";
// import SignInModel from "./../Components/SignInModel";
import './header.css';
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg   ">
        <button
          className="navbar-toggler togglesIconColor"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav ">
          <li className="nav-item headerNavigationGap">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li class="nav-item headerNavigationGap dropdown">
              <Link
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                to="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Movies
              </Link>
              <div class="dropdown-menu">
                <Link class="dropdown-item" to="#">
                  New In Theaters
                </Link>
                <Link class="dropdown-item" to="#">
                  Coming Soon
                </Link>
                <Link class="dropdown-item" to="#">
                  Highly rated
                </Link>
                <div class="dropdown-divider" />
                <Link class="dropdown-item" to="#">
                  Nigerian Movies
                </Link>
              </div>
            </li>
            <li >
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item headerNavigationGap">
              <Link className="nav-link " to="/news">
                News
              </Link>
            </li>
            <li className="nav-item headerNavigationGap">
              <Link className="nav-link " to="/">
                Countries
              </Link>
            </li>
           
          </ul>
          {/* <span className="navbar-text nav-item">
            <Link className="nav-link" to="/login">
              <span style={{ color: "#ffff00 " }}> Sign-in </span>
            </Link>
          </span>
          <span className="navbar-text">
            <img
              className="flag img-fluid"
              src="https://flaglane.com/download/nigerian-flag/nigerian-flag.svg"
              style={{ width: "35px" }}
              alt="Nigeria"
            />
          </span>
          <span className="navbar-text">Nigeria</span> */}
          {/* <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">Disabled</a>
  </li>
</ul> */}
        </div>
      </nav>


//  <div class="topnav">
// <div class='SecDiv'>
//   <a class=" pad" href="/">Home</a>
//   <a  class ='pad' href="#news">Movies</a>
//   <a class = 'pad' href="#contact">Actors</a>
//   <a class = 'pad' href="#contact">Show Times </a>
//   <a class = 'pad' href="/news">News </a>
  
// </div>

// </div> 

    );
  }
}
class ParentComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render () {
    return (
      <div>
        <Menu 
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <a onClick={() => this.closeMenu()}>Home</a>
          <a onClick={() => this.closeMenu()}>About</a>
          <a onClick={() => this.closeMenu()}>Contact</a>
          <a onClick={() => this.closeMenu()}>Settings</a>
          {/* <ul className="navbar-nav ">
          <li >
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li >
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul> */}
        </Menu>
        {/* <CustomIcon /> */}
        <nav className="navbar navbar-expand-lg   ">
        <button
          className="navbar-toggler togglesIconColor"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav ">
          <li className="nav-item headerNavigationGap">
              <Link className="nav-link " to="/" onClick={() => this.toggleMenu()} >
                Home
              </Link>
            </li>
            <li class="nav-item headerNavigationGap dropdown">
              <Link
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                to="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Movies
              </Link>
              <div class="dropdown-menu">
                <Link class="dropdown-item" to="#">
                  New In Theaters
                </Link>
                <Link class="dropdown-item" to="#">
                  Coming Soon
                </Link>
                <Link class="dropdown-item" to="#">
                  Highly rated
                </Link>
                <div class="dropdown-divider" />
                <Link class="dropdown-item" to="#">
                  Nigerian Movies
                </Link>
              </div>
            </li>
            <li >
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item headerNavigationGap">
              <Link className="nav-link " to="/news">
                News
              </Link>
            </li>
            <li className="nav-item headerNavigationGap">
              <Link className="nav-link " to="/">
                Countries
              </Link>
            </li>
           
          </ul>
          {/* <span className="navbar-text nav-item">
            <Link className="nav-link" to="/login">
              <span style={{ color: "#ffff00 " }}> Sign-in </span>
            </Link>
          </span>
          <span className="navbar-text">
            <img
              className="flag img-fluid"
              src="https://flaglane.com/download/nigerian-flag/nigerian-flag.svg"
              style={{ width: "35px" }}
              alt="Nigeria"
            />
          </span>
          <span className="navbar-text">Nigeria</span> */}
          {/* <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">Disabled</a>
  </li>
</ul> */}
        </div>
      </nav>
      </div>
    )
  }
}


export default ParentComponent;

