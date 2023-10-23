import React, { useContext } from "react";
import blog1 from "../../assets/images/blog/blog-1.jpg";
import blog2 from "../../assets/images/blog/blog-2.jpg";
import blog3 from "../../assets/images/blog/blog-3.jpg";
import author from "../../assets/images/blog/author.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SingleBlog from "../Blog/SingleBlog";
import { MyContext } from "../../MyContext";
const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -300 },
};
export default function BlogHome() {
  const { siteData } = useContext(MyContext);
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
      animate={control}>
      <section id="blog-area" className="section-padding">
        <div className="container">
          {/* <!--== Section Title Start ==--> */}
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h2>Know About the Latest Activities</h2>
              </div>
            </div>
          </div>
          {/* <!--== Section Title End ==--> */}

          {/* <!--== Blog Content Wrapper ==--> */}
          <div className="row">
            {/* <!--== Single Blog Post start ==--> */}
            {siteData.blog.map((data, index) => {
              return (
                <SingleBlog
                  key={index}
                  colLg={"col-lg-4 col-md-6"}
                  blogData={data}
                />
              );
            })}
          </div>
          {/* <!--== Blog Content Wrapper ==--> */}
        </div>
      </section>
    </motion.div>
  );
}
