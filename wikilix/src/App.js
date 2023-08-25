import './AppStyle.css'
import ForBuy from "./Components/pages/buy/ForBuy";
import NavBar from "./Components/nav/NavBar";
import ForRent from "./Components/pages/rent/ForRent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/home/Home";
import Footer from "./Components/footer/Footer";
import Services from "./Components/pages/services/Services";
import About from "./Components/pages/about/About";
import Property from "./Components/pages/property/Property";
import News from "./Components/pages/news/News";
import Contact from "./Components/pages/contact/Contact";
import Login from "./Components/pages/login/Login";
import SignUp from "./Components/pages/signup/SignUp";
import User from './Components/pages/user/User';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>



        <div className="contents-container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/for-buy" element={<ForBuy/>}/>
            <Route path="/for-rent" element={<ForRent/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/property" element={<Property/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/contact-us" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/user" element={<User/>}/>
          </Routes>
        </div>



        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
