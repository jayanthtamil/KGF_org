import React from "react";
import {IntlProvider, FormattedMessage} from 'react-intl'
import Footer from "./Footer";

const messagesInFrench = {
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

const Branches = () => {
  return (
    <>
    <IntlProvider messages={messagesInFrench} >
     
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
    
          <iframe className="lg:w-72 w-56 mb-2 py-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0480195295204!2d78.07096441468096!3d10.95974539219728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2ffe718a05b3%3A0x50bf56b19bec7613!2sKarur%20Gold%20Finance%20-%20KGF!5e0!3m2!1sen!2sin!4v1628315898300!5m2!1sen!2sin"   ></iframe>
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
          
          <iframe className="lg:w-72 w-64 mb-2 py-2 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6774845362133!2d78.13725121437732!3d11.062789156868616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa3364c0edb555%3A0x7f9a430d1d42bd9!2sKarur%20Gold%20Finance%20-%20KGF!5e0!3m2!1sen!2sin!4v1628254585592!5m2!1sen!2sin" ></iframe>
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
               
                <iframe className="lg:w-72 w-64 mb-2 py-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.967634014278!2d77.71562821480576!3d11.33707469194257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f3e66c6945b%3A0x7b317d8bb575d815!2zUGF6aGFtdWRpciBOaWxheWFtIC0g4K6q4K604K6u4K-B4K6k4K6_4K6w4K-NIOCuqOCuv-CusuCviOCur-CuruCvjQ!5e0!3m2!1sen!2sin!4v1628320424407!5m2!1sen!2sin" ></iframe>
        </p>
       </div>

       
      </div>

      </div>


      

      
        <Footer />
      </IntlProvider>
    </>
  );
};

export default Branches;
