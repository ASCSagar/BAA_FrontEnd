import React, { useContext, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from "../../assets/images/testimonial/testi-2.png";
import "../../assets/css/custom.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MyContext } from "../../MyContext";
import SingleTest from "./SingleTest";

const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -300 },
};
export default function TestimonyAbt() {
  const { siteData } = useContext(MyContext);
  // console.log(siteData.about.testimonial);

  const sitedata = siteData.about.testimonial.map((item) => ({
    image: item.image,
    name: item.name,
    post: item.post,
    desc: item.desc,
  }));
  const [testimonialSlide, setTestimonialSlide] = useState(
    window.innerWidth > 776 ? 3 : 1
  );
  const control = useAnimation();
  const [ref, inView] = useInView();

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
      <section className="people-to-say section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="about-page-area-title reltitle">
                <h2 className="styledFont reltitlehead">What Our Alumni Say</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="people-to-say-wrapper">
                {/* <!-- Single People Testimonial --> */}
                <OwlCarousel
                  className=""
                  nav={true}
                  loop
                  items={testimonialSlide}
                  center
                >
                  {sitedata.map((item, index) => (
                    <SingleTest
                      key={index}
                      image={item.image}
                      name={item.name}
                      post={item.post}
                      desc={item.desc}
                    />
                  ))}
                  {/* <!-- Single People Testimonial --> */}

                  {/* <!-- Single People Testimonial --> */}
                  {/* <div className="single-testimonial-wrap marginRight">
                    <div className="people-thumb">
                      <img src={img} alt="" className="img-fluid" />
                    </div>
                    <i className="quote-icon"></i>
                    <p className="paraBan">
                      Exxcellent Lorem ipsum dolor sit amet, ectetur adipisicing
                      elit, sed do eimod tempor inciidunt ut labore et dolorgna
                      aliqua. Ut enim ad minim ostrud.
                    </p>
                    <h4>
                      Akamla Albert
                      <span className="people-deg">Founder at Kamlakana</span>
                    </h4>
                  </div> */}
                  {/* <!-- Single People Testimonial --> */}

                  {/* <!-- Single People Testimonial --> */}
                  {/* <div className="single-testimonial-wrap">
                    <div className="people-thumb">
                      <img src={img} alt="" className="img-fluid" />
                    </div>
                    <i className="quote-icon"></i>
                    <p className="paraBan">
                      Exxcellent Lorem ipsum dolor sit amet, ectetur adipisicing
                      elit, sed do eimod tempor inciidunt ut labore et dolorgna
                      aliqua. Ut enim ad minim ostrud.
                    </p>
                    <h4>
                      Taklo Nahid
                      <span className="people-deg">Minister at Nara</span>
                    </h4>
                  </div> */}
                  {/* <!-- Single People Testimonial --> */}

                  {/* <!-- Single People Testimonial --> */}
                  {/* <div className="single-testimonial-wrap">
                    <div className="people-thumb">
                      <img src={img} alt="" className="img-fluid" />
                    </div>
                    <i className="quote-icon"></i>
                    <p className="paraBan">
                      Exxcellent Lorem ipsum dolor sit amet, ectetur adipisicing
                      elit, sed do eimod tempor inciidunt ut labore et dolorgna
                      aliqua. Ut enim ad minim ostrud.
                    </p>
                    <h4>
                      Mal Muhit
                      <span className="people-deg">Founder at Kamlagiri</span>
                    </h4>
                  </div> */}
                  {/* <!-- Single People Testimonial --> */}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
