import React, { useContext, useState } from "react";
import img from "../../assets/images/commitie/c1.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MyContext } from "../../MyContext";
import SingleComm from "./SingleComm";
const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: 200 },
};
export default function CommiteAbt() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const { siteData } = useContext(MyContext);
  // const [sitedata, setSitedate] = useState([]);

  // console.log(siteData.committee);

  const sitedata = siteData.committee.map((item) => ({
    image: item.image,
    name: item.name,
    designation: item.designation,
    description: item.description,
  }));
  // setSitedate(data);

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
      <section className="our-honorable-commitee section-padding custmPadding">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="about-page-area-title reltitle">
                <h2 className="styledFont reltitlehead">Our Committee</h2>
              </div>
            </div>
          </div>

          <div className="honorable-committee-list">
            <div className="row">
              {sitedata?.map((item, index) => (
                <SingleComm
                  key={index}
                  image={item.image}
                  name={item.name}
                  designation={item.designation}
                  description={item.description}
                  colLg={`col-lg-4 col-sm-6 comm-${index}`}
                  // colSg={"col-sm-6"}
                />
              ))}

              {/* <div className="col-lg-3 col-sm-6">
                <div className="single-committee-member">
                  <div className="commitee-thumb">
                    <img src={img} className="img-fluid" alt="Committee" />
                  </div>
                  <h3>
                    CARLOS HELU
                    <span className="committee-deg">Vice President</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-committee-member">
                  <div className="commitee-thumb">
                    <img src={img} className="img-fluid" alt="Committee" />
                  </div>
                  <h3>
                    ANGLE TUNI<span className="committee-deg">Secretary</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-committee-member">
                  <div className="commitee-thumb">
                    <img src={img} className="img-fluid" alt="Committee" />
                  </div>
                  <h3>
                    ALEX KALIFA
                    <span className="committee-deg">Asst Secretary</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-committee-member">
                  <div className="commitee-thumb">
                    <img src={img} className="img-fluid" alt="Committee" />
                  </div>
                  <h3>
                    ALEX Tuntuni
                    <span className="committee-deg">Office Secretary</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-committee-member">
                  <div className="commitee-thumb">
                    <img src={img} className="img-fluid" alt="Committee" />
                  </div>
                  <h3>
                    MAL MUHIT
                    <span className="committee-deg">Finance Member</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-committee-member">
                  <div className="commitee-thumb">
                    <img src={img} className="img-fluid" alt="Committee" />
                  </div>
                  <h3>
                    PRINCE RIMON
                    <span className="committee-deg">Committee Member</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-committee-member">
                  <div className="commitee-thumb">
                    <img src={img} className="img-fluid" alt="Committee" />
                  </div>
                  <h3>
                    PRINCE KAMLA
                    <span className="committee-deg">Committee Member</span>
                  </h3>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
