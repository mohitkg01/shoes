import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home";
import AdminPage from "./Components/AdminPage";
function App() {
  return (
   <Router> 
     <h1>Shoes Store</h1>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
