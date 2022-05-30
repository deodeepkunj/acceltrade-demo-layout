import React, { Component } from 'react';
import "../assets/css/scss/menu.scss";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isScroll: false,
      isCollapse: false,
    }
  }


  componentDidMount() {
    // window.addEventListener('scroll', this.unsetSearch);
    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset > 0) {
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
    console.log("state", this.state)
    let url = window.location.href;
    const myArray = url.split("/");
    let page = myArray[3];
    return (
      <>
        <nav id="navbar" className={` ${this.state.isScroll === true ? "nav-sticky" : ""} navbar-custom sticky sticky-dark navbar navbar-expand-lg fixed-top`}
        >
          <div className="container">
            <a href="/" className="navbar-brand logo text-uppercase navbar-brand">
              <img src="../../image/acceltrade.png" alt="" height="50" />
            </a>
            <button aria-label="Toggle navigation" type="button" className="navbar-toggler" onClick={() => {
              this.state.isCollapse === true ?   this.setState({isCollapse: false }) : this.setState({isCollapse: true })
            
            }}>
              <MenuIcon />
            </button>
            <div id="navbarCollapse" className={`navbar-collapse collapse ${this.state.isCollapse === true ? "show" : ""}`}>
              <div data-nav="list" className="navbar-collapse">
                <ul id="navbar-navlist" className="navbar-nav ml-auto navbar-center nav">
                  {page !== "contactus" ? (
                    <>
                      <li className="active nav-item">
                        <Link activeClass="active" smooth spy to="home" className="nav-link cursor">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link activeClass="active" smooth spy to="aboutus" className="nav-link cursor">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link activeClass="active" smooth spy to="carrer" className="nav-link cursor">Careers</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <NavLink to="/" className="nav-link cursor">Home</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/" className="nav-link cursor">About</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/" className="nav-link cursor">Careers</NavLink>
                      </li>
                    </>
                  )}

                  <li className="nav-item">
                    <NavLink to="/contactus" className="nav-link cursor">Contact</NavLink>
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