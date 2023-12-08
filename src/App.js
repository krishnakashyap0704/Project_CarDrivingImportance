import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar} from './Components/NavigationBar';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login';
import { MyCarousel } from './Components/MyCarousel';
import RTORegistrationForm from './Components/RTORegistrationForm';

function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/RTORegistrationForm' element={<RTORegistrationForm/>}></Route>
    </Routes>
    <MyCarousel></MyCarousel>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
