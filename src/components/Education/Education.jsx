import React from 'react';
import "./Education.css";
import sections from "../../constants/data";
import SingleEducation from './SingleEducation';

const Education = () => {
  return (
    <section className='services section-p bg-dark' id = "services">
        <div className='container'>
            <div className='services-content'>
                <svg width = "1em" height = "1em">
                    <linearGradient id = "blue-gradient" x1 = "100%" y1 = "100%" x2 = "0%" y2 = "0%">
                        <stop stopColor = "#55b3d5" offset="0%" />
                        <stop stopColor = "#5764de" offset = "100%" />
                    </linearGradient>
                </svg>
                <div className='section-t'>
                        <h3>Here's My Education & Experience</h3>
                    </div>
                <div className='item-list grid text-white text-center'>
                    {
                        sections.education.map(education => {
                            return (
                                <SingleEducation education = {education} key = {education.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education