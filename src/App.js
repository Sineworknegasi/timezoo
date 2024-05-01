import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Hero from './components/Hero/Hero';
import Arrival from './components/Arrival/Arrival';
import Watch from './components/Watch/Watch';
import Product from './components/Product/Product';
import Video from './components/Video/Video';
import Choice from './components/Choice/Choice';
import Choice1 from './components/Choice1/Choice1';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Arrival/>
    <Watch/>
    <Product/>
    <Video/>
    <Choice/>
    <Choice1/>
    <Feature/>
    <Footer/>
    </>
  );
}

export default App;
