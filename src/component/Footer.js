import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../assets/css/scss/footer.scss";

import ContactUs from '../pages/ContactUs';


class Footer extends Component {
  render() {
    return (
      <footer className="section bg-footer pb-5">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-4">
              <div className="footer-info mt-4">
                <img src="../../image/acceltrade.png" alt="" height="50" />
                <p className="text-custom-muted mt-4 mb-2">Aenean lacus enim Praesent congue praesent viverra interdum maximus lobortis.</p>
                <div className="team-social mt-4 pt-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item"><a className="text-reset" href="/">f</a></li>
                    <li className="list-inline-item"><a className="text-reset" href="/"><i className="mdi mdi-twitter"></i></a></li>
                    <li className="list-inline-item"><a className="text-reset" href="/"><i className="mdi mdi-google"></i></a></li>
                    <li className="list-inline-item"><a className="text-reset" href="/"><i className="mdi mdi-pinterest"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pl-0 md-lg-5 row">
                <div className="col-lg-6">
                  <div className="mt-4">
                    <h5 className="f-20">Services</h5>
                    <ul className="list-unstyled footer-link mt-3">
                      <li><a href="/">Home</a></li>
                      <li><a href="/">About Us</a></li>
                      <li><a href="/">Careers</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mt-4">
                    <h5 className="f-20">Contact Us</h5>
                    <ul className="list-unstyled footer-link mt-3">
                      <li>
                        <Link to="/contactus">Corporate Office</Link>
                      </li>
                      <li><a href="/">Singapore Office</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <hr className="my-5" />
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <p className="text-custom-muted mb-0">Copyright  © Acceletrade Technologies Private Limited 2017</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;