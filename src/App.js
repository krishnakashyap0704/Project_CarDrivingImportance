import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar} from './Components/NavigationBar';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login';
import { Cards } from './Components/Cards';

function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    <Cards></Cards>
    <Footer></Footer>
   
    </BrowserRouter>
  );
}

export default App;
