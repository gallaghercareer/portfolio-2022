
import Home from './Components/Home'
import Weather from './Components/Weather'
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ShoppingCart from './Components/ShoppingCart'
import Login from './Components/Login'
import Cart from './Components/Cart'
import Dashboard from './Components/Dashboard'
import {CartProvider} from './Helper/CartContext'
function App() {
  return (
 <> 
  <CartProvider>
    <Router>       
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}   /> 
        <Route path="/weather" element={<Weather />}   />
        <Route path="/shoppingcart" element={<ShoppingCart/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Home />}   />
        <Route path="/login" element={<Login/>} />  
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<Home />} />
      </Routes>    
      <Footer/>
    </Router>
    </CartProvider>
    </>
  );
}

export default App;
