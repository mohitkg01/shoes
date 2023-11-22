import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./Components/Header/Header";
import './App.css';
import Shop from "./Components/Header/Shop/Shop";
import About from "./Components/Header/About/About";
import Contact from "./Components/Header/Contact/Contact";
import Home from "./Components/Home/Home";
import Cartpage from "./Components/Cart/Cartpage";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
   <Router > 
    <Header/>
    <Routes>
      <Route  path="/home"element={<Home/>}/>
      <Route path="/shop" Component={Shop}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cartpage/>} />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
