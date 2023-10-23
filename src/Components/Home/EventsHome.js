import React, { useContext, useEffect, useState } from "react";
// import logo2 from "../../assets/images/event/event-img-2.jpg";
// import logo3 from "../../assets/images/event/event-img-3.jpg";
// import logo4 from "../../assets/images/event/event-img-4.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SingleEvent from "./SingleEvent";
import { MyContext } from "../../MyContext";

export default function EventsHome() {
  const { siteData } = useContext(MyContext);
  // console.log(siteData.home.event[0].date);
  // const [sitedata, setSitedate] = useState([]);

  const sitedata = siteData.home.event.map((item) => ({
    date: item.date,
    title: item.title,
    text: item.text,
    image: item.image,
    subtext: item.sub_text,
  }));
  //   setSitedate(data);
  // }, [siteData]);
  return (
    <>
      <section id="upcoming-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="upcoming-event-wrap">
                <div className="up-event-titile">
                  <h3>Upcoming event</h3>
                </div>
                <div className="upcoming-event-content">
                  {/* <!-- No 1 Event --> */}
                  <OwlCarousel className="" items={1} nav center>
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

                    {/* <!-- partial -->
              <!-- No 2 Event --> */}

                    {/* <!-- partial -->
                                <!-- No 3 Event --> */}
                    {/* <div className="single-upcoming-event">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="up-event-thumb">
                            <img
                              src={logo3}
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
                                    data-date="2025/9/10"></div>
                                  <p>Remaining</p>
                                </div>
                                <h3>
                                  <a
                                    href="single-event.html"
                                    className="textUnderRemove">
                                    We are going to arrange a get together!
                                  </a>
                                </h3>
                                <p className="paraBan">
                                  Hello everybody Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna
                                  aliqua. Ut enim and minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquipv
                                  ex ea.
                                </p>
                                <a
                                  href="single-event.html"
                                  className=" btn btn-brand btn-brand-dark">
                                  join with us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </OwlCarousel>
                  {/* <!-- partial --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
