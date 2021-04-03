import './App.css';
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import TechSkills from './components/TechSkills'
import Footer from './components/Footer'
import Contact from './components/Contact'
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
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/project">
            
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
