import React from "react";
import BannerHome from "./BannerHome";
import EventsHome from "./EventsHome";
import AboutHome from "./AboutHome";
import RespoHome from "./RespoHome";
import FunFactHome from "./FunFactHome";
import GalleryHome from "./GalleryHome";
import ActionHome from "./ActionHome";
import BlogHome from "./BlogHome";

export default function HomePage() {
  return (
    <div id="home-v1" className="home-page-one" data-style="default">
      <BannerHome />
      <EventsHome />
      <AboutHome />
      <RespoHome />
      <FunFactHome />
      <GalleryHome />
      <ActionHome />
      <BlogHome />
    </div>
  );
}
