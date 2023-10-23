import React, { useState, useContext } from "react";
import zoom from "../../assets/images/misc/about-bg.jpg";
import { useInViewEffect } from "react-hook-inview";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MyContext } from "../../MyContext";
import { Link } from "react-router-dom";
const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -300 },
};
export default function AboutHome() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const { siteData } = useContext(MyContext);
  // console.log(siteData.home.mission[0].image);
  const sitedata = siteData.home.mission[0];

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
      <section id="about-area" className="section-padding">
        <div className="about-area-wrapper">
          <div className="aboutPosition">
            <img src={sitedata.image} alt="" className="shadow-soft" />
          </div>
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-10  ">
                <div className="about-content-wrap shadow-soft">
                  <div className="section-title text-lg-left">
                    <h2>{sitedata.title}</h2>
                  </div>

                  <div className="about-thumb">
                    <img
                      src={sitedata.image}
                      alt="mission"
                      className="img-fluid shadow-soft"
                    />
                  </div>

                  <p className="paraBan p-2">{sitedata.text}</p>
                  <Link
                    to="/about"
                    className="btn roundedImg shadowBtn about-btn"
                  >
                    know more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
