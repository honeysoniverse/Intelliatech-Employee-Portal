import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Onboarding from './Pages/Onboarding';
import Home from './Pages/Home';
import Updateprofile from './Pages/Updateprofile';
import Employee from './Pages/Employee';
import Addemployee from './Pages/Addemployee';
import Login from './Pages/Login';
function App() {

 const status=setTimeout(()=>{ localStorage.getItem("responsestatus")}) 


  return (
    
      <Router>
        {(status==="success")?(
          <div>
        <Dashboard/>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/onboarding' element={<Onboarding />} />

          <Route path='/updateprofile' element={<Updateprofile />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/addemployee' element={<Addemployee />} />

        </Routes></div>
  ) : <Login/>}
        
      </Router>)}
    

export default App;
