
import Navbar from './Components/Navbar'
import Home from './Home'
import IntroductionSection from './Components/IntroductionSection'
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
function App() {
  return (

    <Router> 
     
      <Routes>
        <Route path="/" element={<Home />}   /> 
        <Route path="/Resume" element={<Home />}   />
        <Route path="/Contact" element={<Home />}   />
      </Routes>    
      
    </Router>
  );
}

export default App;
