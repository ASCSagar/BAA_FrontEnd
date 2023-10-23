import React, { useContext } from "react";
import { MyContext } from "../../MyContext";

export default function FaqPage() {
  const { siteData } = useContext(MyContext);
  return (
    <>
      <section className="faq section-padding">
        <div className="container ">
          {/* <!--== Section Title Start ==--> */}
          <div className="row">
            {/* <div className="row"> */}
            <div className="col-lg-12">
              <h3 className="text-center">Frequently Asked Questions</h3>
              <div className="accordion my-4" id="accordionExample">
                {siteData.faq?.map((data) => {
                  return (
                    <div className="accordion-item shadow-soft shadow-soft">
                      <h2 className="accordion-header" id={`heading${data.id}`}>
                        <button
                          className="accordion-button h6"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${data.id}`}
                          aria-expanded="true"
                          aria-controls={`collapse${data.id}`}
                        >
                          {data.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${data.id}`}
                        className="accordion-collapse collapse show"
                        aria-labelledby={`heading${data.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body paraBan">
                          {data.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
