import React from "react";

export default function SingleTest({ image, name, post, desc }) {
  return (
    <>
      <div className="single-testimonial-wrap">
        <div className="people-thumb">
          <img src={image} alt="Alumni" className="img-fluid" />
        </div>
        <i className="quote-icon"></i>
        <p className="paraBan">{desc}</p>
        <h4>
          {name}
          <span className="people-deg">{post}</span>
        </h4>
      </div>
    </>
  );
}
