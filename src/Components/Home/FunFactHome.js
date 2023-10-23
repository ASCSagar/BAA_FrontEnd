import React from "react";
import zoom from "../../assets/images/fun-fact/user.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -300 },
};

export default function FunFactHome() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  useEffect(() => {
    const el = document.querySelector("#funfact-area");

    el.addEventListener("mousemove", (e) => {
      el.style.backgroundPositionX = -e.offsetX + "px";
      el.style.backgroundPositionY = -e.offsetY + "px";
    });
  }, []);
  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <section id="funfact-area">
        <div className="container-fluid">
          <div className="row text-center">
            {/* <!--== Single FunFact Start ==--> */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-wrap">
                <div className="funfact-icon">
                  <img src={zoom} alt="Funfact" />
                </div>
                <div className="funfact-info">
                  <h5 className="funfact-count">300+</h5>
                  <p>Members</p>
                </div>
              </div>
            </div>
            {/* <!--== Single FunFact End ==-->

                    <!--== Single FunFact Start ==--> */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-wrap">
                <div className="funfact-icon">
                  <img src={zoom} alt="Funfact" />
                </div>
                <div className="funfact-info">
                  <h5 className="funfact-count">100+</h5>
                  <p>Memories</p>
                </div>
              </div>
            </div>
            {/* <!--== Single FunFact End ==-->

                    <!--== Single FunFact Start ==--> */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-wrap">
                <div className="funfact-icon">
                  <img src={zoom} alt="Funfact" />
                </div>
                <div className="funfact-info">
                  <h5>
                    <span className="funfact-count">1</span>+
                  </h5>
                  <p>Events</p>
                </div>
              </div>
            </div>
            {/* <!--== Single FunFact End ==-->

                    <!--== Single FunFact Start ==--> */}
            {/* <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-wrap">
                <div className="funfact-icon">
                  <img src={zoom} alt="Funfact" />
                </div>
                <div className="funfact-info">
                  <h5>
                    <span className="funfact-count">32</span>+
                  </h5>
                  <p>Awards</p>
                </div>
              </div>
            </div> */}
            {/* <!--== Single FunFact End ==--> */}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
