import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function EventSingle() {
  return (
    <>
      <section id="page-content-wrap">
        <div className="single-event-page-content section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="single-event-details">
                  <div className="event-thumbnails">
                    <div className="event-thumbnail-carousel">
                      <OwlCarousel
                        className=""
                        loop
                        margin={10}
                        items={1}
                        nav
                        center>
                        <div className="event-thumb-item event-thumb-img-1">
                          <div className="event-meta">
                            <h3>
                              Recently we are going to arrange a awesome get
                              together!
                            </h3>
                            <a className="event-address" href="/">
                              <i className="fa fa-map-marker"></i> Sayidan
                              Street, Gondomanan, 8993, San Francisco, CA
                            </a>
                            <a href="/" className="btn btn-brand btn-join">
                              Join
                            </a>
                          </div>
                        </div>

                        <div className="event-thumb-item event-thumb-img-1">
                          <div className="event-meta">
                            <h3>
                              Recently we are going to arrange a awesome get
                              together!
                            </h3>
                            <a className="event-address" href="/">
                              <i className="fa fa-map-marker"></i> Sayidan
                              Street, Gondomanan, 8993, San Francisco, CA
                            </a>
                            <a href="/" className="btn btn-brand btn-join">
                              Join
                            </a>
                          </div>
                        </div>

                        <div className="event-thumb-item event-thumb-img-1">
                          <div className="event-meta">
                            <h3>
                              Recently we are going to arrange a awesome get
                              together!
                            </h3>
                            <a className="event-address" href="/">
                              <i className="fa fa-map-marker"></i> Sayidan
                              Street, Gondomanan, 8993, San Francisco, CA
                            </a>
                            <a href="/" className="btn btn-brand btn-join">
                              Join
                            </a>
                          </div>
                        </div>
                      </OwlCarousel>
                    </div>
                    <div className="event-countdown">
                      <div
                        className="event-countdown-counter"
                        data-date="2024/10/10"></div>
                      <p>Remaining</p>
                    </div>
                  </div>
                  <h2>Details all Thing About This Event</h2>
                  <p>
                    Aenean viverra rhoncus pede. Phasellus leo dolor, tempus
                    non, auctor endrerit quis, nisi. Fusce neque. Donec vitae
                    orci sed dolor rutrum auctor. Sed ngilla mauris sit amet
                    nibhr, tempus non, auctor endrerit quis, nisi..
                  </p>

                  <p>
                    Etiam rhoncus. Ut leo. Morbi mollis tellus ac sapien. Fusce
                    fermentum oo nec arcu. Quisque malesuada placerat nisl.
                    Etiam sit amet orci eget faucitincidunt. Quisque rutrum.
                    Pellentesque posuere. Praesent ac massa at ligula laoureet
                    iaculis. Cras risus ipsum, faucibus ut, ullamcorper id,
                    varius ac, leo.Ut a nisl id Etiam rhoncus. Ut leo. Morbi
                    mollis tellus ac sapien. Fusce fermentum oo nec ante tempus
                    hendrerit. Curabitur at lacus ac velit ornare lobortis.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In turpis. Quisque id mi.
                  </p>
                  <div className="event-schedul">
                    <h3>Event Schedule</h3>

                    <div className="row justify-content-center">
                      <div className="col-md-10">
                        <div
                          className="accordion cbx-acacordion"
                          id="cbx-event-accordion">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne">
                                <span className="event-time">8am - 10am</span>{" "}
                                Grand Opening Speech of Our Event And Re
                                Introductory episode
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#cbx-event-accordion">
                              <div className="accordion-body">
                                <p>
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica,
                                  craft beer labore wes anderson cred nesciunt
                                  sapiente ea proident.
                                </p>
                                <p>
                                  Ad vegan excepteur butcher vice lomo. Leggings
                                  occaecat craft beer farm-to-table, raw denim
                                  aesthetic synth nesciunt you probably haven't
                                  heard of them accusamus labore sustainable
                                  VHS.
                                </p>
                                <h4 className="speaker-name">
                                  <strong>Speaker:</strong> Adam Watshon,
                                  <span className="speaker-deg">
                                    Crish Joshef
                                  </span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo">
                                <span className="event-time">11am - 2pm</span>{" "}
                                Grand Opening Speech of Our Event And Re
                                Introductory episode
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#cbx-event-accordion">
                              <div className="accordion-body">
                                <p>
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica,
                                  craft beer labore wes anderson cred nesciunt
                                  sapiente ea proident.
                                </p>
                                <p>
                                  Ad vegan excepteur butcher vice lomo. Leggings
                                  occaecat craft beer farm-to-table, raw denim
                                  aesthetic synth nesciunt you probably haven't
                                  heard of them accusamus labore sustainable
                                  VHS.
                                </p>
                                <h4 className="speaker-name">
                                  <strong>Speaker:</strong> Adam Watshon,
                                  <span className="speaker-deg">
                                    Crish Joshef
                                  </span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree">
                                <span className="event-time">2am - 5pm</span>{" "}
                                Grand Opening Speech of Our Event And Re
                                Introductory episode
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#cbx-event-accordion">
                              <div className="accordion-body">
                                <p>
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica,
                                  craft beer labore wes anderson cred nesciunt
                                  sapiente ea proident.
                                </p>
                                <p>
                                  Ad vegan excepteur butcher vice lomo. Leggings
                                  occaecat craft beer farm-to-table, raw denim
                                  aesthetic synth nesciunt you probably haven't
                                  heard of them accusamus labore sustainable
                                  VHS.
                                </p>
                                <h4 className="speaker-name">
                                  <strong>Speaker:</strong> Adam Watshon,
                                  <span className="speaker-deg">
                                    Crish Joshef
                                  </span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
