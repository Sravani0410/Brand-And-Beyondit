
import Register from "./components/Register";
import {Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      {/* <Router>
        <Routes>
        <Route Link="/login" element={<Login/>} />
        <Route Link="/register" element={<Register/>} />
        </Routes>
        
      </Router> */}
      {/* <Routes>
      <Route exact path="/login"><Login/></Route>
      <Route exact path="/register"><Register/></Route>
      </Routes> */}
      
           
      <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
         
        </Routes>
    </>
  );
}

export default App;
