import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skillset from "./components/Skillset/Skillset";
import Footer from "./components/Footer/Footer";
import Island from "./components/Island/Island";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Projects />
      <Skillset />
      <Island />
      <Footer />
    </Router>
  );
}

export default App;
