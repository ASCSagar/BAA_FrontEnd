import React, { useContext, useEffect, useState } from "react";
import zoom from "../../assets/images/responsibility/01.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MyContext } from "../../MyContext";
import SingleResp from "./SingleResp";

const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: 100 },
};
export default function RespoHome() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const { siteData } = useContext(MyContext);
  // const [sitedata, setSitedata] = useState([]);

  //   console.log(siteData.responsibility[0].title);

  const sitedata = siteData.home.responsibility.map((item) => ({
    title: item.title,
    image: item.image,
  }));
  //   setSitedata(data);
  // }, [siteData]);

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
      animate={control}>
      <section id="responsibility-area" className="section-padding">
        <div className="container">
          {/* <!--== Section Title Start ==--> */}
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h2>Our Responsibility</h2>
              </div>
            </div>
          </div>
          {/* <!--== Section Title End ==--> */}

          {/* <!--== Responsibility Content Wrapper ==--> */}
          <div className="row text-center ">
            {sitedata?.map((item, index) => (
              <SingleResp key={index} image={item.image} title={item.title} />
            ))}
            {/* <!--== Single Responsibility Start ==--> */}
            {/* <div className="col-lg-3 col-sm-6">
              <div className="single-responsibility">
                <img src={zoom} alt="Responsibility" />
                <h4>Scholarship</h4>
                <p>
                  De create building thinking about your requirment and latest
                  treand on our marketplace area
                </p>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-sm-4">
              <div className="single-responsibility">
                <img src={zoom} alt="Responsibility" />
                <h4>Build Our Community</h4> */}
            {/* <p>
                  De create building thinking about your requirment and latest
                  treand on our marketplace area
                </p> */}
            {/* </div>
            </div> */}
            {/* <!--== Single Responsibility End ==-->

                    <!--== Single Responsibility Start ==--> */}
            {/* <div className="col-lg-3 col-sm-4">
              <div className="single-responsibility">
                <img src={zoom} alt="Responsibility" />
                <h4>Help Bhavanites</h4> */}
            {/* <p>
                  De create building thinking about your requirment and latest
                  treand on our marketplace area
                </p> */}
            {/* </div>
            </div> */}
            {/* <!--== Single Responsibility End ==-->

                    <!--== Single Responsibility Start ==--> */}
            {/* <div className="col-lg-3 col-sm-4">
              <div className="single-responsibility">
                <img src={zoom} alt="Responsibility" />
                <h4>Help Our School</h4> */}
            {/* <p>
                  De create building thinking about your requirment and latest
                  treand on our marketplace area
                </p> */}
            {/* </div>
            </div> */}
            {/* <!--== Single Responsibility End ==-->

                    <!--== Single Responsibility Start ==--> */}

            {/* <!--== Single Responsibility End ==--> */}
          </div>
          {/* <!--== Responsibility Content Wrapper ==--> */}
        </div>
      </section>
    </motion.div>
  );
}
