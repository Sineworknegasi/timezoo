import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Hero from './components/Hero/Hero';
import Arrival from './components/Arrival/Arrival';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Arrival/>
    </>
  );
}

export default App;
