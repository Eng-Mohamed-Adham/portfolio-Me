import About from "./components/About";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import AboutMe from "./components/Information";
import NavBar from "./components/Navbar";
import Projects from "./components/projects";
import Skiles from "./components/Skiles";
import TitleProjects from "./components/TitleProjects";
import './style/main.css'




function App() {
  return (

<div className="main">
  <NavBar />
  <About />
  <AboutMe />
  <Skiles />
  <TitleProjects />
  <Projects />
  <Connect />
  <Footer />
</div>

  );
}

export default App;
