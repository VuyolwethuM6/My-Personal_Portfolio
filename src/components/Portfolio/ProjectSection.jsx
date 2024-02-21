import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import figma from '../../assets/images/icons/figma.svg';
const ProjectSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projectsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects",
        start: "top bottom",
        toggleActions: "restart none none none",
      },
    });

    projectsTl.from(".projects__main__title", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "back",
    });

    projectsTl.from(".project__item", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);

  return (
    <section id="projects" className="projects section horizontal ">
      <div className="horizontal__animation-wrap to--right">
        <div className="animation__content__wrap">
          <h2 className="animation__title title__gradient projects__main__title">
            My Featured Projects/Courses
          </h2>
          <div className="project project__item">
            <div className="project__img">
              <img
                src="assets/complete-ecommerce.png"
                alt="complete-ecommerce"
              />
            </div>
            <div className="project__content">
              <h3 className="project__title">
                Complete E-commerce in React and Node.js
              </h3>
              <p className="project__description">
                In this course I teach how to create a complete ecommerce web
                app using the MERN stack.
              </p>

              <div className="project__links">
                <a href="https://youtu.be/XQJNVF9pFYs" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                  {figma}
                  </svg>
                  <span>Course</span>
                </a>
                <a href="https://www.patreon.com/posts/react-and-node-67782982?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-code"
                    viewBox="0 0 16 16"
                  >
                    {/* Code SVG path */}
                  </svg>
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
          {/* Other projects follow with similar structure */}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
