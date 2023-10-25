import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: 200 },
};
export default function ActionHome() {
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
      <section id="scholership-promo">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="scholership-promo-text">
                <h2>
                  Register for Life Time Bhavans Alumni Association Membership
                </h2>
                <p>
                  Enable yourself to harness the power of your alumni network.
                </p>
                <a
                  className="btn btn-brand scholarBtn"
                  href="/baa2/lifetime-membership-registration"
                  target="_blank"
                  rel="noreferrer"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
