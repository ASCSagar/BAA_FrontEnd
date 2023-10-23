import React from "react";
import BanLeft from "./BanLeft";
import BlogLeft from "./BlogLeft";

export default function LeftSidePage() {
  return (
    <div
      id="blog-left-sidebar-v1"
      className="blog-left-sidebar-page-one"
      data-style="default">
      <BanLeft />
      <BlogLeft />
    </div>
  );
}
