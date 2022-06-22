import React, { Component } from 'react';
import "../assets/css/scss/menu.scss";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import TextField from '@material-ui/core/TextField';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isScroll: false,
      isCollapse: false,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset > 0) {
        this.setState({ isScroll: true });
      } else {
        this.setState({ isScroll: false });
      }
    });
  }

  render() {
    let url = window.location.href;
    const myArray = url.split("/");
    let page = myArray[3];
    return (
      <>
        <nav id="navbar" className={` ${this.state.isScroll === true ? "nav-sticky" : ""} navbar-custom sticky sticky-dark navbar navbar-expand-lg fixed-top`}
        >
          <div className="container">
            <a href="/" className="navbar-brand logo text-uppercase navbar-brand">
              <img src="../../image/logo2.png" alt="" height="70" />
            </a>
            <button aria-label="Toggle navigation" type="button" className="navbar-toggler"
              onClick={() => {
                this.state.isCollapse === true ? this.setState({ isCollapse: false }) : this.setState({ isCollapse: true })
              }}
            >
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
                  {/* <NavLink className="nav-link" href="/Login">Log In</NavLink> */}
                  {/* <Button className="nav-link btn btn-default" onClick={this.toggle}>Log In</Button> */}
                </li>
              </ul>
            </div>
          </div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="" style={{ borderRadius: "0.8rem" }}>
            <div className="text-right py-3 px-3">
              <HighlightOffIcon onClick={this.toggle} className="cursor" />
            </div>
            <ModalBody>
              <div className="col-md-12 text-center">
                <img src="../../image/arkastra.png" alt="" height="160" />
              </div>
              {/* <div className="col-md-12 mt-3 text-center">
                <TextField
                  label="Email"
                  id="outlined-margin-dense"
                  defaultValue=""
                  margin="dense"
                  variant="outlined"
                  style={{
                    // marginLeft: theme.spacing(1),
                    // marginRight: theme.spacing(1),
                    width: '30ch',
                  }}
                />
              </div> */}
            </ModalBody>
          </Modal>
        </nav>
      </>
    )
  }
}

export default Header;