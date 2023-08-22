import logo from './logo.svg';
import './App.css';
import Navbar from './components/headersection/Navbar';
import Loginpage from './components/pages/Loginpage';
import Navbar2 from './components/headersection/Navbar2';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Loginpage></Loginpage>
 
    </div>
  );
}

export default App;
