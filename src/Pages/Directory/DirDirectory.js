import React from "react";
import img from "../../assets/images/testimonial/testi-1.png";
export default function DirDirectory() {
  return (
    <>
      <section id="page-content-wrap">
        <div className="directory-page-content-warp section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="directory-text-wrap">
                  <h2>
                    Now we have{" "}
                    <strong className="funfact-count">485274</strong> member{" "}
                  </h2>
                  <div className="table-search-area">
                    <form action="https://codeboxr.net/themedemo/unialumni/html/index.html">
                      <input type="search" placeholder="Type Your Keyword" />
                      <select name="dept">
                        <option selected>Dept</option>
                        <option value="cmt">Computer</option>
                        <option value="cmt">Computer</option>
                        <option value="cmt">Computer</option>
                        <option value="cmt">Computer</option>
                        <option value="cmt">Computer</option>
                      </select>
                      <button className="btn btn-brand">Search</button>
                    </form>
                  </div>

                  <div className="directory-table table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Depertment</th>
                          <th scope="col">Batch</th>
                          <th scope="col">Campus</th>
                          <th scope="col">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src={img} alt="table" />
                            Angelina Jolie Voight
                          </td>
                          <td>Computer</td>
                          <td>2014</td>
                          <td>Dhaka</td>
                          <td>Student</td>
                        </tr>

                        <tr>
                          <td>
                            <img src={img} alt="table" />
                            Angelina Jolie Voight
                          </td>
                          <td>Computer</td>
                          <td>2014</td>
                          <td>Dhaka</td>
                          <td>Student</td>
                        </tr>

                        <tr>
                          <td>
                            <img src={img} alt="table" />
                            Angelina Jolie Voight
                          </td>
                          <td>Computer</td>
                          <td>2014</td>
                          <td>Dhaka</td>
                          <td>Student</td>
                        </tr>

                        <tr>
                          <td>
                            <img src={img} alt="table" />
                            Angelina Jolie Voight
                          </td>
                          <td>Computer</td>
                          <td>2014</td>
                          <td>Dhaka</td>
                          <td>Student</td>
                        </tr>

                        <tr>
                          <td>
                            <img src={img} alt="table" />
                            Angelina Jolie Voight
                          </td>
                          <td>Computer</td>
                          <td>2014</td>
                          <td>Dhaka</td>
                          <td>Student</td>
                        </tr>

                        <tr>
                          <td>
                            <img src={img} alt="table" />
                            Angelina Jolie Voight
                          </td>
                          <td>Computer</td>
                          <td>2014</td>
                          <td>Dhaka</td>
                          <td>Student</td>
                        </tr>

                        <tr>
                          <td>
                            <img src={img} alt="table" />
                            Angelina Jolie Voight
                          </td>
                          <td>Computer</td>
                          <td>2014</td>
                          <td>Dhaka</td>
                          <td>Student</td>
                        </tr>

                        <tr>
                          <td>
                            <img src={img} alt="table" />
                            Angelina Jolie Voight
                          </td>
                          <td>Computer</td>
                          <td>2014</td>
                          <td>Dhaka</td>
                          <td>Student</td>
                        </tr>

                        <tr>
                          <td>
                            <img src={img} alt="table" />
                            Angelina Jolie Voight
                          </td>
                          <td>Computer</td>
                          <td>2014</td>
                          <td>Dhaka</td>
                          <td>Student</td>
                        </tr>

                        <tr>
                          <td>
                            <img src={img} alt="table" />
                            Angelina Jolie Voight
                          </td>
                          <td>Computer</td>
                          <td>2014</td>
                          <td>Dhaka</td>
                          <td>Student</td>
                        </tr>

                        <tr>
                          <td>
                            <img src={img} alt="table" />
                            Angelina Jolie Voight
                          </td>
                          <td>Computer</td>
                          <td>2014</td>
                          <td>Dhaka</td>
                          <td>Student</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="show-memeber text-end">
                    Show <span>30</span> of <span>12487 Member</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
