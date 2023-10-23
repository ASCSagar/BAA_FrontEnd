import React, { useContext } from "react";
// import img from "../../assets/images/commitie/c2.jpeg";
import SingleComm from "../../Components/About/SingleComm";
import { MyContext } from "../../MyContext";
export default function UpcomCommi() {
  const { siteData } = useContext(MyContext);
  // const [sitedata, setSitedate] = useState([]);

  // console.log(siteData.committee);

  const sitedata = siteData.committee.map((item) => ({
    image: item.image,
    name: item.name,
    designation: item.designation,
    description: item.description,
  }));
  return (
    <>
      <section id="page-content-wrap" style={{ backgroundColor: "#e6e7ee" }}>
        <div className="committee-content-wrap section-padding">
          <div className="committee-member-list">
            <div className="container">
              {/* <div className="row">
                <div className="col-lg-4 col-sm-10 col-md-7 m-auto">
                  <div className="single-committee-member">
                    <img src={img} className="img-fluid" alt="Committee" />
                    <h3>
                      Bryan Watshon{" "}
                      <span className="committee-deg">President</span>
                    </h3>
                  </div>
                </div>
              </div> */}

              <div className="row">
                {sitedata?.map((item, index) => (
                  <SingleComm
                    key={index}
                    image={item.image}
                    name={item.name}
                    designation={item.designation}
                    description={item.description}
                    // colLg={
                    //   index === 0
                    //     ? "col-lg-4 col-sm-10 col-md-7 m-auto"
                    //     : index < 4
                    //     ? "col-lg-4 col-sm-6"
                    //     : "col-lg-3 col-sm-6"
                    // }
                    colLg={`col-lg-4 col-sm-6 comm-${index}`}
                    // colSg={"col-sm-6"}
                  />
                ))}
              </div>

              {/* <div className="row">
                {sitedata?.map((item, index) => (
                  <SingleComm
                    key={index}
                    image={item.image}
                    name={item.name}
                    designation={item.designation}
                    colLg={"col-lg-3"}
                    colSg={"col-sm-6"}
                  />
                ))}
              </div>

              <div className="row">
                {sitedata?.map((item, index) => (
                  <SingleComm
                    key={index}
                    image={item.image}
                    name={item.name}
                    designation={item.designation}
                    colLg={"col-lg-3"}
                    colSg={"col-sm-6"}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
