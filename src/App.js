import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router,  Switch, Link, NavLink} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Faq from './pages/faq';
import Contact from './pages/contact';



function App() {
  return (
    <Router>

       <Switch>
        <Route path="/" exact component={Home} />
         <Route path="/about"  component={About} />
        <Route path="/faq"  component={Faq} />
        <Route path="/contact" component={Contact} />

       </Switch>
       </Router>
  );
}

export default App;
