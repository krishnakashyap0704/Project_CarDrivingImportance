import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar} from './Components/NavigationBar';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { RTORegistrationForm } from './Components/RTORegistrationForm';
import { DrivingSchoolRegistration } from './Components/DrivingSchoolRegistration';
import { Dashboard } from './Components/Dashboard';
import { ContactUs } from './Components/ContactUs';
import { AboutUs } from './Components/AboutUs';
import { AboutLicencing } from './Components/AboutLicencing';
import { AboutPermit } from './Components/AboutPermit';


function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/ContactUs' element={<ContactUs/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/AboutPermit' element={<AboutPermit/>}></Route>
      <Route path='/AboutLicencing' element={<AboutLicencing/>}></Route>
      <Route path='/RTORegistrationForm' element={<RTORegistrationForm/>}></Route>
      <Route path='/DrivingSchoolRegistration' element={<DrivingSchoolRegistration/>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
