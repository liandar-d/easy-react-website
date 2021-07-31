import logo from './logo.svg';
import './App.css';
import { Route, HashRouter as Router,  Switch, Link, NavLink} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Easyclaims from './pages/easyclaims';
import Easylegal from './pages/easylegal';
import Easyportfolio from './pages/easyportfolio';
import Privacy_Policy from './pages/privacy-policy';
import Refund_policy from './pages/refund-policy';
import Terms_and_conditions from './pages/terms-and-conditions';
import Security from './pages/security';
import Blog_post from './pages/blog-post';
import Blog from './pages/blog';
import Faqs from './pages/faqs';
import Contact from './pages/contact';
import Header from './pages/header';
import Footer from './pages/footer';




function App() {
  return (
    <Router>
      <Header />


       <Switch>
        <Route path="/" exact  component={Home} />
         <Route path="/about"  component={About} />
         <Route path="/easyclaims"  component={Easyclaims}/>
         <Route path="/easylegal"  component={Easylegal}/>
         <Route path="/easyportfolio"  component={Easyportfolio}/>
         <Route path="/privacy-policy"  component={Privacy_Policy}/>
         <Route path="/refund-policy"  component={Refund_policy}/>
         <Route path="/terms-and-conditions"  component={Terms_and_conditions}/>
         <Route path="/security"  component={Security}/>
         <Route path="/blog"  component={Blog} />
         <Route path="/blog-post"  component={Blog_post} />
        <Route path="/faqs"  component={Faqs} />
        <Route path="/contact" component={Contact} />

       </Switch>
       <Footer />
       </Router>
  );
}

export default App;
