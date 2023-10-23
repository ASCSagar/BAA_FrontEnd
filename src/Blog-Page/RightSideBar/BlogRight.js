import React from "react";
import img from "../../assets/images/blog/single-blog.jpg";
export default function BlogRight() {
  return (
    <>
      <div id="page-content-wrap">
        <div className="blog-page-content-wrap section-padding">
          <div className="container">
            <div className="row">
              {/* <!-- Blog content Area Start --> */}
              <div className="col-lg-8">
                <article className="single-blog-content-wrap">
                  <header className="article-head">
                    <div className="single-blog-thumb">
                      <img src={img} className="img-fluid" alt="Blog" />
                    </div>
                    <div className="single-blog-meta">
                      <h2>Awesome Article for Memory of Our Campus Life</h2>
                      <div className="posting-info">
                        <a href="/">23 May 2017</a> • Posted by:{" "}
                        <a href="/">Admin</a>
                      </div>
                    </div>
                  </header>
                  <section className="blog-details">
                    <p>
                      Lorem ipsum condimentum ligula. Fusce fringilla magna non
                      sapien dictum, eget faucibus dui maximus. Donec fringilla
                      vel mi consequat tempor.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam quis diam erat. Duvelit lecspoe a blandit sit amet,
                      tempor at lorem. Donec ultricies, lorem sed ultrices
                      interdum, leo luctfiiius sem, vel vulputate diam ipsum sed
                      lorem. Donec tempor arcu nisl, et molestie massa hhisque
                      ut. Nunc at rutrum leo. Mauris metus mauris, tridd.
                    </p>
                    <p>
                      Mauris tempus erat laoreet turpis lobortis, eu tincidunt
                      erat fermentum. Aliquam nonh edunt urna. Integer tincidunt
                      nec nisl vitae ullamcorper. Proin sed ultrices erat.
                      Praesent vdd warius ultricemassa at faucibus. Aenean
                      dignissim, orci sed faucibus pharetra, dui mi dir ssim
                      tortor, sit amet ntum mi ligula sit amet augue.
                      Pellentesqs placerat.
                    </p>
                    <img src={img} className="img-fluid" alt="Blog" />
                    <div className="row">
                      <div className="col-lg-6">
                        <h5>The Guest Series</h5>
                        <p>
                          Mauris tempus erat laoreet turpis lobortis, eu
                          tincidunt erat fermentum. Aliquam non tidunt urna.
                          Integer tincidunt nec nisl vitae Proin sed ultrices
                          erat.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <h5>How and why</h5>
                        <p>
                          Aenean dignissim, orci sed faucibus nissim tortor, sit
                          amet condimentum mi ligula sit amet augue.
                        </p>
                      </div>
                    </div>
                    <blockquote className="blockquote">
                      Integer tincidunt nec nisl vitae ullamcorper. Proin sed
                      ultrices erat. Praesent varius ultrices massa at faucibus.
                    </blockquote>
                  </section>
                  <footer className="post-share">
                    <div className="row no-gutters ">
                      <div className="col-8">
                        <div className="shareonsocial">
                          <span>Share:</span>
                          <a href="/">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="/">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="/">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="/">
                            <i className="fab fa-vimeo"></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-4 text-end">
                        <div className="post-like-comm">
                          <a href="/">
                            <i className="far fa-thumbs-up"></i>20
                          </a>
                          <a href="/">
                            <i className="far fa-comments"></i>15
                          </a>
                        </div>
                      </div>
                    </div>
                  </footer>
                </article>
              </div>
              {/* <!-- Blog content Area End --> */}

              {/* <!-- Sidebar Area Start --> */}
              <div className="col-lg-4 order-first order-lg-last">
                <div className="sidebar-area-wrap">
                  {/* <!-- Single Sidebar Start --> */}
                  <div className="single-sidebar-wrap">
                    <div className="brand-search-form">
                      <form action="https://codeboxr.net/themedemo/unialumni/html/index.html">
                        <input type="search" placeholder="Type and hit here" />
                        <button type="button">
                          <i className="fa fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* <!-- Single Sidebar End --> */}

                  {/* <!-- Single Sidebar Start --> */}
                  <div className="single-sidebar-wrap">
                    <h4 className="sidebar-title">Categories</h4>
                    <div className="sidebar-body">
                      <ul className="brand-unorderlist">
                        <li>
                          <a href="/">Scholership</a>
                        </li>
                        <li>
                          <a href="/">Alumni</a>
                        </li>
                        <li>
                          <a href="/">Events</a>
                        </li>
                        <li>
                          <a href="/">Member</a>
                        </li>
                        <li>
                          <a href="/">Tour</a>
                        </li>
                        <li>
                          <a href="/">Current Student</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Single Sidebar End --> */}

                  {/* <!-- Single Sidebar Start --> */}
                  <div className="single-sidebar-wrap d-none d-lg-block">
                    <h4 className="sidebar-title">Popular Tags</h4>
                    <div className="sidebar-body">
                      <div className="tags">
                        <a href="/">Bootstrap</a>
                        <a href="/">Design</a>
                        <a href="/">web</a>
                        <a className="active" href="/">
                          custom
                        </a>
                        <a href="/">wordpres</a>
                        <a href="/">Art</a>
                        <a href="/">our team</a>
                        <a href="/">classNameic</a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Sidebar End --> */}
                </div>
              </div>
              {/* <!-- Sidebar Area End --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
