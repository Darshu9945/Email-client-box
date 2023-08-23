import logo from './logo.svg';
import './App.css';
import Navbar from './components/headersection/Navbar';
import Loginpage from './components/pages/Loginpage';
import Navbar2 from './components/headersection/Navbar2';


import { Routes,Route } from 'react-router-dom';
import Signup from './components/pages/Signup';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Loginpage></Loginpage>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/home' element={<Navbar2></Navbar2>}></Route>
    </Routes>
  );
}

export default App;
