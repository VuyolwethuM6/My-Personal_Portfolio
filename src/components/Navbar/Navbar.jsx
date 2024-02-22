import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import logo from '../../assets/images/logo-.png';

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  // Add useEffect to trigger animation after component mounts
  useEffect(() => {
    // Set navToggle to true after component mounts to trigger animation
    setNavToggle(true);
  }, []);

  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };

  const closeNav = () => {
    if (navToggle) {
      setNavToggle(false);
    }
  };

  return (
    <nav className='navbar w-100 flex'>
      <div className='container w-100'>
        <div className='navbar-content flex fw-7'>
          <div className='brand-and-toggler flex flex-between w-100'>
            <img src={logo} alt='V.Mabhuleka' className='navbar-brand' />
            <div
              type='button'
              className={`hamburger-menu ${
                navToggle ? 'hamburger-menu-change' : ''
              }`}
              onClick={navHandler}
            >
              <div className='bar-top'></div>
              <div className='bar-middle'></div>
              <div className='bar-bottom'></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? 'show-navbar-collapse' : ''
            }`}
          >
            <div className='navbar-collapse-content'>
              <ul className='navbar-nav'>
                <li className='text-white'>
                  <a href='#home' onClick={closeNav}>
                    Home
                  </a>
                </li>
                <li className='text-white'>
                  <a href='#about' onClick={closeNav}>
                    About
                  </a>
                </li>
                <li className='text-white'>
                  <a href='#skills' onClick={closeNav}>
                    Skills
                  </a>
                </li>
                <li className='text-white'>
                  <a href='#portfolio' onClick={closeNav}>
                    Projects
                  </a>
                </li>
              </ul>
              <ul className='navbar-social flex'>
                <li className='text-white'>
                  <Link to='' className='flex flex-center'>
                    <FaLinkedin />
                  </Link>
                </li>
                <li className='text-white'>
                  <a
                    href='https://github.com/VuyolwethuM6'
                    className='flex flex-center'
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
              <div className='navbar-btns'>
                <button type='button' className='btn'>
                  <FaPaperPlane /> <span>Let's Connect</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





// import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
// import "./Navbar.css";
// import { FaLinkedin, FaGithub} from 'react-icons/fa';
// import {FaPaperPlane} from "react-icons/fa";
// import logo from '../../assets/images/logo-.png'


// const Navbar = () => {

//     const [navToggle, setNavToggle] = useState(false);
//     const navHandler = () => {
//         setNavToggle(prevData => !prevData);
//     }

//     const closeNav = () => {
//         if (navToggle) {
//             setNavToggle(false);
//         }
//     };

//   return (
//     <nav className='navbar w-100 flex'>
//         <div className='container w-100'>
//             <div className='navbar-content flex fw-7'>
//                 <div className='brand-and-toggler flex flex-between w-100'>
//                     <img src={logo} alt="V.Mabhuleka" className='navbar-brand '/>
//                     <div type = "button" className={`hamburger-menu ${navToggle ? 'hamburger-menu-change' : ""}`} onClick={navHandler}>
//                         <div className='bar-top'></div>
//                         <div className='bar-middle'></div>
//                         <div className='bar-bottom'></div>
//                     </div>
//                 </div>

//                 <div className={`navbar-collapse ${navToggle ? 'show-navbar-collapse' : ""}`}>
//                     <div className='navbar-collapse-content'>
//                           <ul className='navbar-nav'>
//                               <li className='text-white'>
//                                   <a href="#home" onClick={closeNav}>Home</a>
//                               </li>
//                               <li className='text-white'>
//                                   <a href="#about" onClick={closeNav}>About</a>
//                               </li>
//                               <li className='text-white'>
//                                   <a href="#skills" onClick={closeNav}>Skills</a>
//                               </li>
//                               <li className='text-white'>
//                                   <a href="#portfolio" onClick={closeNav}>Projects</a>
//                               </li>
//                           </ul>
//                           <ul className='navbar-social flex'>
//                               <li className='text-white'>
//                                   <Link to="" className='flex flex-center'><FaLinkedin /></Link>
//                               </li>
//                               <li className='text-white'>
//                                   <a href="https://github.com/VuyolwethuM6" className='flex flex-center'><FaGithub /></a>
//                               </li>
//                           </ul>
//                         <div className='navbar-btns'>
//                             <button type = "button" className='btn'><FaPaperPlane /> <span>Let's Connect</span></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </nav>
//   )
// }

// export default Navbar