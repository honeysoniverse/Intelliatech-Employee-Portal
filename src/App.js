import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Onboarding from './Pages/Onboarding';
import Home from './Pages/Home';
import Updateprofile from './Pages/Updateprofile';
import Employee from './Pages/Employee';
import Addemployee from './Pages/Addemployee';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Footer from './components/Footer';





function App() {
  const Token =localStorage.getItem("token")
if(!Token) {
  return <Login/>
}

  return (
    <div> 
    <Router>
      <Dashboard/>
     
   <Routes>
   <Route path="/" element={<Home />}></Route>
    <Route path="/Onboarding" element={<Onboarding />}></Route>
    <Route path="/Home" element={<Home />}></Route>
    <Route path="/Updateprofile" element={<Updateprofile />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
    <Route path="/Employee" element={<Employee />}></Route>
    <Route path="/Addemployee" element={<Addemployee />}></Route>
    </Routes>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
