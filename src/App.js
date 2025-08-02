import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skillset from "./components/Skillset/Skillset";
import Footer from "./components/Footer/Footer";
import Island from "./components/Island/Island";
import Tcp from "./pages/TCP/Tcp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <Skillset />
              <Island />
            </>
          }
        />
      <Route path="/tcp" element={<Tcp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
