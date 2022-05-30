import React, { Component } from 'react';
import "../assets/css/scss/contactus.scss";
import Header from '../component/Header';
import Footer from '../component/Footer';

class ContactUs extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="breadcrumb-area grey-bg" id="contactus" style={{ backgroundImage: "url('https://tradejk.netlify.app/assets/img/bg/page-title.jpg')" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-md-6">
                <div className="breadcrumb-title sm-size">
                  <h2>Contact</h2>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 text-left text-md-right">
                <div className="breadcrumb-1">
                  <ul>
                    <li><a href="https://tradejk.netlify.com">Home</a></li>
                    <li className="text-white pl-1">Pages /</li>
                    <li className="text-white pl-1">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="col-sm-12 mt-5">
            <div className="row">
              <div className="col-sm-6">
                <h4>Corporate Office</h4>
                <p className='text-custom-muted'>
                  <strong>SigmaQuant Technologies Private Limited</strong>
                  <br />
                  <strong>Acceletrade Technologies Private Limited</strong>
                  <br />
                  A-301,UKn Miraya Rose

                  66/1, Varthur Road, Siddapura, Whitefield

                  Bangalore, Karnataka, India - 560066
                  <br />
                  <b>Phone: </b><img src="https://www.acceletrade.com/img/bangalore_phone.png" alt="phone" width="250" />
                </p>
              </div>
              <div className="col-sm-6">
                <h4>Singapore Office</h4>
                <p className='text-custom-muted'>
                  <strong>Acceletrade Technologies Pte. Ltd.</strong>
                  <br />
                  1 Tampines North Drive 1
                  #08-54 T-Space
                  Singapore 528559
                  <br />
                  <b>Tel: </b><img src="https://www.acceletrade.com/img/singapore_phone.png" alt="tel" width="110" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>

    )
  }
}

export default ContactUs;