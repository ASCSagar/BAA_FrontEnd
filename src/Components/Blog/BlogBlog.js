import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import apidata from "../../API/api";
import Pagination from "../Pagination/Pagination";
import IsLoading from "../Loader/IsLoading";
import { Link, useParams } from "react-router-dom";
export default function BlogBlog() {
  const [blogData, setBlogData] = useState([]);
  const [catData, setCatData] = useState([]);
  const [slicedInfo, setSlicedInfo] = useState([]);
  const itemPerPage = 5;
  const [pageCount, setpageCount] = useState(0);
  const [count, setCount] = useState(1);
  const [currentPage, setCurrentpage] = useState(1);
  const [loading, setLoading] = useState(true);
  const catId = useParams();

  async function getBlogData() {
    const response = await apidata(
      catId?.catId
        ? `api/bloglistview?category_id=${catId?.catId}`
        : "api/bloglistview"
    );

    // console.log(response.data.category);
    setCount(response.data.length);
    setBlogData(response.data.blog);
    setCatData(response.data.category);
    setpageCount(Math.ceil(response.data.length / itemPerPage));
    setLoading(false);
  }

  useEffect(() => {
    getBlogData();
  }, [catId]);

  useEffect(() => {
    // console.log(pageCount);

    const lastItemIndex = currentPage * itemPerPage;
    const firstItemIndex = lastItemIndex - itemPerPage;
    // console.log(currentPage);
    // console.log(blogData);

    setSlicedInfo(blogData.slice(firstItemIndex, lastItemIndex));
  }, [blogData, currentPage]);
  if (loading) {
    return <IsLoading />;
  }

  return (
    <>
      <div id="page-content-wrap">
        <div className="blog-page-content-wrap section-padding">
          <div className="container">
            <div className="row">
              {/* <!-- Blog content Area Start --> */}
              <div className="col-lg-8">
                <div className="blog-page-contant-start">
                  <div className="row rightShift">
                    {/* <!--== Single Blog Post start ==--> */}
                    {slicedInfo?.length ? (
                      slicedInfo.map((singleBlog, index) => {
                        return (
                          <SingleBlog
                            key={index}
                            colLg={"col-lg-6 col-md-6"}
                            blogData={singleBlog}
                          />
                        );
                      })
                    ) : (
                      <h4>No Blog Found</h4>
                    )}

                    <Pagination
                      totalItems={count}
                      itemPerPage={itemPerPage}
                      setCurrentpage={setCurrentpage}
                      currentPage={currentPage}
                      // blogData={slicedInfo}
                    />
                    {/* <!--== Single Blog Post End ==-->

                                    <!--== Single Blog Post start ==--> */}

                    {/* <!--== Single Blog Post End ==-->

                                    <!--== Single Blog Post start ==--> */}

                    {/* </div>  */}
                    {/* <!--== Single Blog Post End ==-->

                                    <!--== Single Blog Post start ==--> */}

                    {/* <!--== Single Blog Post End ==-->

                                    <!--== Single Blog Post start ==--> */}

                    {/* <!--== Single Blog Post End ==-->

                                    <!--== Single Blog Post start ==--> */}

                    {/* <!--== Single Blog Post End ==--> */}
                  </div>

                  {/* <!-- Pagination Start --> */}
                  {/* <div className="row">
                    <div className="col-lg-12">
                      <div className="pagination-wrap text-center">
                        <nav>
                          <ul className="pagination">
                            <li className="page-item">
                              <a className="page-link" href="/">
                                <i className="fa fa-angle-left"></i>
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="/">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="/">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="/">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="/">
                                ...
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="/">
                                50
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="/">
                                <i className="fa fa-angle-right"></i>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div> */}
                  {/* <!-- Pagination End --> */}
                </div>
              </div>
              {/* <!-- Blog content Area End --> */}

              {/* <!-- Sidebar Area Start --> */}
              <div className="col-lg-4 order-first order-lg-last">
                <div className="sidebar-area-wrap">
                  {/* <!-- Single Sidebar Start --> */}
                  {/* <div className="single-sidebar-wrap">
                    <div className="brand-search-form">
                      <form action="https://codeboxr.net/themedemo/unialumni/html/index.html">
                        <input type="search" placeholder="Type and hit here" />
                        <button type="button">
                          <i className="fa fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div> */}
                  {/* <!-- Single Sidebar End --> */}

                  {/* <!-- Single Sidebar Start --> */}
                  <div className="single-sidebar-wrap shadow-soft roundedImg">
                    <h4 className="sidebar-title">Categories</h4>
                    <div className="sidebar-body">
                      <ul className="brand-unorderlist">
                        {catData?.map((items) => (
                          <li key={items.id}>
                            <Link to={`/category/${items?.id}`}>
                              {items.name}
                            </Link>
                          </li>
                        ))}

                        {/* <li>
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
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Single Sidebar End --> */}

                  {/* <!-- Single Sidebar Start --> */}
                  {/* <div className="single-sidebar-wrap d-none d-lg-block">
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
                  </div> */}
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
