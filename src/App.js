import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import "./sass/index.scss";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Section/Home";
import Admin from "./Section/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
