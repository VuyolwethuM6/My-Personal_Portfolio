//Testimonials => Skills

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdStar } from "react-icons/md";
import sections from "../../constants/data";
import "./Testimonials.css";

const gradient = "url(#blue-gradient)";

const Testimonials = () => {
  const showRating = (starCount) => {
    const startList = [];
    for (let i = 0; i < starCount; i++) {
      startList.push(<MdStar key={i} size={25} style={{ fill: gradient }} />);
    }
    return startList;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials section-p bg-black" id="skills">
      <div className="container">
        <div className="testimonials-content">
          <div className="section-t text-center">
            <h3>Skills</h3>
            <p className="text">
              These technologies aren't just tools; they're the building blocks
              of the digital experiences I create. Let's collaborate and bring
              innovation to life!
            </p>
          </div>

          <Slider {...settings}>
            {sections.testimonials.map((testimonial) => (
              <div
                className="item translate-effect bg-dark"
                key={testimonial.id}
              >
                <h4 className="item-name">{testimonial.name}</h4>
                <div className="item-img">
                  <img src={testimonial.image} alt="" />
                </div>

                <ul className="flex item-rating flex-center">
                  {showRating(testimonial.rating)}
                </ul>
                <p className="item-text text">{testimonial.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;





// import React from 'react';
// import "./Testimonials.css";
// import sections from '../../constants/data';
// import {MdStar} from "react-icons/md";

// const gradient = "url(#blue-gradient)";

// const Testimonials = () => {

//     let startList;
//     const showRating = (starCount) => {
//         startList = new Array(starCount);
//         for(let i = 0; i < startList.length; i++){
//             startList[i] = <MdStar size = {25} style = {{ fill: gradient }} />;
//         }
//         return startList;
//     }

//   return (
//     <section className='testimonials section-p bg-black' id = "testimonials">
//         <div className='container'>
//             <div className='testimonials-content'>
//                 <div className='section-t text-center'>
//                     <h3>Customer Testimonials</h3>
//                     <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias voluptatum, tempore dignissimos perferendis ea.</p>
//                 </div>

//                 <div className='item-list grid text-white text-center'>
//                     {
//                         sections.testimonials.map(testimonial => {
//                             showRating(testimonial.rating);
//                             return (
//                                 <div className='item translate-effect bg-dark' key = {testimonial.id}>
//                                     <div className='item-img'>
//                                         <img src = {testimonial.image} alt = "" />
//                                     </div>
//                                     <h4 className='item-name'>{testimonial.name}</h4>
//                                     <p className='item-text text'>{testimonial.text}</p>
//                                     <ul className='flex item-rating flex-center'>
//                                         {
//                                             startList.map((star, index) => {
//                                                 return (
//                                                     <li key = {index}>{star}</li>
//                                                 )
//                                             })
//                                         }
//                                     </ul>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Testimonials
