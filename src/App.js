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
import FindCounsellor from './pages/FindCounsellor';
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
import ProfilePage from './pages/ProfilePage';
import AdminCounselLog from './pages/functions/admin/AdminCounselLog';
import CounselIndex from './pages/functions/admin/CounselIndex';
import PendingMeeting from './pages/functions/admin/PendingMeeting';
import UserChatRoom from './pages/functions/authorized users/UserChatRoom';
import AdminChatRoom from './pages/functions/admin/AdminChatRoom';
import Notification from './pages/functions/authorized users/Notification';

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
          <Route path="/find-counsellor" component={FindCounsellor} exact/>
          <Route path="/play" component={Playground} exact/>
          {/* Permission- Admin */}
          <Route path="/admin/index" component={CounselIndex} exact/>
          <Route path="/admin/counsel-log" component={AdminCounselLog} exact/>
          <Route path="/admin/meeting-requests" component={PendingMeeting} exact/>
          <Route path="/admin/chat" component={AdminChatRoom} exact/>
          {/* Permission - Authorized Clients */}
          <Route path="/chat" component={UserChatRoom} exact/>
          {/* Important Pages */}
          <Route path="/book-appointment" component={BookAppointment} exact/>
          <Route path="/user-profile" component={ProfilePage} exact/>
          <Route path="/notifications" component={Notification} exact/>
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
