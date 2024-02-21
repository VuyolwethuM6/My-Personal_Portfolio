import './App.css';
import Header from './components/Header/Header';
import "./assets/js/script";
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    
    <div className="App">
      <Header />
      <About />
      <Testimonials />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}



export default App;


