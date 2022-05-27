import React, { Component } from 'react';
import "../assets/css/scss/menu.scss";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isScroll: false,
    }
  }


  componentDidMount() {
    // window.addEventListener('scroll', this.unsetSearch);
    window.addEventListener('scroll', (e) => {
      const nav = document.querySelector('.nav');
      if (window.pageYOffset > 0) {
        console.log(true)
        this.setState({ isScroll: true });
      } else {
        this.setState({ isScroll: false });
      }
    });
  }


  unsetSearch = () => {
    console.log("scrolling works...")
  }
  render() {
    return (
      <>
        <nav id="navbar" className={` ${this.state.isScroll === true ? "nav-sticky" : ""} navbar-custom sticky sticky-dark navbar navbar-expand-lg fixed-top`}
        >
          <div className="container">
            <a href="/" className="navbar-brand logo text-uppercase navbar-brand">
              <img src="../../image/acceltrade.png" alt="" height="50" />
            </a>
            <button aria-label="Toggle navigation" type="button" className="navbar-toggler">
              <i className="mdi mdi-menu"></i>
            </button>
            <div id="navbarCollapse" className=" navbar-collapse collapse">
              <div data-nav="list" className="navbar-collapse">
                <ul id="navbar-navlist" className="navbar-nav ml-auto navbar-center nav">
                  <li className="active nav-item">
                    <Link activeClass="active" smooth spy to="home" className="nav-link cursor">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link activeClass="active" smooth spy to="aboutus" className="nav-link cursor">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link activeClass="active" smooth spy to="carrer" className="nav-link cursor">Careers</Link>
                  </li>
                  <li className="nav-item">
                    {/* <Link to="/contactus" className="nav-link cursor">Contact</Link> */}
                    <NavLink
                      to="/contactus"
                      className="nav-link cursor"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <ul className="navbar-nav navbar-center">
                <li className="nav-item">
                  <a className="nav-link" href="/Login">Log In</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Header;