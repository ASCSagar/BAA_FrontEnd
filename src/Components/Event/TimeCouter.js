import React from "react";

export default function TimeCouter() {
  return (
    <>
      <div classNameName="event-countdown">
        <div classNameName="event-countdown-counter" data-date="2024/9/10">
          <div className="container">
            <div className="row">
              <div className="col-sm timerbox">
                <span className="counter-label">hh</span>
                <span className="single-cont">hh</span>
              </div>
              <div className="col-sm">
                <span>mm</span>
              </div>
              <div className="col-sm">
                <span>ss</span>
              </div>
            </div>
          </div>
        </div>
        {/* <br />
        <p>Remaining</p> */}
      </div>
    </>
  );
}
