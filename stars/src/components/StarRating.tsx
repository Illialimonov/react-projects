import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  noOfStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index: number) => {
    setRating(index);
  };

  const handleMouseEnter = (index: number) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="star-rating" style={{ display: "flex" }}>
      {[...Array(noOfStars)].map((_, index) => (
        <div
          key={index}
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "pointer" }}
        >
          <FaStar
            size={40}
            color={(hover || rating) > index ? "#ffc107" : "#e4e5e9"}
          />
        </div>
      ))}
    </div>
  );
};

export default StarRating;
