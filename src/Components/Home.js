import React from "react";
import Banner from "./Banner";
import About from './About';
import Ourservices from "./Ourservices";
import Branches from "./Branches";
//  import Contact from "./Contact";
import Footer from "./Footer";
import Companies from "./Ourgroupofcompanies";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {IntlProvider, FormattedMessage} from 'react-intl'

const messagesInFrench = {
  abouthead1: "Our Story",
  aboutpara1:"Karur Gold Finance, with a reputation that has been shaped over decades with high quality practices, total customer satisfaction and steady growth, spanning decades in the field of business, is a legacy built on God-given values of trust, truth, transparency and tradition and has become one of the top business houses today by the grace of God.we have three branches in tamilnadu with over 50 employees. we have walk in customer of over 2000 happy customers.",

  servicepara2:
    "Need to sell gold? Yeah, we are here for you. You may need money for several reasons like medical emergency or you want to buy some other asset instead of gold or you need to buy home. Whichever the case may be, we are here to understand the need and buy your old gold and offer quick and efficient cash for your old gold. The process is instant and you can trust us to provide with the best rates.",
  servicepara1:
    "A gold loan or a loan against gold is a secured loan which customers can avail from Karur Gold Finance in lieu of gold ornaments like gold jewellery. It is the easiest way to fulfil your financial needs and proves to be a sensible alternative to availing Gold loans from bankingchannels.",
  servicepara3:
    "Tired of paying huge dues for mortgage gold in bank and other finance, we are here to reduce your stress by paying mortgage gold in bank or finance and providing best loan for your gold with high market value at low interest.For loan interest use our loan calculator to know our best loan value for your gold.",
  servicehead1: "Gold Loan",
  servicehead2: "Old Gold Buying",
  servicehead3: "Taking mortgage gold from bank",

  karur: "KARUR",
  address1:"1st floor, Ashoka Towers,",
  address2:"Kovai Main Rd,",
  address3:"op.Ajantha Theater,",
  address4:"Karur,",
  address5:"Tamil Nadu",
  mail:"karurgoldfinance@gmail.com",
  no1:"9489043333,9489053333",

  mohanur: "MOHANUR",
  address6:"1st floor,CKP Complex,",
  address7:"Namakkal Road,",
  address8:"Near BusStand,",
  address9:"Mohanur,",
  address10:"Tamil Nadu",
  no2:"9789073333,9789063033",
  mail:"karurgoldfinance@gmail.com",

  erode: "ERODE",
  address11:"275/7, EVN Road",
  address12:"palam muthir nilayan,",
  address13:"2nd floor,EB Office Opposite,",
  address14:"Erode,",
  address15:"Tamil Nadu",
  no3:"9486193333,9487183333",
  mail:"karurgoldfinance@gmail.com",

}

const Home = () =>{
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    

};
return(
  <>
  <IntlProvider messages={messagesInFrench} >

     <div className="slider m-0 p-0">
      <Slider {...settings}>
          <div>
            <img  className="w-full max-h-screen" src="/Image/banner1.jpg"  alt="name"/>
          </div>
          <div>
            <img  className="w-full max-h-screen" src="/Image/banner2.jpg"  alt="name"/>
          </div>
          <div>
            <img  className="w-full max-h-screen" src="/Image/banner3.jpg"  alt="name"/>
          </div>
          <div>
            <img  className="w-full max-h-screen" src="/Image/banner4.jpg"  alt="name"/>
          </div>
        </Slider>
    </div>


    <div className="lg:flex mt-24 lg:ml-24 mx-8">
           <div className=" lg:w-2/4  ">
             <img alt="..." className="align-middle border-none max-w-full h-auto rounded-full" src="/Image/santhosh.JPG" />
             <p className="text-center text-md">Santhose Murugan</p>
             <p className="text-center  text-md">Founder,KGF</p>
         </div>
         <div className="lg:w-2/4  lg:mr-24  text-justify ">
           <b className="lg:text-2xl text-xl lg:pl-12 focus:bg-red-800"> <FormattedMessage id="abouthead1"/> </b>
           <p className="lg:text-xl text-sm lg:pl-12"><FormattedMessage id="aboutpara1"/> </p> 
          </div>
       </div>


       <div className="lg:flex lg:mt-24 mt-12   lg:-ml-8">
           <div className="lg:w-1/3">
           <div className=" lg:w-1/2 w-1/2 m-auto">
             <img className="lg:h-96  lg:w-96" alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="/Image/goldloan.jpg" />
         </div>
         </div>
         <div className="lg:w-2/3">
         <div className="  lg:mr-24 mx-12  text-justify ">
           <b className="lg:text-2xl text-xl "> <FormattedMessage id="servicehead1"/> </b>
           <p className="lg:text-xl text-sm "><FormattedMessage id="servicepara1"/> </p> 
            </div>
            </div>
       </div>

       <div className="lg:flex lg:mt-24 mt-12   lg:-ml-8">
           
           <div className="lg:1/3">
           <div className=" lg:w-1/2 w-1/2 m-auto">
             <img className="lg:h-96  lg:w-96" alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="/Image/oldgold.jpg" />
         </div>
         </div>
         <div className="lg:2/3">
         <div className="  lg:mr-24 mx-12  text-justify ">
           <b className="lg:text-2xl text-xl "> <FormattedMessage id="servicehead2"/> </b>
           <p className="lg:text-xl text-sm "><FormattedMessage id="servicepara2"/> </p> 
            </div>
            </div>

       </div>

       <div className="lg:flex lg:mt-24 mt-12 lg:-ml-8">
           <div className="lg:w-1/3">
           <div className=" lg:w-1/2 w-1/2 m-auto">
             <img className="lg:h-96  lg:w-96" alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="/Image/mortgage.jpg" />
         </div>
         </div>
         <div className="lg:w-2/3">
         <div className="  lg:mr-24  mx-12  text-justify ">
           <b className="lg:text-2xl text-xl "> <FormattedMessage id="servicehead3"/> </b>
           <p className="lg:text-xl text-sm "><FormattedMessage id="servicepara3"/> </p> 
            </div>
            </div>
       </div>

       

       
       <div className="lg:flex lg:mt-12 lg:mb-12 ml-12 mr-12 lg:ml-24 lg:mr-24">
      <div className="card h- transform hover:scale-110 lg:w-1/4 shadow-2xl text-center rounded-2xl mt-4 mb-8 ">
        <div >        
               <b><FormattedMessage id="karur"/></b>
               <hr />
       <p><FormattedMessage id="address1"/></p>
       <p><FormattedMessage id="address2"/></p>
       <p><FormattedMessage id="address3"/></p>
        <p><FormattedMessage id="address4"/></p>
         <p><FormattedMessage id="address5"/></p>
         <p><FormattedMessage id="no1"/></p>
         <p><FormattedMessage id="mail"/></p>
               </div>
               <div className="lg:mt-6 mt-6  lg:ml-4  mx-3  lg:mb-2">
               <p  >
         <iframe className="lg:w-72 w-56 mb-2 py-2"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.525763531106!2d78.00630591468204!3d11.07413809211988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2bdc237d8b45%3A0x5e8700fb185a186e!2snila%20mobiles!5e0!3m2!1sen!2sin!4v1627101144277!5m2!1sen!2sin"
      
         ></iframe>
       </p>
      </div>
     </div>
     <div className="card transform hover:scale-110 lg:w-1/4 shadow-2xl text-center   lg:mx-auto  rounded-2xl mt-4 mb-8">
     <b><FormattedMessage id="mohanur"/></b>
               <hr />
       <p><FormattedMessage id="address6"/></p>
       <p><FormattedMessage id="address7"/></p>
       <p><FormattedMessage id="address8"/></p>
        <p><FormattedMessage id="address9"/></p>
         <p><FormattedMessage id="address10"/></p>
         <p><FormattedMessage id="no2"/></p>
         <p><FormattedMessage id="mail"/></p>
               <div className="lg:mt-6 mt-6  lg:ml-4  ml-3 mr-2 lg:mb-2">
               <p >
         <iframe className="lg:w-72 w-64 mb-2 py-2 "
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.525763531106!2d78.00630591468204!3d11.07413809211988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2bdc237d8b45%3A0x5e8700fb185a186e!2snila%20mobiles!5e0!3m2!1sen!2sin!4v1627101144277!5m2!1sen!2sin"
          w-24
         ></iframe>
       </p>
      </div>
     </div>
     <div className="card transform hover:scale-110 lg:w-1/4 shadow-2xl  text-center     rounded-2xl mt-4 mb-8">
     <b><FormattedMessage id="erode"/></b>
               <hr />
       <p><FormattedMessage id="address11"/></p>
       <p><FormattedMessage id="address12"/></p>
       <p><FormattedMessage id="address13"/></p>
        <p><FormattedMessage id="address14"/></p>
         <p><FormattedMessage id="address15"/></p>
         <p><FormattedMessage id="no3"/></p>
         <p><FormattedMessage id="mail"/></p>
               <div className="lg:mt-6 mt-6  lg:ml-4  ml-3 mr-2 lg:mb-2">
               <p >
         <iframe className="lg:w-72 w-72 mb-2 py-2 "
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.525763531106!2d78.00630591468204!3d11.07413809211988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2bdc237d8b45%3A0x5e8700fb185a186e!2snila%20mobiles!5e0!3m2!1sen!2sin!4v1627101144277!5m2!1sen!2sin"
          w-24
         ></iframe>
       </p>
      </div>
     </div>
     </div>

<Companies />

<Footer />

    </IntlProvider>
  </>

)
}

export default Home;