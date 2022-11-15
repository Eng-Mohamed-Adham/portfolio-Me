import About from "./components/About";
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
</div>

  );
}

export default App;
