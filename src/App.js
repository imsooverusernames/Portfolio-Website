import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skillset from './components/Skillset';
import Footer from './components/Footer';
import Island from './components/Island';
import ToastAlert from './components/ToastAlert';

function App() {
  return (
    <Router>
      <Navbar />
      <ToastAlert />
      <Hero />
      <Projects />
      <Skillset />
      <Island />
      <Footer />
    </Router>
  );
}

export default App;
