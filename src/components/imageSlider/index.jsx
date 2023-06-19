import { useState } from "react";
import arrowIcon from "../../assets/back-arrow.svg";

function ImageSlider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onlyOneImage = pictures.length === 1;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const backgroundImage = {
    backgroundImage: `url(${pictures[currentIndex]})`,
  };
  const backgroundArrow = {
    backgroundImage: `url(${arrowIcon})`,
  };

  return (
    <div className="image-slider" style={backgroundImage}>
      {!onlyOneImage ? (
        <div className="slider-nav">
          <span onClick={goToPrevious} className="arrow left-arrow" style={backgroundArrow}></span>
          <span onClick={goToNext} className="arrow right-arrow" style={backgroundArrow}></span>
          <div className="slide-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ImageSlider;
