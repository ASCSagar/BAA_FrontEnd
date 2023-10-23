import React from "react";
import BanBlog from "./BanBlog";
import BlogBlog from "./BlogBlog";

export default function BlogPage() {
  return (
    <div id="blog-page-v1" className="blog-page-one" data-style="default">
      <BanBlog />
      <BlogBlog />
    </div>
  );
}
