import './App.css';
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import TechSkills from './components/TechSkills'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route exact path="/">
          <AboutMe />
          <TechSkills />
          <Footer/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
