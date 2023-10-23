import React from "react";
import BanNoSide from "./BanNoSide";
import BlogNo from "./BlogNo";

export default function NoSidePage() {
  return (
    <div
      id="bolg-no-sidebar-v1"
      className="bolg-no-sidebar-page-one"
      data-style="default">
      <BanNoSide />
      <BlogNo />
    </div>
  );
}
