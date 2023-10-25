import React, { useEffect, useState } from "react";

export default function SingleEvent({ date, title, text, image, subtext }) {
  const currentDate = new Date();
  const givenDate = new Date(date);

  // Calculate the time difference in milliseconds
  const timeDifference = givenDate - currentDate;
  // Function to calculate the remaining time
  const calculateRemainingTime = (timeDifference) => {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      sec: String(seconds).padStart(2, "0"),
      min: String(minutes).padStart(2, "0"),
      hr: String(hours).padStart(2, "0"),
      days,
    };
  };

  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime(timeDifference)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = givenDate - currentDate;
      setRemainingTime(calculateRemainingTime(timeDifference));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="single-upcoming-event">
        <div className="row">
          <div className="col-lg-5">
            <div className="up-event-thumb">
              <img src={image} className="img-fluid" alt="Upcoming Event" />
              <h4 className="up-event-date">{subtext}</h4>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="display-table">
              <div className="display-table-cell">
                <div className="up-event-text">
                  <div className="event-countdown">
                    <div
                      className="event-countdown-counter"
                      data-date="2024/9/10"
                    >
                      <div className="counter-item">
                        <span className="counter-label">Days</span>
                        <span className="single-cont">
                          {remainingTime.days}
                        </span>
                      </div>
                      <div className="counter-item">
                        <span className="counter-label">Hr</span>
                        <span className="single-cont">{remainingTime.hr}</span>
                      </div>
                      <div className="counter-item">
                        <span className="counter-label">Min</span>
                        <span className="single-cont">{remainingTime.min}</span>
                      </div>
                      <div className="counter-item">
                        <span className="counter-label">Sec</span>
                        <span className="single-cont">{remainingTime.sec}</span>
                      </div>
                    </div>
                    <p>Remaining</p>
                  </div>
                  <h3>
                    <a href="single-event.html" className="textUnderRemove">
                      {title}
                    </a>
                  </h3>
                  <p className="paraBan">{text}</p>
                  <a
                    className="btn btn-brand btn-brand-dark"
                    href={"/baa2/lifetime-membership-registration"}
                    target="_blank" rel="noreferrer"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
