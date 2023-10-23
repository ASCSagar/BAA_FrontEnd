import React, { useState } from "react";
import logo from "../../assets/images/logo/Baalogo.png";
import { Link } from "react-router-dom";
import apidata from "../../API/api";
export default function FooTer() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const [Error, setError] = useState(false);
  function submitData(e) {
    e.preventDefault();
    // console.log(email);
    const requestData = { email: email };
    apidata("subscriptioncreateview", "post", requestData).then((res) => {
      // console.log(res);
      if (res.status === 200 || res.status === 201) {
        setAlert(true);
      } else {
        setAlert(false);
        setError(true);
      }
      setEmail("");
    });
  }
  return (
    <>
      <footer id="footer-area">
        {/* <!-- Footer Widget Start --> */}
        <div className="footer-widget section-padding">
          <div className="container">
            <div className="row addSpace">
              {/* <!-- Single Widget Start --> */}
              <div className="col-lg-4">
                <div className="single-widget-wrap">
                  <div className="widgei-body">
                    <div className="footer-about">
                      <div>
                        <img src={logo} alt="Logo" className="img-fluid" />
                      </div>
                      <p className="paraBan">
                        "Empowering Bhavans Alumni, Inspiring Excellence, and
                        Fostering Lifelong Connections."
                      </p>
                      <a href="/">Phone: 09925153600</a>
                      {/* <a href="/">Fax: +88474 156 362</a> <br /> */}
                      <a href="/">Email: baavadodara@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Single Widget End -->

                    <!-- Single Widget Start --> */}
              <div className="col-lg-4 ">
                <div className="single-widget-wrap">
                  <h4 className="widget-title">Get In Touch</h4>
                  <div className="widgei-body">
                    <p className="paraBan">
                      For Regular Updates from BAA, Submit your email Below.
                    </p>
                    <div className="newsletter-form">
                      <form id="cbx-subscribe-form">
                        <input
                          name="email"
                          type="email"
                          placeholder="Enter Your Email"
                          id="subscribe"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" onClick={submitData}>
                          <i className="far fa-paper-plane"></i>
                        </button>
                        {alert ? (
                          <p id="cbx-subscribe-form-error">
                            Your Email Submitted Successfully
                          </p>
                        ) : Error ? (
                          <p id="cbx-subscribe-form-error">
                            Enter Correct Email
                          </p>
                        ) : (
                          ""
                        )}
                        <p id="cbx-subscribe-form-error"></p>
                      </form>
                    </div>
                    {/* <div className="footer-social-icons">
                      <a href="/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="/" target="_blank">
                        <i className="fab fa-vimeo-v"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Single Widget End -->

                    <!-- Single Widget Start --> */}
              <div className="col-lg-2">
                <div className="single-widget-wrap">
                  <h4 className="widget-title">Usefull Link</h4>
                  <div className="widgei-body">
                    <ul className="double-list footer-list clearfix">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/event">Event</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      {/* <li>
                          <a href="/">Categories</a>
                        </li>
                        <li>
                          <a href="/">Populer Deal</a>
                        </li>
                        
                        <li>
                          <a href="/">Support</a>
                        </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Single Widget End -->

                    <!-- Single Widget Start --> */}
              {/* <div className="col-lg-2 col-sm-6">
                <div className="single-widget-wrap">
                  <h4 className="widget-title">University</h4>
                  <div className="widgei-body">
                    <ul className="footer-list clearfix">
                      <li>
                        <a href="/">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="/">Categories</a>
                      </li>
                      <li>
                        <a href="/">Populer Deal</a>
                      </li>
                      <li>
                        <a href="/">FAQ</a>
                      </li>
                      <li>
                        <a href="/">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* <!-- Single Widget End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Footer Widget End --> */}

        {/* <!-- Footer Bottom Start --> */}
        {/* <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="footer-bottom-text">
                  <p>© 2023 anantsoftcomputing, All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- Footer Bottom End --> */}
      </footer>
    </>
  );
}
