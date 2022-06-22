import React, { Component } from 'react';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Collapse } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';
import Header from '../component/Header';
import "../assets/css/scss/home.scss";
import Footer from '../component/Footer';


const images = [
  { url: "../../image/banner1.png" },
  { url: "../../image/banner2.png" },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleB = this.toggleB.bind(this);
    this.toggleC = this.toggleC.bind(this);
    this.state = {
      collapseA: false,
      collapseB: false,
      collapseC: false,
    };
  }

  toggle() {
    this.setState({
      collapseA: !this.state.collapseA,
    });
  }
  toggleB() {
    this.setState({
      collapseB: !this.state.collapseB,
    });
  }
  toggleC() {
    this.setState({
      collapseC: !this.state.collapseC,
    });
  }

  render() {
    console.log("check", isBrowser)
    return (
      <div>
        <Header />
        <section className="padding-top" id="home">
          <div className="col-lg-12 text-center m-0 p-0">
            <Carousel showArrows={true} showStatus={false} showThumbs={false} dynamicHeight={true} autoPlay={true} interval={1000}>
              <div>
                <img src="../../image/banner1.png" className="carouel-image" />
              </div>
              <div>
                <img src="../../image/banner2.png" className="carouel-image" />
              </div>
            </Carousel>
          </div>
          <div className="col-md-8 tp-parallax-wrap">
            <div className="home-content">
              <h1 className="home-title mt-4 text-white h6">Proper Buisness For Success</h1>
              {/* <p className="text-custom-muted mt-4 f-20 text-white custom-font">
                We combine cutting-edge technology with analytical rigour and insightful research to invest in global financial markets. Our team, led by the best engineers, scientists and trading professionals from a variety of backgrounds specializes in systematic investment strategies across geographies and asset classes. As we pursue new markets and opportunities, we also foster a culture of collaboration, innovation and excellence.</p>
              <div className="mt-4 pt-2"><a className="btn btn-primary mr-3" href="/">Contact Us</a></div> */}
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
                <div className="mt-4">
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
              <div className="col-lg-5">
                <img src="../../image/about-us.jpeg" className="about-us-img" />
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-light bg-features" id="carrer">
          <div className="container">
            <div className="align-items-center row">
              <div className="col-lg-12">
                <div className="mt-4">
                  <h2>Carrers At Arkastra</h2>
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
        <section id="carrer">
          <div className="container">
            <div className="align-items-center">
              <div className="mt-4">
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">JOBS</h3>
                </div>
                <div className="mt-5">
                  <h3 className="custom-link">Software Developer - <small>Bangalore, Karnataka, India - SD-01</small></h3>
                  <p className="pt-1 mb-0 text-custom-muted text-justify">
                    Arkastra is a technology-driven Proprietary trading firm that specializes in systematic alpha research and electronic market-making on various exchanges. We trade across a multitude of asset classes and trading venues with significant market share. We are looking to appoint a
                    <strong> Junior Quantitative Researcher/Trader</strong>.
                  </p>
                  <p className="pt-0 text-custom-muted text-justify">Arkastra is an equal opportunity employer.</p>
                </div>
                <div>
                  <Card>
                    <CardTitle className="mb-0 rounded cursor" style={{ backgroundColor: "#fafafa" }} onClick={this.toggle} >
                      <p className="px-2 py-2 mb-0 text-custom-muted">Requirements</p>
                    </CardTitle>
                    <Collapse isOpen={this.state.collapseA}>
                      <CardBody className="px-2 py-2">
                        <p className="px-2 py-2 mb-0 text-custom-muted">
                          Arkastra encourages bachelor’s, and master’s students in computer science, mathematics and related fields to apply. Additional requirements include:
                        </p>
                        <div className="mt-3">
                          <ul>
                            <li><p className="mb-0 text-custom-muted">Deep experience in HF Trading</p></li>
                            <li><p className="mb-0 text-custom-muted">Live HF Trading experience for at least 1-2 years.</p></li>
                            <li><p className="mb-0 text-custom-muted">Taking pride in building solutions using Python, R, kdb+ or C++ </p></li>
                            <li><p className="mb-0 text-custom-muted">Desire to work in a small collaborative environment</p></li>
                            <li><p className="mb-0 text-custom-muted">Degree from Top tier college or university a plus</p></li>
                            <li><p className="mb-0 text-custom-muted">A passion for new technologies and ideas</p></li>
                            <li><p className="mb-0 text-custom-muted">Strong communication skills</p></li>
                          </ul>
                        </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mt-3">
                    <CardTitle className="mb-0 rounded cursor" style={{ backgroundColor: "#fafafa" }} onClick={this.toggleB} >
                      <p className="px-2 py-2 mb-0 text-custom-muted">Benefits</p>
                    </CardTitle>
                    <Collapse isOpen={this.state.collapseB}>
                      <CardBody className="px-2 py-2">
                        <p className="px-2 py-2 mb-0 text-custom-muted">
                          Arkastra is a place of friends and colleagues, where people convert their passion into action. We believe in togetherness and that bring out the best in ourselves and our Company. Our open and casual work culture gives you the space to innovate and deliver.  Everyone on the team is approachable.
                        </p>
                        <p className="px-2 mb-0 text-custom-muted">
                          Employee remuneration packages are reviewed regularly to ensure that they remain competitive. In recognition of our employees’ contributions and performance, we provide:
                        </p>
                        <div className="">
                          <ul>
                            <li><p className="mb-0 text-custom-muted">Bonus</p></li>
                            <li><p className="mb-0 text-custom-muted">Profit sharing</p></li>
                          </ul>
                        </div>
                        <p className="px-2 pt-3 mb-0 text-custom-muted">
                          Our perks have you covered.
                        </p>
                        <div className="">
                          <ul>
                            <li><p className="mb-0 text-custom-muted">Competitive compensation</p></li>
                            <li><p className="mb-0 text-custom-muted">4 Weeks of paid vacation</p></li>
                            <li><p className="mb-0 text-custom-muted">Medical insurance</p></li>
                            <li><p className="mb-0 text-custom-muted">International team outing</p></li>
                          </ul>
                        </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mt-3">
                    <CardTitle className="mb-0 rounded cursor" style={{ backgroundColor: "#fafafa" }} onClick={this.toggleC} >
                      <p className="px-2 py-2 mb-0 text-custom-muted">Responsibilities</p>
                    </CardTitle>
                    <Collapse isOpen={this.state.collapseC}>
                      <CardBody className="px-2 py-2">
                        <p className="px-2 py-2 mb-0 text-custom-muted">
                          Day-to-day work includes (but not limited to):
                        </p>
                        <div className="">
                          <ul>
                            <li><p className="mb-0 text-custom-muted">Designing, developing, and testing proprietary software including</p></li>
                            <li><p className="mb-0 text-custom-muted">Low-latency high-throughput exchange connectivity layers</p></li>
                            <li><p className="mb-0 text-custom-muted">Distributed computation optimized backtesting and simulation systems capable of handling terabytes of data</p></li>
                            <li><p className="mb-0 text-custom-muted">Risk systems with real-time trade management and risk analysis</p></li>
                            <li><p className="mb-0 text-custom-muted">dentifying complex problems, coming up with innovative solutions, and communicating them with your team to advocate their implementation</p></li>
                            <li><p className="mb-0 text-custom-muted">Collaboration with other software developers, quantitative traders, and researchers in cross-functional team environments</p></li>
                          </ul>
                        </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <div className="py-5">
                    <Button variant="contained" color="primary" size="large">
                      Apply Now
                    </Button>
                  </div>
                </div>
                <div>
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