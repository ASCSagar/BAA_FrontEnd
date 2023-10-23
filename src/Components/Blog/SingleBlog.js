import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import img from "../../assets/images/blog/blog-1.jpg";

export default function SingleBlog({ colLg, blogData, headerHide, catData }) {
  const navigate = useNavigate();
  function updateCliData(id) {
    navigate(`/updateblog/${id}`);
  }
  return (
    <>
      {/* {headerHide ? <h3>{catData}</h3> : ""} */}
      <div className={`${colLg} shadow-soft roundedImg`}>
        <article className="single-blog-post p-3">
          <figure className="blog-thumb">
            <div className="blog-thumbnail">
              <img src={blogData?.image} alt="Blog" className="img-fluid " />
            </div>
            {/* <figcaption className="blog-meta clearfix">
          <a href="single-blog.html" className="author">
            <div className="author-pic">
              <img src={img} alt="Author" />
            </div>
            <div className="author-info">
              <h5>Daney williams</h5>
              <p className="paraBan">2 hours Ago</p>
            </div>
          </a>
          <div className="like-comm pull-right">
            <a href="/">
              <i className="fa fa-comment-o"></i>77
            </a>
            <a href="/">
              <i className="fa fa-heart-o"></i>12
            </a>
          </div>
        </figcaption> */}
          </figure>

          <div className="blog-content">
            <h3>
              <Link to={`/blog/${blogData?.id}`}>{blogData?.title} </Link>
            </h3>
            <p
              className="paraBan"
              dangerouslySetInnerHTML={{
                __html: blogData?.text?.slice(0, 250),
              }}
            />
            <Link
              to={`/blog/${blogData?.id}`}
              className="btn roundedImg shadowBtn"
            >
              More
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
