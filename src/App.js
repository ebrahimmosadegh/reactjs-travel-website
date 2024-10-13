import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer/Footer";
import './App.css'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
