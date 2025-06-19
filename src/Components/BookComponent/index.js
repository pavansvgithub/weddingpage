import React, { useState } from "react";
import "./index.css";

import book1Image from "../../images/book-1.jpg";
import book2Image from "../../images/book-2.jpg";
import book3Image from "../../images/book-3.jpg"; // Add more pages if available
import book4Image from "../../images/book-4.jpg";

const pages = [
  book1Image,
  book2Image,
  book3Image,
  book4Image,
];

const BookComponent = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index + 2 < pages.length) {
      setIndex(index + 2);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 2);
    }
  };

  return (
    <div className="book-div d-flex">
      <div className="left-page-div" onClick={handlePrev}>
        {pages[index] && (
          <img
            className="w-100 h-100 page-img"
            src={pages[index]}
            alt={`Page ${index + 1}`}
          />
        )}
      </div>

      <div className="right-page-div" onClick={handleNext}>
        {pages[index + 1] && (
          <img
            className="w-100 h-100 page-img"
            src={pages[index + 1]}
            alt={`Page ${index + 2}`}
          />
        )}
      </div>
    </div>
  );
};

export default BookComponent;

