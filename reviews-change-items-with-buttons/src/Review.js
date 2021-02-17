import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const randomReview = () => {
    setIndex((idx) => {
      let tempIndex = Math.floor(Math.random() * people.length);
      let flag = Math.random() > 0.5;
      if (tempIndex === idx) {
        return boundaryCheck(flag ? idx + 1 : idx - 1);
      } else return tempIndex;
    });
  };

  const boundaryCheck = (num) => {
    if (num > people.length - 1) return 0;
    if (num < 0) return people.length - 1;
    else return num;
  };
  const showNext = () => {
    setIndex(boundaryCheck(index + 1));
  };
  const showPrev = () => {
    setIndex(boundaryCheck(index - 1));
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job} </p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={showPrev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={showNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomReview}>
        Suprise me!
      </button>
    </article>
  );
};

export default Review;
