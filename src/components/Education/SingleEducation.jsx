import React from 'react';
import {BsArrowRightCircle} from "react-icons/bs";
import "./Education.css";

const SingleEducation = ({education}) => {
  return (
    <div className='item bg-dark translate-effect'>
        <span className='item-icon'>
            {education.icon}
        </span>
        <h4 className='item-title fs-25'>{education.title}</h4>
        <p className='fs-19 text'>{education.text}</p>
        <a href ={education.link} className='item-link text-grey'>
            <BsArrowRightCircle size = {30} />
        </a>
    </div>
  )
}

export default SingleEducation;