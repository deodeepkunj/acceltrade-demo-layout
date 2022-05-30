import React, { Component } from 'react';
import Header from '../component/Header';
import "../assets/css/scss/home.scss";

import Footer from '../component/Footer';


class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="bg-home bg-light" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <div className="align-items-center row">
                  <div className="col-lg-6">
                    <div className="home-content">
                      <p className="mb-0">Trade Always...</p>
                      <h1 className="home-title mt-4">Proper Buisness For Success</h1>
                      <p className="text-custom-muted mt-4 f-14">
                        We combine cutting-edge technology with analytical rigour and insightful research to invest in global financial markets. Our team, led by the best engineers, scientists and trading professionals from a variety of backgrounds specializes in systematic investment strategies across geographies and asset classes. As we pursue new markets and opportunities, we also foster a culture of collaboration, innovation and excellence.</p>
                      <div className="mt-4 pt-2"><a className="btn btn-primary mr-3" href="/">Contact Us</a></div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="home-img">
                      <div className="animation-1"></div>
                      <div className="animation-2"></div>
                      <div className="animation-3"></div>
                      <img src="https://thamza.react.themesdesign.in/static/media/img-2.6652ab3d.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-aboutus" id="aboutus">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">About Us </h3>
                  <p className="text-custom-muted f-17 mt-3">Arkastra Technologies Pvt. Ltd. was founded in 2011 to build high-performance technology for trading in Indian financial markets. The founders combined this innovative technology with insightful quantitative research to begin algorithmic trading in India.</p>
                </div>
              </div>
            </div>
            <div id="counter" className="align-items-center mt-5 pt-4 row">
              <div className="col-lg-6">
                <div className="pr-4 mt-4">
                  <p className="text-uppercase">why choose us </p>
                  <h3>Let’s make a better business</h3>
                  <p className="text-custom-muted mt-3">Arkastra has grown over the past 5 years into a brilliant and diverse team of more than 50 people. Today, the firm trades significant volumes in the Indian cash and derivatives markets. A cornerstone of the firm’s success has been its dedication to robust, thorough processes and sophisticated risk management systems to manage all aspects of the business.</p>
                  <div className="mt-4 pt-1">
                    <p className="text-custom-muted mt-3">
                      The firm is currently expanding to the US and to Europe. As it pursues new markets and opportunities, the firm is looking to hire smart and talented people to join its dynamic and dedicated team of professionals. Arkastra fosters a culture of collaboration and meritocracy, which emphasizes teamwork and performance rather than tenure or title.
                    </p>
                  </div>
                </div>
              </div>
              <div className="offset-lg-1 col-lg-5">
                <div className="counter-box">
                  <div className="mt-4">
                    <div className="media">
                      <div className="count-box bg-soft-primary text-center">
                        <h3 className="counter-count mb-1 text-color"><span className="counter-value">49</span> <span className="count-plus text-color"> +</span></h3>
                        <p className="text-uppercase text-custom-muted mb-0 f-14 text-left">Employees </p>
                      </div>
                      <div className="media-body pl-4">
                        <p className="text-custom-muted mb-0 mt-3">Aliquam egestas vehicula sapien cibus sit amet rutrum dolor molestie.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3">
                    <div className="media">
                      <div className="count-box bg-soft-primary text-center">
                        <h3 className="counter-count mb-1 text-color"><span className="counter-value">76</span> <span className="count-plus text-color"> +</span></h3>
                        <p className="text-uppercase text-custom-muted mb-0 f-14 text-left">Projects </p>
                      </div>
                      <div className="media-body pl-4">
                        <p className="text-custom-muted mb-0 mt-3">Pellentesque habitant morbi malesuada fames ac turpis egestas.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3">
                    <div className="media">
                      <div className="count-box bg-soft-primary text-center">
                        <h3 className="counter-count mb-1 text-color"><span className="counter-value">99</span> <span className="count-plus text-color"> +</span></h3>
                        <p className="text-uppercase text-custom-muted mb-0 f-14 text-left">CLIENTS </p>
                      </div>
                      <div className="media-body pl-4">
                        <p className="text-custom-muted mb-0 mt-3">Suspendisse congue risus consequat sapien potitor risus tincidunt.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-light bg-features" id="carrer">
          <div className="container">
            <div className="align-items-center row">
              <div className="col-lg-12">
                <div className="mt-4">
                  <h2>Carrers At Arkastra
                    {/* <img src="../../image/acceltrade.png" alt="" height="50" /> */}
                    </h2>
                  <p className="mt-4 text-custom-muted">We are always looking for people who can bring new ideas, insights and experience to our work, helping us to grow and stay ahead of the curve. An opportunity at Arkastra offers the best of both worlds - a chance to work with smart, dedicated and experienced professionals while enjoying a small, flat, collaborative environment where progress is not hampered by hierarchy or bureaucracy.</p>
                  <p className="mt-4 text-custom-muted">
                  We have a number of openings for experienced professionals, as well as new graduates or individuals with advanced degrees. If you would like to apply for an opportunity at Arkastra, please send your resume and cover letter to info@Arkastra.com .
                  </p>            
                  <p className="mt-4 text-custom-muted">Upon receiving your application, we will review your credentials and if you seem to be a good fit, we will schedule one or two phone interviews. If the conversations reveals a mutual interest, we would then arrange for in-person interviews at one of our office locations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Home;