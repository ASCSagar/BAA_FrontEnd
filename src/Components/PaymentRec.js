import React from "react";
import img1 from "../assets/images/payment/WhatsApp Image 2023-08-14 at 4.08.47 PM.jpeg";
import img2 from "../assets/images/payment/WhatsApp Image 2023-08-14 at 4.09.03 PM.jpeg";
import img3 from "../assets/images/payment/WhatsApp Image 2023-08-14 at 4.09.34 PM.jpeg";
import img4 from "../assets/images/payment//WhatsApp Image 2023-08-14 at 4.09.46 PM.jpeg";

import img5 from "../assets/images/payment/WhatsApp Image 2023-08-14 at 4.09.59 PM.jpeg";

export default function PaymentRec() {
  return (
    <>
      <div className="container mt-3">
        <div className="row ">
          <div className="col-lg-4 mb-3">
            {" "}
            <img src={img1} alt="" className="payRecipt" />
          </div>
          <div className="col-lg-4 mb-3">
            {" "}
            <img src={img2} alt="" className="payRecipt" />
          </div>
          <div className="col-lg-4 mb-3">
            {" "}
            <img src={img3} alt="" className="payRecipt" />
          </div>
          <div className="col-lg-4 mb-3">
            {" "}
            <img src={img4} alt="" className="payRecipt" />
          </div>
          <div className="col-lg-4 mb-3">
            {" "}
            <img src={img5} alt="" className="payRecipt" />
          </div>
        </div>
      </div>
    </>
  );
}
