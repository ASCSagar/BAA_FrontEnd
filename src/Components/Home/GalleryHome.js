import React, { useContext } from "react";
import zoom from "../../assets/images/zoom-icon.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MyContext } from "../../MyContext";
import { Link } from "react-router-dom";
import WSPGallery from "../Gallery/WSPGallery";
const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -300 },
};
export default function GalleryHome() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const { siteData } = useContext(MyContext);

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
                  {siteData.category.map((cat, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/gallery/${cat.id}`}
                        className="shadowBtn"
                      >
                        {cat.name}
                      </Link>
                    );
                  })}
                </div>
                {/* <!-- Gallery Menu End -->

                            <!-- Gallery Item content Start --> */}
                <div className="row gallery-gird">
                  {/* <!-- Single Gallery Start --> */}
                  <WSPGallery galleryImages={siteData.image} isItHome={true} />
                  {/* {siteData.image.map((img) => {
                    return (
                      <div className="col-lg-3  col-sm-6 recent event">
                        <div className="single-gallery-item gallery-bg-1">
                          <div className="gallery-hvr-wrap">
                            <div className="gallery-hvr-text">
                              <h4>{img.text}</h4>
                            </div>
                            <a
                              href={img.image}
                              className="btn-zoom image-popup"
                            >
                              <img src={img.image} alt="a" />
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })} */}

                  {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                  {/* <div className="col-lg-3  col-sm-6 old event pic">
                    <div className="single-gallery-item video gallery-bg-2">
                      <a
                        href="https://player.vimeo.com/video/140182080?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1&amp;loop=1"
                        className="btn btn-video-play video-popup"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </div> */}
                  {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                  {/* <div className="col-lg-3  col-sm-6 recent pic">
                    <div className="single-gallery-item gallery-bg-3">
                      <div className="gallery-hvr-wrap">
                        <div className="gallery-hvr-text">
                          <h4>University Cumpus</h4>
                          <p className="gallery-event-date">28 Oct, 2018</p>
                        </div>
                        <a
                          href="assets/images/gallery/gellary-img-3.jpg"
                          className="btn-zoom image-popup"
                        >
                          <img src={zoom} alt="a" />
                        </a>
                      </div>
                    </div>
                  </div> */}
                  {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                  {/* <div className="col-lg-3  col-sm-6 old">
                    <div className="single-gallery-item gallery-bg-4">
                      <div className="gallery-hvr-wrap">
                        <div className="gallery-hvr-text">
                          <h4>University Cumpus</h4>
                          <p className="gallery-event-date">28 Oct, 2018</p>
                        </div>
                        <a
                          href="assets/images/gallery/gellary-img-4.jpg"
                          className="btn-zoom image-popup"
                        >
                          <img src={zoom} alt="a" />
                        </a>
                      </div>
                    </div>
                  </div> */}
                  {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                  {/* <div className="col-lg-3  col-sm-6 pic event">
                    <div className="single-gallery-item gallery-bg-5">
                      <div className="gallery-hvr-wrap">
                        <div className="gallery-hvr-text">
                          <h4>University Cumpus</h4>
                          <p className="gallery-event-date">28 Oct, 2018</p>
                        </div>
                        <a
                          href="assets/images/gallery/gellary-img-5.jpg"
                          className="btn-zoom image-popup"
                        >
                          <img src={zoom} alt="a" />
                        </a>
                      </div>
                    </div>
                  </div> */}
                  {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                  {/* <div className="col-lg-3  col-sm-6 old recent">
                    <div className="single-gallery-item gallery-bg-6">
                      <div className="gallery-hvr-wrap">
                        <div className="gallery-hvr-text">
                          <h4>University Cumpus</h4>
                          <p className="gallery-event-date">28 Oct, 2018</p>
                        </div>
                        <a
                          href="assets/images/gallery/gellary-img-6.jpg"
                          className="btn-zoom image-popup"
                        >
                          <img src={zoom} alt="a" />
                        </a>
                      </div>
                    </div>
                  </div> */}
                  {/* <!-- Single Gallery End --> */}

                  {/* <!-- Single Gallery Start --> */}
                  {/* <div className="col-lg-3  col-sm-6 pic">
                    <div className="single-gallery-item video gallery-bg-7">
                      <a
                        href="https://player.vimeo.com/video/181545195?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1&amp;loop=1"
                        className="btn btn-video-play video-popup"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </div> */}
                  {/* <!-- Single Gallery End --> */}

                  {/* <!-- Single Gallery Start --> */}
                  {/* <div className="col-lg-3  col-sm-6 pic recent old">
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
                          <img src={zoom} alt="a" />
                        </a>
                      </div>
                    </div>
                  </div> */}
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
