import React, { useContext } from "react";
import img from "../../assets/images/about-page/about-img-1.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MyContext } from "../../MyContext";
const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: 200 },
};
export default function EventAbt() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const { siteData } = useContext(MyContext);
  // console.log(siteData.about[0].thumbnail);
  const sitedata = siteData.about.about[0];

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
      <section id="page-content-wrap">
        <div className="about-page-content-wrap section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 m-auto mb-100 shadow-soft roundedImg">
                {/* <!-- Single about text start --> */}
                <div className="single-about-text">
                  <span className="year">Our Story</span>
                  <h2 className="h3">
                    The Genesis of BHAVANS ALUMNI ASSOCIATION, VADODARA: A Tale
                    of Unity, Growth, and Resilience
                  </h2>
                  <p className="paraBan">
                    In the crisp autumn of November 2018, nestled amidst the
                    scenic beauty of Seattle, Washington, an idea was born. A
                    simple WhatsApp group named *"ACROSS ALL AGES"* began, not
                    just as a chat platform, but as a haven for Bhavanites
                    around the globe.
                  </p>
                  <p className="paraBan">
                    The group’s mantra? *Inclusivity*. No matter where you were
                    from, which batch you graduated in, or where you currently
                    resided, if you were a Bhavanite, this was home. Imagine
                    moving to a new town, city, or even a country and having the
                    comfort of a fellow Bhavanite right there. A touch of home,
                    a slice of familiarity in an otherwise unfamiliar landscape.
                  </p>
                  <p className="paraBan">
                    Starting modestly, with just shy of 100 members, it would
                    have been hard to foresee the wildfire of connectivity that
                    was to ensue. As the world grappled with the COVID-19
                    pandemic, the group transformed into a beacon of hope and
                    support. Not only did the Bhavanite community rally to
                    provide emotional succor to each other, but they also
                    embarked on educational journeys. Through virtual workshops,
                    they shared knowledge on navigating the treacherous waters
                    of the pandemic.
                  </p>
                  <p className="paraBan">
                    The magic truly began in 2023. From a cozy group of 400,
                    word of mouth, powered by stalwarts and dedicated educators
                    like Archana Khamar, Physics Teacher Shri B M Patel, and the
                    beloved JaiShree Madam, saw the community blossom to over
                    1000 members. Spanning generations, from those who finished
                    school in 1971-72 to fresh faces from 2022, the age range
                    was vast, yet the bond was unmistakable.
                  </p>
                  <p className="paraBan">
                    Recognizing the strength and diversity of this database, the
                    brilliant minds, both senior and junior, united with the
                    unwavering support of the school principal. Their vision? To
                    transform this virtual space into a tangible,
                    institutionalized alumni association. With zeal,
                    perseverance, and the unbreakable spirit of the Bhavanite
                    community, the BHAVANS ALUMNI ASSOCIATION, VADODARA was
                    born.
                  </p>{" "}
                  <p className="paraBan">
                    Here's to the legacy of unity, growth, and resilience.
                    Here's to every Bhavanite who found comfort in this shared
                    space. And here's to the countless more who will.
                  </p>
                </div>
                {/* <!-- Single about text End --> */}

                {/* <!-- Single about text start --> */}
                {/* <div className="single-about-text">
                  <span className="year">1920</span>
                  <img src={img} alt="About" className="img-fluid img-right" />
                  <h2 className="h3">Our First Achivement in History</h2>
                  <p>
                    Aenean viverra rhoncus sspede. Phasellssus leo dolor, tempus
                    non, auctor endrerit quis, nisi. Fusce neque. Donec vitae
                    orci sed dolor rutrum ausssctor. Sed fringilla mauris sit
                    amet nibh.
                  </p>
                  <p>
                    Etiam rhoncus. Ut lddffdfqwqeo. Morbi mollis tellus ac
                    sapien. Fusce fermentum oo nec arcu. Quisque manisl idUt
                    leo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec
                    ante tempus hendrerit. Curabitur at lacus ac velit ornare
                    lobortis. Donec pede justo, fringilla vel, aliquet nec,
                    vulputate eget, arcu. In turpis. Quisque id mi.Aenean
                    viverra rhoncus pede. Phasellus leo dolor, tempus non,
                    auctor endrerit quis, nisi. Fusce neque. Donec vitae orci
                    sed dolor rutrum auctor. Sed fringilla mauris sit amet
                    nibh.Etiam rhoncus. Ut leo. Morbi mollis tellus ac sapien.
                    Fusce fermentum oo nec arcu. Quisque malesuada placerat
                    nisl. Etiam sit amet orci eget faucitincidunt. Quisque
                    rutrum. Pellentesque posuere. Praesent ac massa at ligula
                    laoureet iaculis. Cras risus ipsum, faucibus ut, ullamcorper
                    id, varius ac, leo.
                  </p>
                </div> */}
                {/* <!-- Single about text End --> */}

                {/* <!-- Single about text start --> */}
                {/* <div className="single-about-text">
                  <span className="year">2006</span>
                  <img src={img} alt="About" className="img-fluid img-left" />
                  <h2 className="h3">Our New Genaretion</h2>
                  <p>
                    Aenean viverra rhoncus sspede. Phasellssus leo dolor, tempus
                    non, auctor endrerit quis, nisi. Fusce neque. Donec vitae
                    orci sed dolor rutrum ausssctor. Sed fringilla mauris sit
                    amet nibh.
                  </p>
                  <p>
                    Etiam rhoncus. Ut lddffdfqwqeo. Morbi mollis tellus ac
                    sapien. Fusce fermentum oo nec arcu. Quisque manisl idUt
                    leo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec
                    ante tempus hendrerit. Curabitur at lacus ac velit ornare
                    lobortis. Donec pede justo, fringilla vel, aliquet nec,
                    vulputate eget, arcu. In turpis. Quisque id mi.Aenean
                    viverra rhoncus pede. Phasellus leo dolor, tempus non,
                    auctor endrerit quis, nisi. Fusce neque. Donec vitae orci
                    sed dolor rutrum auctor. Sed fringilla mauris sit amet
                    nibh.Etiam rhoncus. Ut leo. Morbi mollis tellus ac sapien.
                    Fusce fermentum oo nec arcu. Quisque malesuada placerat
                    nisl. Etiam sit amet orci eget faucitincidunt. Quisque
                    rutrum. Pellentesque posuere. Praesent ac massa at ligula
                    laoureet iaculis. Cras risus ipsum, faucibus ut, ullamcorper
                    id, varius ac, leo.
                  </p>
                </div> */}
                {/* <!-- Single about text End --> */}
              </div>
              <div className="col-lg-11 m-auto shadow-soft roundedImg">
                {/* <!-- Single about text start --> */}
                <div className="single-about-text">
                  <span className="year">Vision</span>
                  <img
                    src={sitedata.image}
                    alt="About"
                    className="img-fluid img-left aboutImg"
                  />
                  <h2 className="h3">{sitedata.title}</h2>
                  <p className="paraBan">{sitedata.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
