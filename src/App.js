import "./App.css";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Nftcard from "./Pages/Nftcard";
import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="nftcard" element={<Nftcard />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="*" element={<div>404 Not found</div>} />
    </Routes>
  );
}

export default App;
