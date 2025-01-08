import React, { useEffect, useState } from "react";
import "./index.css";

interface ImageSliderProps {
  url: string[]; // url should be an array of image URLs
}

const ImageSlider = ({ url }: ImageSliderProps) => {
  const [error, setErrorMsg] = useState<string>("");
  const [images, setImages] = useState<string[]>([]); // Store the array of image URLs
  const [loading, setLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Use the passed `url` array directly as the list of images
  useEffect(() => {
    if (url.length > 0) {
      setImages(url); // Set images directly from the URL array passed as props
      setLoading(false);
    } else {
      setErrorMsg("No images found");
      setLoading(false);
    }
  }, [url]);

  // Error message rendering
  if (error) {
    return <div>Error occurred: {error}</div>;
  }

  // Loading message rendering
  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button onClick={prevImage}>Previous</button>
      <div className="image-slider">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      <p>
        {currentIndex + 1}/{url.length}
      </p>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageSlider;
