
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";

import Button from '@mui/material/Button';

import { Link } from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      
      <div className='App-header'>
       <Router>
       
          <Button color="inherit"><Link to="/">Menu</Link></Button>
          <Button color="inherit"> <Link to="/contact">Contact</Link></Button>
          <Button color="inherit"><Link to="/menu">Menu</Link></Button>
                    
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/menu" element={<Menu />}/>
        </Routes>

       </Router>
       </div>
 
    </div>
  );
}

export default App;
