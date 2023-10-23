import React from "react";
import BannerAbt from "./BannerAbt";
import EventAbt from "./EventAbt";
// import FunFactAbt from "./duplicate";
import CommiteAbt from "./CommiteAbt";
import TestimonyAbt from "./TestimonyAbt";
import FunFactHome from "../Home/FunFactHome";

export default function AboutPage() {
  return (
    <div id="about-v1" className="aboute-page-one" data-style="default">
      <BannerAbt />
      <EventAbt />
      <FunFactHome />
      <CommiteAbt />
      {/* <TestimonyAbt /> */}
    </div>
  );
}
