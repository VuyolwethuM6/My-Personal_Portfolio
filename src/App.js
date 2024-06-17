import {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header/Header';
import "./assets/js/script";
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader';
import kursor from 'kursor';

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    new kursor({
      type: 1,
      color: '#ff0000',
      removeDefaultCursor: true,
    });

    return () => clearTimeout(timer);
  }, []);

  return (

    <div className="App">
      {loading ? <Loader /> :
      <>
        <Header/>
        <About/>
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </>}
    </div>
  );
}

export default App;


