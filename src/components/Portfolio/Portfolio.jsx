import React from 'react';
import "./Portfolio.css";
import sections from '../../constants/data';
import 'animate.css'

const Portfolio = () => {
  return (
    <section className='portfolio section-p bg-dark' id = "portfolio">
        <div className='container'>
            <div className='portfolio-content'>
                <div className='section-t text-center'>
                    <h3>Projects</h3>
                    <p className='text'>Welcome to the heart of my digital journey – a collection of projects that embody my passion for coding and innovation. Each project is a testament to my commitment to delivering solutions that not only meet but exceed expectations.
                    <br /> Here's a sneak peek into my project portfolio:</p>
                </div>

                <div className='item-list text-center text-white grid'>
                    {
                        sections.portfolio.map(portfolio => {
                            return (
                                <div className='item flex flex-center flex-column translate-effect ' key = {portfolio.id} style = {{
                                    background: `url(${portfolio.image})`,
                                    backgroundSize: 'cover'
                                }}>
                                    <div className='item-title fs-25 fw-6 text-white'>{portfolio.title}</div>
                                    <div className='text text-white'>{portfolio.text}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
