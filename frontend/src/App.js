
import Register from "./components/Register";
import {Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login"
function App() {
  return (
    <>
    
      <Router>
        <Routes>
        <Route Link="/login" element={<Login/>} />
        <Route Link="/register" element={<Register/>} />
        </Routes>
        
      </Router>
      
   
      
      
      
    </>
  );
}

export default App;
