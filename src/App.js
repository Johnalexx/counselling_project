import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Index from './pages/Index';
import Contact from './pages/Contact';
import viewCounsellor from './pages/ViewCounsellors';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Help from './pages/Help';
// Auth Imports
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ResetPass from './pages/auth/Reset-pass';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path ="/" component={Index} exact/>
        <Route path ="/contact" component={Contact} exact/>
        <Route path ="/about" component={About} exact/>
        <Route path ="/view-counsellors" component={viewCounsellor} exact/>
        <Route path ="/faq" component={FAQs} exact/>
        <Route path="/guide" component={Help} exact/>
        {/* Auth path */}
        <Route path ="/login" component={Login} exact/>
        <Route path ="/signup" component={Signup} exact/>
        <Route path = "/reset-password" component={ResetPass} exact/>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
