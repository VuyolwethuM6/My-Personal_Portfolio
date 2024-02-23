//Testimonials => Skills

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdStar } from "react-icons/md";
import sections from "../../constants/data";
import "./Skills.css";

const gradient = "url(#blue-gradient)";

const Skills = () => {
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

export default Skills;





