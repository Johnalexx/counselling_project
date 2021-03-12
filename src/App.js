import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Contact from './pages/Contact';
import viewCounsellor from './pages/ViewCounsellors';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path ="/contact" component={Contact} />
        <Route path ="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
