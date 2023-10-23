import React from "react";
import { Link } from "react-router-dom";

export default function Banner({ backgroundImage, title, text, subtext }) {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  // console.log(subtext);
  return (
    <>
      <div className="single-slide-wrap slide-bg-1" style={bannerStyle}>
        <div className="container">
          <div className="row rightShift">
            <div className="col-lg-9">
              <div className="slider-content alignLeft">
                {/* <h2>We Are Proud</h2> */}
                <h3>
                  {/* Bhavans Alumni Association */}
                  <span>{title}</span>
                </h3>
                <p className="paraBan">{subtext}</p>
                <div className="slider-btn">
                  <a
                    href="#about-area"
                    className=" btn-brand smooth-scroll textUnderRemove"
                  >
                    our mission
                  </a>
                  <Link to="/about" className="textUnderRemove btn-brand-rev">
                    our story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
