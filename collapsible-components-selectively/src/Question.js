import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [show, setShow] = useState(false);
  const clickShow = () => {
    setShow(!show);
  };
  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={clickShow}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show && <p>info</p>}
    </div>
  );
};

export default Question;
