import './App.css'
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Index from './pages/Index';
import Contact from './pages/Contact';
import viewCounsellor from './pages/ViewCounsellors';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Help from './pages/FindCounsellor';
// Important Pages
import BookAppointment from './pages/BookAppointment';
// Playground and Style
import Playground from './pages/Playground';
import './pages/Playground.css'
// Auth Imports
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ResetPass from './pages/auth/Reset-pass';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav />
          <Route path ="/" component={Index} exact/>
          <Route path ="/contact" component={Contact} exact/>
          <Route path ="/about" component={About} exact/>
          <Route path ="/view-counsellors" component={viewCounsellor} exact/>
          <Route path ="/faq" component={FAQs} exact/>
          <Route path="/find-counsellor" component={Help} exact/>
          <Route path="/play" component={Playground} exact/>
          {/* Important Pages */}
          <Route path="/book-appointment" component={BookAppointment} exact/>
          {/* Auth path */}
          <Route path ="/login" component={Login} exact/>
          <Route path ="/signup" component={Signup} exact/>
          <Route path = "/reset-password" component={ResetPass} exact/>
          {/* Error Pages
          <Route path="*" component={NotFound} exact/> */}
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
