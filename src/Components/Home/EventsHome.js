import React, { useContext } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SingleEvent from "./SingleEvent";
import { MyContext } from "../../MyContext";

export default function EventsHome() {
  const { siteData } = useContext(MyContext);

  const sitedata = siteData.home.event.map((item) => ({
    date: item.date,
    title: item.title,
    text: item.text,
    image: item.image,
    subtext: item.sub_text,
  }));
 
  return (
    <>
      <section id="upcoming-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="upcoming-event-wrap">
                <div className="up-event-titile">
                  <h3>Upcoming event</h3>
                </div>
                <div className="upcoming-event-content">
                  <OwlCarousel className="" items={1} nav center>
                    {sitedata?.map((item, index) => (
                      <SingleEvent
                        key={index}
                        date={item.date}
                        title={item.title}
                        text={item.text}
                        image={item.image}
                        subtext={item.subtext}
                      />
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
