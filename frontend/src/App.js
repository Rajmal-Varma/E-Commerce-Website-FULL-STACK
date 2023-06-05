import React from "react";
import Header from "./components/client/Header/Header.jsx";
import Footer from "./components/client/Footer/Footer.jsx"
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    
   <Router>
    <Header/>
    <Footer/>
   </Router>
  );
}

export default App;
