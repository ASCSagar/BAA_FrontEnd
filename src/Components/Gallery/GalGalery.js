import React, { useEffect, useState } from "react";
import img from "../../assets/images/zoom-icon.png";
import IsLoading from "../Loader/IsLoading";
import { Link } from "react-router-dom";
import WSPGallery from "./WSPGallery";
export default function GalGalery() {
  const [isLoading, setIsLoading] = useState({ loading: true, err: false });
  const [data, setData] = useState();
  const [cat, setCat] = useState();
  const getData = async function () {
    try {
      const request = await fetch(
        "https://api.bhavansalumniassociation.org/api/gallerylistview"
      );
      if (!request.ok) {
        setIsLoading({ loading: false, err: false });
        return;
      }
      const response = await request.json();
      // console.log(response);
      const myData = [];
      for (let i = 0; i < response.category?.length; i++) {
        const convertedArr = {
          cat: response.category[i],
          imgs: [],
        };
        response.images.forEach((img) => {
          // console.log(img);
          // alert(img?.category?.id);
          // alert(response.category[i]?.id);
          if (img?.category[0]?.id === response.category[i]?.id) {
            convertedArr.imgs.push(img);
          }
        });
        myData.push(convertedArr);
      }
      // console.log(myData);
      setCat(response.category);
      setData(myData);
      setIsLoading({ loading: false, err: false });
    } catch {
      setIsLoading({ loading: false, err: false });
    }
  };
  data?.map((imgs) => {
    // console.log(imgs);
  });
  useEffect(() => {
    getData();
  }, []);
  if (isLoading.loading) {
    return <IsLoading />;
  } else if (isLoading.err) {
    return <h6>Some Problem occured, Please try again...</h6>;
  }

  return (
    <div>
      <section id="page-content-wrap">
        <div
          className="gallery-page-wrap section-padding"
          style={{ padding: "20px" }}
        >
          {/* <!-- Gallery Menu Start --> */}
          <div className="gallery-menu text-center">
            {data?.map((cat) => {
              if (cat.imgs?.length) {
                return (
                  <Link to={`/gallery/${cat.cat.id}`} className="btn shadowBtn">
                    {cat.cat.name}
                  </Link>
                );
              }
            })}
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
                  {data?.map((imgs) => {
                    if (!imgs.imgs?.length) {
                      return;
                    }
                    return (
                      <div className="single-album-wraper">
                        <div className="album-heading">
                          <h2>
                            <a href="single-album.html">
                              {
                                <Link
                                  to={`/gallery/${imgs.cat?.id}`}
                                  className="styledFont"
                                >
                                  {imgs.cat.name}
                                </Link>
                              }
                            </a>
                          </h2>

                          {/* <Link
                            className="btn btn-brand"
                            to={`/gallery/${imgs.cat?.id}`}
                          >
                            {imgs.cat.name}
                          </Link> */}
                        </div>
                        <div className="album-gallery-item">
                          <div className="row gallery-gird">
                            <WSPGallery
                              galleryImages={imgs.imgs}
                              isItHome={false}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* <!--= Gallery Page Content Wrap End =--> */}
        </div>
      </section>
    </div>
  );
}
