import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home'
import Diagnosis from "../src/pages/Diagnosis"
import Login from "../src/pages/Login"
import About from "../src/pages/About"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
