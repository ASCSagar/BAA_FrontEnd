import React from "react";
import BanRight from "./BanRight";
import BlogRight from "./BlogRight";

export default function RightSidePage() {
  return (
    <div
      id="blog-single-v1"
      className="blog-single-page-one"
      data-style="default">
      <BanRight />
      <BlogRight />
    </div>
  );
}
