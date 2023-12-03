import Navbar from "./Components/navbar";
import Home from "./Sections/home";
import About from "./Sections/about";
import Projects from "./Sections/projects";
import Contact from "./Sections/contact";
import Footer from "./Components/footer";
import { Element } from 'react-scroll';
import ParticleBackground from "./js/ParticleBackground"
import { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import 'animate.css';
import 'hover.css'

function App() {

    const [loading, setLoading] = useState(false);

    useEffect (() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2500 );
    }, [])

    return (

        loading ?  
        <div className="flex items-center justify-center h-screen w-screen bg-white dark:bg-midnight pr-[30px]">
            <PropagateLoader
                color={'#60A5FA'}
                loading={loading}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
            :
        <>
            <ParticleBackground/>
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
        </>
            
    );
}

export default App;
