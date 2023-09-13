import React, { useState } from "react";
import "./Style.css";

const Imageslider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="image-slider">
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => goToImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Imageslider;
