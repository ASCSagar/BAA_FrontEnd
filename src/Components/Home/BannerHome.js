import React, { useContext, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Banner from "./Banner";
import { MyContext } from "../../MyContext";
// import "../../assets/css/custom.css";

export default function BannerHome() {
  const { siteData } = useContext(MyContext);
  // console.log(siteData.slider[2].image);
  // const [sliderImg, setSliderImg] = useState([]);

  const sliderImg = siteData.slider
    .map((item) => ({
      image: item.image,
      title: item.title,
      text: item.text,
      subtext: item.sub_text,
    }))
    .filter((img) => img.image !== null);
  const socialUrl = siteData.icons[0];

  // console.log(socialUrl);
  return (
    <>
      <section id="slider-area">
        <div className="slider-active-wrap text-center text-md-start">
          <OwlCarousel lazyLoad loop items={1} center>
            {sliderImg.map((item, index) => (
              <Banner
                key={index}
                backgroundImage={item.image}
                title={item.title}
                text={item.text}
                subtext={item.subtext}
              />
            ))}
          </OwlCarousel>
        </div>

        <div className="social-networks-icon">
          <ul>
            <li>
              <a href={socialUrl.facebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
                {/* <span>7.2k Likes</span> */}
              </a>
            </li>
            <li>
              <a href={socialUrl.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
                {/* <span>3.2m Followers</span> */}
              </a>
            </li>
            <li>
              <a href={socialUrl.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
                {/* <span>7.2k Likes</span> */}
              </a>
            </li>
            {/* <li>
              <a href={socialUrl.instagram}>
                <i className="fab fa-youtube"></i> */}
            {/* <span>2.2k Subscribers</span> */}
            {/* </a>
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
}
