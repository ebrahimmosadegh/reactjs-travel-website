import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer/Footer";
import Tourism from "./Components/Pages/Tourism";
import Tour from "./Components/Pages/Tour";
import SignUp from "./Components/Pages/SignUp";
import ScrollToTop from "./Components/Tools/ScrollToTop";
import './App.css'
function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/tourismus" exact Component={Tourism}/>
          <Route path="/tour" exact Component={Tour}/>
          <Route path="/anmeldung" exact Component={SignUp}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
