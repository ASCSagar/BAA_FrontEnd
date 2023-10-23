import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import IsLoading from "../Loader/IsLoading";
import WSPGallery from "./WSPGallery";
import BanGalery from "./BanGalery";

function SingleGallery() {
  const [isLoading, setIsLoading] = useState({ loading: true, err: false });
  const [data, setData] = useState();
  const [cat, setCat] = useState();
  const param = useParams().id;
  const getData = async function () {
    try {
      const request = await fetch(
        `https://bhavansalumniassociation.org/api/category/images/?category_id=${param}`
      );
      if (!request.ok) {
        setIsLoading({ loading: false, err: false });
        return;
      }
      const response = await request.json();
      // console.log(response);
      setData(response);
      setIsLoading({ loading: false, err: false });
    } catch (e) {
      setIsLoading({ loading: false, err: true });
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(data);
  if (isLoading.loading) {
    return <IsLoading />;
  } else if (isLoading.err) {
    return <h6>Some Problem occured, Please try again...</h6>;
  }
  return (
    <>
      <BanGalery />
      <div>
        <section id="page-content-wrap">
          <div
            className="gallery-page-wrap section-padding"
            style={{ padding: "20px" }}
          >
            {/* <!-- Gallery Menu Start --> */}
            <div className="gallery-menu text-center">
              {/* {cat?.map((cat) => {
              return <Link to={`/gallery/${cat.id}`}>{data.name[0]?.categgory[0]?.id}
            })} */}
              <div className="flexCenter">
                <Link className="goToLeft" to="/gallery">
                  Go Back
                </Link>
                <h4>{data[0]?.category[0]?.name} Album</h4>
              </div>
              {/* <span className="active">All</span>
                <a href="/">Seminar</a>
                <a href="/">Event</a>
                <a href="/">Picnic</a> */}
            </div>
            {/* <!-- Gallery Menu End --> */}

            {/* <!--= Gallery Page Content Wrap Start =--> */}
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="full-album-content">
                    {/* <!-- Single Album Start --> */}
                    <div className="single-album-wraper">
                      {/* <div className="album-heading">
                          <h2>
                            <a href="single-album.html">
                              {
                                <Link to={`/gallery/${cat.id}`}>
                                  {imgs.cat.name}
                                </Link>
                              }
                            </a>
                          </h2>

                          <Link
                            className="btn btn-brand"
                            to={`/gallery/${cat.id}`}
                          >
                            {imgs.cat.name}
                          </Link>
                        </div> */}
                      <div className="album-gallery-item">
                        <WSPGallery galleryImages={data} isItHome={true} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--= Gallery Page Content Wrap End =--> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default SingleGallery;
