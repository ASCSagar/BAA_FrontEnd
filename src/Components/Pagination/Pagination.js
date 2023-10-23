import React, { useEffect, useState } from "react";

export default function Pagination({
  itemPerPage,
  totalItems,
  setCurrentpage,
  currentPage,
  blogData,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pages.push(i);
  }
  //   if (totalItems <= itemPerPage) {
  //     return;
  //   }

  return (
    <>
      {/* {totalItems > itemPerPage ? (
        <div className="stylePageNo">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentpage(page)}
              className={page == currentPage ? "active" : ""}>
              {page}
            </button>
          ))}
        </div>
      ) : (
        ""
      )} */}
      {totalItems > itemPerPage ? (
        <div className="row">
          <div className="col-lg-12">
            <div className="pagination-wrap text-center">
              <nav>
                <ul className="pagination">
                  {pages.map((page, index) => (
                    <li key={index} className="page-item">
                      <button
                        className={
                          page == currentPage
                            ? "active page-link btnPageBlog"
                            : "page-link btnPageBlog"
                        }
                        onClick={() => setCurrentpage(page)}
                      >
                        {page}
                      </button>
                    </li>
                  ))}

                  {/* <li className="page-item">
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
                </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
