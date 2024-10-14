import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer/Footer";
import Tourism from "./Components/Pages/Tourism";
import Tour from "./Components/Pages/Tour";
import './App.css'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/tourismus" exact Component={Tourism}/>
          <Route path="/tour" exact Component={Tour}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
