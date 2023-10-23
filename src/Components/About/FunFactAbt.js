import React from "react";
import img from "../../assets/images/fun-fact/user.svg";

export default function FunFactAbt() {
  return (
    <>
      <section id="funfact-area">
        <div className="container-fluid">
          <div className="row text-center">
            {/* <!--== Single FunFact Start ==--> */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-wrap">
                <div className="funfact-icon">
                  <img src={img} alt="Funfact" />
                </div>
                <div className="funfact-info">
                  <h5 className="funfact-count">4025</h5>
                  <p>Members</p>
                </div>
              </div>
            </div>
            {/* <!--== Single FunFact End ==--> */}

            {/* <!--== Single FunFact Start ==--> */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-wrap">
                <div className="funfact-icon">
                  <img src={img} alt="Funfact" />
                </div>
                <div className="funfact-info">
                  <h5 className="funfact-count">8725</h5>
                  <p>Photos</p>
                </div>
              </div>
            </div>
            {/* <!--== Single FunFact End ==--> */}

            {/* <!--== Single FunFact Start ==--> */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-wrap">
                <div className="funfact-icon">
                  <img src={img} alt="Funfact" />
                </div>
                <div className="funfact-info">
                  <h5>
                    <span className="funfact-count">231</span>+
                  </h5>
                  <p>Events</p>
                </div>
              </div>
            </div>
            {/* <!--== Single FunFact End ==--> */}

            {/* <!--== Single FunFact Start ==--> */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-wrap">
                <div className="funfact-icon">
                  <img src={img} alt="Funfact" />
                </div>
                <div className="funfact-info">
                  <h5>
                    <span className="funfact-count">32</span>+
                  </h5>
                  <p>Awards</p>
                </div>
              </div>
            </div>
            {/* <!--== Single FunFact End ==--> */}
          </div>
        </div>
      </section>
    </>
  );
}
