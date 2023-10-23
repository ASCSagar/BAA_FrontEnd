import React from "react";

export default function SingleResp({ image, title }) {
  return (
    <>
      <div className="col-lg-3 col-sm-4">
        <div className="single-responsibility">
          <img src={image} alt="Responsibility" />
          <h4>{title}</h4>
          {/* <p>
                  De create building thinking about your requirment and latest
                  treand on our marketplace area
                </p> */}
        </div>
      </div>
    </>
  );
}
