import React from'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,Navigate
} from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import { Container } from 'react-bootstrap';
import Home from './pages/home/home';
import Speaking from './pages/speaking/Speaking'
import Writing from './pages/writing/Writing'
import Listning from './pages/listning/Listning'
import Reading from './pages/reading/Reading'
import Calander from './pages/calander/Calander'
import Navbar from './components/Navbar/Navbar';
import {AuthProvider} from './components/context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import {useAuth} from './components/context/AuthContext'

const App = ({location}) => {
  function RequireAuth({ children, redirectTo }) {
    let {currentUser} = useAuth();
    return currentUser ? children : <Navigate to={redirectTo} />;
  }  
  
  return (

    <div>
     
    <Router>
    <AuthProvider>
    <Navbar></Navbar>
      
      <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login/>}/>
     
      <Route exact path="/" element={<RequireAuth redirectTo="/login">
            <Home />
          </RequireAuth>}/>
          <Route exact path="/speaking" element={<RequireAuth redirectTo="/login">
            <Speaking />
          </RequireAuth>}/>
          <Route exact path="/reading" element={<RequireAuth redirectTo="/login">
            <Reading />
          </RequireAuth>}/>
          <Route exact path="/writing" element={<RequireAuth redirectTo="/login">
            <Writing />
          </RequireAuth>}/>
          <Route exact path="/listning" element={<RequireAuth redirectTo="/login">
            <Listning />
          </RequireAuth>}/>
          <Route exact path="/calander" element={<RequireAuth redirectTo="/login">
            <Calander />
          </RequireAuth>}/>
          
      <Route
        path="*"
        element={<Navigate to="/login" />}
    />
      </Routes>
      </AuthProvider>
      </Router>
     
    </div>
    
      
  );
}

/*
const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Navigate to="/login" />} />
    <Route path="/login" component={Login} />
  </div>
)


 const App = () => (
    <div>
    <div className="container">
      <Navbar />
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login/>}/>
      <PrivateRoute exact path="/" element={<Home/>}/>
      <PrivateRoute exact path="/contact" element={<Contact/>}/>
      <PrivateRoute exact path="/upload" element={<Upload/>}/>
      <Route
        path="*"
        element={<Navigate to="/login" />}
    />
    </div>
    </div>
 )*/

export default App;
