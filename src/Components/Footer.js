import React from "react";
import {IntlProvider, FormattedMessage} from 'react-intl'

const messagesInFrench = {
   karur: "Karur",
  address1:"1st floor, Ashoka Towers,",
  address2:"Kovai Main Rd,",
  address3:"op.Ajantha Theater,",
  address4:"Karur,",
  address5:"Tamil Nadu",
  mail:"karurgoldfinance@gmail.com",
  no1:"9489043333,9489053333",

  mohanur: "Mohanur",
  address6:"1st floor,CKP Complex,",
  address7:"Namakkal Road,",
  address8:"Near BusStand,",
  address9:"Mohanur,",
  address10:"Tamil Nadu",
  no2:"9789073333,9789063033",
  mail:"karurgoldfinance@gmail.com",

  erode: "Erode",
  address11:"275/7, EVN Road",
  address12:"palam muthir nilayan,",
  address13:"2nd floor,EB Office Opposite,",
  address14:"Erode,",
  address15:"Tamil Nadu",
  no3:"9486193333,9487183333",
  mail:"karurgoldfinance@gmail.com",

  name:"Name:",
  phone:"Phone:",
  mailId:"Mail Id:",
  message:"Message",
  sumbit:"Sumbit",

  copyRight:"Copyright 2021 © Karur Gold Finance",
  rights:"All Rights Reserved",
  ktsLove:"With love of Karur Tech Solution",
  com:"@karurtech.com",
}

const Footer = () =>{
  return(
    <>
    <IntlProvider messages={messagesInFrench} > 

      <footer className="bg-gray-100 text-black-100  shadow-lg lg:mt-24 mt-12">
        <div className="lg:flex  lg:ml-48 lg:mr-48 ml-20 mr-20 justify-start">
      <div className="lg:mt-2 mt-2 ">
      <b><FormattedMessage id="karur"/></b>
        <p><FormattedMessage id="address1"/></p>
        <p><FormattedMessage id="address2"/></p>
        <p><FormattedMessage id="address3"/></p>
         <p><FormattedMessage id="address4"/></p>
          <p><FormattedMessage id="address5"/></p>
        <p className="flex leading-8">  <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg><FormattedMessage id="phone"/>
          <FormattedMessage id="no1"/></p>
        <p className="flex"> <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg> <FormattedMessage id="mail"/></p>
        </div>

        <div className="lg:text-left lg:m-auto lg:mt-2 mt-2">
        <b><FormattedMessage id="mohanur"/></b>
        <p><FormattedMessage id="address6"/></p>
        <p><FormattedMessage id="address7"/></p>
        <p><FormattedMessage id="address8"/></p>
         <p><FormattedMessage id="address9"/></p>
          <p><FormattedMessage id="address10"/></p>
        <p className="flex leading-8">  <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg><FormattedMessage id="phone"/>
          <FormattedMessage id="no2"/></p>
        <p className="flex"> <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>  <FormattedMessage id="mail"/></p>
        </div>

        <div className=" lg:text-left lg:mt-2 mt-2">
        <b><FormattedMessage id="erode"/></b>
        <p><FormattedMessage id="address11"/></p>
        <p><FormattedMessage id="address12"/></p>
        <p><FormattedMessage id="address13"/></p>
         <p><FormattedMessage id="address14"/></p>
          <p><FormattedMessage id="address15"/></p>
        <p className="flex leading-8" >  <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg><FormattedMessage id="phone"/>
          <FormattedMessage id="no3"/></p>
        <p className="flex"> <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg> <FormattedMessage id="mail"/></p>
        </div>

        </div>

       
     
        <hr></hr>
        <div className="text-center">
          <p className="p-3  mt-2"><FormattedMessage id="copyRight"/><br/><FormattedMessage id="rights"/></p>
          <a href="https://karurtech.com/" target="_blank"><FormattedMessage id="ktsLove"/> <span className="text-black"><FormattedMessage id="com"/></span></a>
          </div>
      </footer>

      </IntlProvider> 
</>
    );
  
}

export default Footer;