import React from 'react';
import "./About.css";
import aboutImage from '../../assets/images/header.png';
import Education from '../Education/Education';


const About = () => {
  return (
    <section className='about section-p bg-dark animate__bounceInUp' id = "about">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className = "content-left">
                    <img src = {aboutImage} alt = "" className='abt-img'/>
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>I'm Vuyolwethu Mabhuleka</h3>
                    </div>
                    <p className = "text">A junior software developer who's more than just a coder - I'm a problem solver, architect of digital solutions, and perpetual learner. With expertise in full stack development and web technologies, combined with a keen eye for design and commitment to seamless user experiences,
                     I'm poised to chart the course for your industry evolution and propel your brand forward through tailored industry revolutions.</p>
                    
                </div>
            </div>
        </div>
        <Education/>
    </section>
  )
}

export default About