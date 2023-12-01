import Navbar from "./Components/navbar";
import Home from "./Sections/home";
import About from "./Sections/about";
import Projects from "./Sections/projects";
import Contact from "./Sections/contact";
import Footer from "./Components/footer";
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="bg-white dark:bg-[#1A1D21] h-[100dvh]">
      <Navbar/>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer/>
    </div>
  );
}

export default App;
