import React, { useContext, useEffect, useState } from "react";
import SingleEvent from "../Home/SingleEvent";
import { MyContext } from "../../MyContext";
export default function EventEvent() {
  const { siteData } = useContext(MyContext);
  // console.log(siteData.home.event[0].date);
  const [sitedata, setSitedate] = useState([]);
  useEffect(() => {
    const data = siteData.home.event.map((item) => ({
      date: item.date,
      title: item.title,
      text: item.text,
      image: item.image,
      subtext: item.sub_text,
    }));
    setSitedate(data);
  }, [siteData]);
  return (
    <>
      <section id="page-content-wrap">
        <div className="event-page-content-wrap section-padding">
          <div className="container">
            <div className="row">
              {/* <div className="col-lg-12">
                <div className="event-filter-area">
                  <form
                    action="https://codeboxr.net/themedemo/unialumni/html/index.html"
                    className="form-inline d-flex">
                    <select name="year" id="year">
                      <option selected>Year</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                      <option>2015</option>
                      <option>2014</option>
                    </select>

                    <select name="place" id="place">
                      <option selected>Place</option>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>Arizona</option>
                      <option>Colorado</option>
                      <option>Delaware</option>
                    </select>

                    <select name="type" id="type">
                      <option selected>Type</option>
                      <option>Meetup</option>
                      <option>Seminar</option>
                      <option>Get Together</option>
                    </select>

                    <button className="btn btn-brand">Filter</button>
                  </form>
                </div>
              </div> */}
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="all-event-list">
                  {/* <!-- Single Event Start --> */}
                  {sitedata?.map((item, index) => (
                    <SingleEvent
                      key={index}
                      date={item.date}
                      title={item.title}
                      text={item.text}
                      image={item.image}
                      subtext={item.subtext}
                    />
                  ))}
                  {/* <!-- Single Event End -->

                                <!-- Single Event Start --> */}
                  {/* <div className="single-upcoming-event">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="up-event-thumb">
                          <img
                            src={img}
                            className="img-fluid"
                            alt="Upcoming Event"
                          />
                          <h4 className="up-event-date">
                            It’s 27 February 2023
                          </h4>
                        </div>
                      </div>

                      <div className="col-lg-7">
                        <div className="display-table">
                          <div className="display-table-cell">
                            <div className="up-event-text">
                              <div className="event-countdown">
                                <div
                                  className="event-countdown-counter"
                                  data-date="2024/9/10"></div>
                                <p>Remaining</p>
                              </div>
                              <h3>
                                <a href="single-event.html">
                                  We are going to arrange a get together!
                                </a>
                              </h3>
                              <p>
                                Hello everybody Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim and minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquipv ex
                                ea.
                              </p>
                              <a
                                href="single-event.html"
                                className="btn btn-brand btn-brand-dark">
                                Join with us
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <!-- Single Event End -->

                                <!-- Single Event Start --> */}
                  {/* <div className="single-upcoming-event">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="up-event-thumb">
                          <img
                            src={img}
                            className="img-fluid"
                            alt="Upcoming Event"
                          />
                          <h4 className="up-event-date">
                            It’s 27 February 2023
                          </h4>
                        </div>
                      </div>

                      <div className="col-lg-7">
                        <div className="display-table">
                          <div className="display-table-cell">
                            <div className="up-event-text">
                              <div className="event-countdown">
                                <div
                                  className="event-countdown-counter"
                                  data-date="2024/9/10"></div>
                                <p>Remaining</p>
                              </div>
                              <h3>
                                <a href="single-event.html">
                                  We are going to arrange a get together!
                                </a>
                              </h3>
                              <p>
                                Hello everybody Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim and minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquipv ex
                                ea.
                              </p>
                              <a
                                href="single-event.html"
                                className="btn btn-brand btn-brand-dark">
                                Join with us
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <!-- Single Event End -->

                                <!-- Single Event Start --> */}
                  {/* <div className="single-upcoming-event">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="up-event-thumb">
                          <img
                            src={img}
                            className="img-fluid"
                            alt="Upcoming Event"
                          />
                          <h4 className="up-event-date">
                            It’s 27 February 2023
                          </h4>
                        </div>
                      </div>

                      <div className="col-lg-7">
                        <div className="display-table">
                          <div className="display-table-cell">
                            <div className="up-event-text">
                              <div className="event-countdown">
                                <div
                                  className="event-countdown-counter"
                                  data-date="2024/9/10"></div>
                                <p>Remaining</p>
                              </div>
                              <h3>
                                <a href="single-event.html">
                                  We are going to arrange a get together!
                                </a>
                              </h3>
                              <p>
                                Hello everybody Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim and minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquipv ex
                                ea.
                              </p>
                              <a
                                href="single-event.html"
                                className="btn btn-brand btn-brand-dark">
                                join with us
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <!-- Single Event End --> */}
                </div>
              </div>
            </div>

            {/* <!-- Pagination Start --> */}
            {/* <div className="row">
              <div className="col-lg-12">
                <div className="pagination-wrap text-center">
                  <nav>
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="/">
                          <i className="fa fa-angle-left"></i>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="/">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          ...
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          50
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div> */}
            {/* <!-- Pagination End --> */}
          </div>
        </div>
      </section>
    </>
  );
}
