import React from "react";
import img from "../../assets/images/careerbg.png";

export default function CarCareer() {
  return (
    <>
      <section id="page-content-wrap">
        <div className="career-page-wrapper">
          <div className="career-page-topbg">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 m-auto">
                  <img src={img} className="img-fluid" alt="career" />
                </div>
              </div>
            </div>
          </div>

          <div className="career-page-content-wrap section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="event-filter-area">
                    <form
                      action="https://codeboxr.net/themedemo/unialumni/html/index.html"
                      className="form-inline d-flex">
                      <select name="cat" id="year">
                        <option selected>Categories</option>
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
                </div>
              </div>

              <div className="job-opportunity-wrapper">
                <div className="row">
                  {/* <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img src={img} alt="Job" />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="/">
                            Urgently Need Five Data Center Specialist
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="/">[...]</a>
                        </p>
                      </div>
                      <a href="/" className="btn btn-job">
                        Apply now
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==--> */}

                  {/* <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img src={img} alt="Job" />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="/">
                            Urgently Need Five Data Center Specialist
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="/">[...]</a>
                        </p>
                      </div>
                      <a href="/" className="btn btn-job">
                        Apply now
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==--> */}

                  {/* <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img src={img} alt="Job" />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="/">
                            Urgently Need Five Data Center Specialist
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="/">[...]</a>
                        </p>
                      </div>
                      <a href="/" className="btn btn-job btn-expired disabled">
                        Expired
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==-->

                                <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img src={img} alt="Job" />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="/">
                            Urgently Need Five Data Center Specialist
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="/">[...]</a>
                        </p>
                      </div>
                      <a href="/" className="btn btn-job">
                        Apply now
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==-->

                                <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img src={img} alt="Job" />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="/">
                            Urgently Need Five Data Center Specialist
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="/">[...]</a>
                        </p>
                      </div>
                      <a href="/" className="btn btn-job btn-expired disabled">
                        Expired
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==-->

                                <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img src={img} alt="Job" />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="/">
                            Urgently Need Five Data Center Specialist
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="/">[...]</a>
                        </p>
                      </div>
                      <a href="/" className="btn btn-job">
                        Apply now
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==-->

                                <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img src={img} alt="Job" />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="/">
                            Urgently Need Five Data Center Specialist
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="/">[...]</a>
                        </p>
                      </div>
                      <a href="/" className="btn btn-job">
                        Apply now
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==-->

                                <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img src={img} alt="Job" />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="/">
                            Urgently Need Five Data Center Specialist
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="/">[...]</a>
                        </p>
                      </div>
                      <a href="/" className="btn btn-job btn-expired disabled">
                        Expired
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==-->

                                <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img src={img} alt="Job" />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="/">
                            Urgently Need Five Data Center Specialist
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="/">[...]</a>
                        </p>
                      </div>
                      <a href="/" className="btn btn-job">
                        Apply now
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==--> */}
                </div>

                {/* <!-- Pagination Start --> */}
                <div className="row">
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
                </div>
                {/* <!-- Pagination End --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
