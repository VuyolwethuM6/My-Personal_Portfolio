import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import { FaDownload} from "react-icons/fa";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column' id = "home">
        <Navbar />
        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'>the Ideal Junior Developer</h1>
                <p className='text-lead'> A proactive learner with strong problem-solving abilities, excellent communication skills, and a passion for contributing positively to team projects while continuously striving for growth and improvement.</p>
                <a href = "/" className='btn header-btn btn-blue'>
                    <FaDownload /> <span>Download CV</span>
                </a>
                

            </div>
        </div>
    </header>
  )
}

export default Header