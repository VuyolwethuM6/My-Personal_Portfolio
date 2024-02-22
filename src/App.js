import {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header/Header';
import "./assets/js/script";
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader';
import kursor from 'kursor';

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set loading to false after 3 seconds

    // Initialize Kursor.js
    new kursor({
      type: 1,
      color: '#ff0000',
      removeDefaultCursor: true,
    });

    // Cleanup function for the timer
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to ensure it runs only once

  return (
    

    <div className="App">
      {loading ? <Loader /> :
      <>
        <Header/>
        <About/>
        <Testimonials />
        <Portfolio />
        <Contact />
        <Footer />
      </>}
    </div>
    // <div className="App">
    //   <Header />
    //   <About />
    //   <Testimonials />
    //   <Portfolio />
    //   <Contact />
    //   <Footer />
    // </div>
  );
}



export default App;


