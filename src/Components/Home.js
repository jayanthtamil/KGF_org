import React from "react";
import Banner from "./Banner";
import About from './About';
import Ourservices from "./Ourservices";
import Branches from "./Branches";
//  import Contact from "./Contact";
import Footer from "./Footer";
import Companies from "./Ourgroupofcompanies";


const Home = () =>{
return(
  <div>
      <Banner />
     <About />
     <Ourservices />
     <Branches />
     <Companies />
     <Footer />
  </div>
)
}

export default Home;