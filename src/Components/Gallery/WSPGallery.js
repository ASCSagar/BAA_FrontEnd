import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./WSP.Gallery.css";

const WSPGallery = ({ galleryImages, isItHome }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  //   if (isItHome) {
  //     galleryImages = galleryImages.map((img) => {
  //       const changedData = { ...img };
  //       changedData.img = changedData.image;
  //       return changedData;
  //     });
  //   }
  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  // console.log(galleryImages);
  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
          />
          <div className="fullScreenImage">
            <img
              src={`${isItHome ? "" : "https://bhavansalumniassociation.org/"}${
                galleryImages[slideNumber].image
              }`}
              alt=""
            />
          </div>
        </div>
      )}

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single shadow-soft"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img
                  src={`${
                    isItHome ? "" : "https://bhavansalumniassociation.org/"
                  }${galleryImages[index].image}`}
                  className="roundedImg"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WSPGallery;
