import React from "react";
import BanGalery from "./BanGalery";
import GalGalery from "./GalGalery";

export default function GalleryPage() {
  return (
    <div id="gallery-v1" className="gallery-page-one" data-style="default">
      <BanGalery />
      <GalGalery />
    </div>
  );
}
