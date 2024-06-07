import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import UserProfile from './components/UserProfile';
import Settings from './components/Settings';
import Page404 from './components/Page404';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />

        <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/dashboard' Component={Dashboard}>
          <Route path='userprofile' Component={UserProfile}/>
          <Route path='settings' Component={Settings}/>
        </Route>
        <Route path='/users/:name/feedback' Component={Feedback}/>
        <Route path='/users/:name' Component={Users}>

        {/* <Route path='/users/:userid' Component={UserDetails} /> */}
        </Route>
        <Route path='/*' Component={Page404}/>
        </Routes>
            
      </BrowserRouter>
    

    </div>
  );
}

export default App;
