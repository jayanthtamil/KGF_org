import React,{useState,useEffect} from "react";
import './App.css';
import Header from './Components/Header';
import Dropdown from './Components/Dropdown';
import Home from './Components/Home';
import About from './Components/About';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Contact from "./Components/Contact";
import Ourservices from "./Components/Ourservices";
import Branches from "./Components/Branches";
import Calculator from "./Components/Calculator";
import Blog from "./Components/Blog";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
    <Router>
      <div>
      <Header toggle={toggle} />
       <Dropdown isOpen={isOpen} toggle={toggle} /> 
      

       <Switch>
        <Route  exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/ourservices" component={Ourservices} />
        <Route path="/Branches" component={Branches} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/Blog" component={Blog} />
        <Route path="/contact" component={Contact} />
       
         {/*
        <Route path="/projects" component={Projects} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} /> */}
      </Switch> 

      </div>
      </Router>
    </>

  );
}

export default App;
