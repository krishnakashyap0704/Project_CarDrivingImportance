import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar} from './Components/NavigationBar';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login';


import RTORegistrationForm from './Components/RTORegistrationForm';

import { DrivingSchoolRegistration } from './Components/DrivingSchoolRegistration';
import { Dashboard } from './Components/Dashboard';


function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
    <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/RTORegistrationForm' element={<RTORegistrationForm/>}></Route>
      <Route path='/DrivingSchoolRegistration' element={<DrivingSchoolRegistration/>}></Route>
    </Routes>
    <Cards></Cards>
 
    <DrivingSafetyTips></DrivingSafetyTips>
    <TrafficSigns></TrafficSigns>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
