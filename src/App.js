import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar} from './Components/NavigationBar';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login';
import { Cards } from './Components/Cards';
import { MyCarousel } from './Components/MyCarousel';
import RTORegistrationForm from './Components/RTORegistrationForm';
import { DrivingSafetyTips } from './Components/DrivingSafetyTips';
import { DrivingSchoolCourses } from './Components/DrivingSchoolCourses';





function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <MyCarousel></MyCarousel>
   <DrivingSchoolCourses></DrivingSchoolCourses>
    <Routes>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/RTORegistrationForm' element={<RTORegistrationForm/>}></Route>
    </Routes>
    <Cards></Cards>
 
    <DrivingSafetyTips></DrivingSafetyTips>
    
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
