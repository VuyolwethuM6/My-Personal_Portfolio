import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Motion, spring } from 'react-motion';
import "./Header.css";
import { FaDownload } from "react-icons/fa";

const Header = () => {

  function downloadCV(){
    window.open("https://drive.google.com/file/d/1sFpXlp7NYqVgSTI5QY41cA_zaW8qb5O0/view?usp=sharing", "_blank");
  }
  return (
    <Motion defaultStyle={{ opacity: 0, translateY: -50, slideInLeft: -50, slideInRight: 50 }} style={{ opacity: spring(1), translateY: spring(0), slideInLeft: spring(0), slideInRight: spring(0) }}>
      {interpolatingStyle => (
        <header
          className='header flex flex-center flex-column'
          id="home"
          style={{ opacity: interpolatingStyle.opacity }}
        >
          <Navbar />
          <div className='container'>
            <div className='header-content text-center flex flex-column'>
              <h1 className='text-uppercase header-title' style={{ transform: `translateY(${interpolatingStyle.translateY}%)` }}>the Ideal Junior Developer</h1>
              <p className='text-lead' style={{ transform: `translateX(${interpolatingStyle.slideInLeft}%)` }}>A proactive learner with strong problem-solving abilities, excellent communication skills, and a passion for contributing positively to team projects while continuously striving for growth and improvement.</p>
              <a href="/" onClick={downloadCV} className='btn header-btn btn-blue' style={{ transform: `translateX(${interpolatingStyle.slideInRight}%)` }}>
                <FaDownload /> <span>Download CV</span>
              </a>
            </div>
          </div>
        </header>
      )}
    </Motion>
  );
}

export default Header;




// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import "./Header.css";
// import { FaDownload} from "react-icons/fa";

// const Header = () => {
//   return (
//     <header className='header flex flex-center flex-column' id = "home">
//         <Navbar />
//         <div className='container'>
//             <div className='header-content text-center flex flex-column'>
//                 <h1 className='text-uppercase header-title'>the Ideal Junior Developer</h1>
//                 <p className='text-lead'> A proactive learner with strong problem-solving abilities, excellent communication skills, and a passion for contributing positively to team projects while continuously striving for growth and improvement.</p>
//                 <a href = "/" className='btn header-btn btn-blue'>
//                     <FaDownload /> <span>Download CV</span>
//                 </a>
                

//             </div>
//         </div>
//     </header>
//   )
// }

// export default Header