import React, { useContext, useState } from "react";
import zoom from "../../assets/images/zoom-icon.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MyContext } from "../../MyContext";
const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -300 },
};
export default function GalleryHome() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const { siteData } = useContext(MyContext);
  // const [sitedata, setSitedata] = useState();
  // console.log(siteData.image[0].image);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {" "}
      <section id="gallery-area" className="section-padding">
        <div className="container">
          {/* <!--== Section Title Start ==--> */}
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h2>Our gallery</h2>
              </div>
            </div>
          </div>
          {/* <!--== Section Title End ==-->

                <!--== Gallery Container Warpper ==--> */}
          <div className="gallery-content-wrapper">
            <div className="row">
              <div className="col-lg-12">
                {/* <!-- Gallery Menu Start --> */}
                <div className="gallery-menu text-center">
                  <span className="active" data-filter="*">
                    All
                  </span>
                  <span data-filter=".old">Old Memories</span>
                  <span data-filter=".event">Event</span>
                  <span data-filter=".pic">Our Picnic</span>
                  <span
                    className="d-none d-sm-inline-block"
                    data-filter=".recent"
                  >
                    Recent
                  </span>
                </div>
                {/* <!-- Gallery Menu End -->

                            <!-- Gallery Item content Start --> */}
                <div className="row gallery-gird">
                  {/* <!-- Single Gallery Start --> */}
                  <div className="col-lg-3  col-sm-6 recent event">
                    <div className="single-gallery-item gallery-bg-1">
                      <div className="gallery-hvr-wrap">
                        <div className="gallery-hvr-text">
                          <h4>University Cumpus</h4>
                          <p className="gallery-event-date">28 Oct, 2018</p>
                        </div>
                        <a
                          href={siteData.image[0].image}
                          className="btn-zoom image-popup"
                        >
                          <img src={siteData.image[0].image} alt="a" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                  <div className="col-lg-3  col-sm-6 old event pic">
                    <div className="single-gallery-item video gallery-bg-2">
                      <a
                        href={siteData.image[1].image}
                        className="btn btn-video-play video-popup"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                  <div className="col-lg-3  col-sm-6 recent pic">
                    <div className="single-gallery-item gallery-bg-3">
                      <div className="gallery-hvr-wrap">
                        <div className="gallery-hvr-text">
                          <h4>University Cumpus</h4>
                          <p className="gallery-event-date">28 Oct, 2018</p>
                        </div>
                        <a
                          href={siteData.image[2].image}
                          className="btn-zoom image-popup"
                        >
                          <img src={siteData.image[2].image} alt="a" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                  <div className="col-lg-3  col-sm-6 old">
                    <div className="single-gallery-item gallery-bg-4">
                      <div className="gallery-hvr-wrap">
                        <div className="gallery-hvr-text">
                          <h4>University Cumpus</h4>
                          <p className="gallery-event-date">28 Oct, 2018</p>
                        </div>
                        <a
                          href={siteData.image[3].image}
                          className="btn-zoom image-popup"
                        >
                          <img src={siteData.image[3].image} alt="a" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                  <div className="col-lg-3  col-sm-6 pic event">
                    <div className="single-gallery-item gallery-bg-5">
                      <div className="gallery-hvr-wrap">
                        <div className="gallery-hvr-text">
                          <h4>University Cumpus</h4>
                          <p className="gallery-event-date">28 Oct, 2018</p>
                        </div>
                        <a
                          href={siteData.image[5].image}
                          className="btn-zoom image-popup"
                        >
                          <img src={siteData.image[5].image} alt="a" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                  <div className="col-lg-3  col-sm-6 old recent">
                    <div className="single-gallery-item gallery-bg-6">
                      <div className="gallery-hvr-wrap">
                        <div className="gallery-hvr-text">
                          <h4>University Cumpus</h4>
                          <p className="gallery-event-date">28 Oct, 2018</p>
                        </div>
                        <a
                          href={siteData.image[6].image}
                          className="btn-zoom image-popup"
                        >
                          <img src={siteData.image[6].image} alt="a" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Gallery End --> */}

                  {/* <!-- Single Gallery Start --> */}
                  <div className="col-lg-3  col-sm-6 pic">
                    <div className="single-gallery-item video gallery-bg-7">
                      <a
                        href="https://player.vimeo.com/video/181545195?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1&amp;loop=1"
                        className="btn btn-video-play video-popup"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Single Gallery End --> */}

                  {/* <!-- Single Gallery Start --> */}
                  <div className="col-lg-3  col-sm-6 pic recent old">
                    <div className="single-gallery-item gallery-bg-8">
                      <div className="gallery-hvr-wrap">
                        <div className="gallery-hvr-text">
                          <h4>University Cumpus</h4>
                          <p className="gallery-event-date">28 Oct, 2018</p>
                        </div>
                        <a
                          href="assets/images/gallery/gellary-img-8.jpg"
                          className="btn-zoom image-popup"
                        >
                          <img src={siteData.image[7].image} alt="a" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Gallery End --> */}
                </div>
                {/* <!-- Gallery Item content End --> */}
              </div>
            </div>
          </div>
          {/* <!--== Gallery Container Warpper==--> */}
        </div>
      </section>
    </motion.div>
  );
}
