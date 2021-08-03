import React from "react";
import {IntlProvider, FormattedMessage} from 'react-intl'

const messagesInFrench = {
  karur: "Karur",
  addressOne:"21,22 Cowley Brown Road,",
  addressTwo:"R.S. Puram,",
  addressThree:"Coimbatore - 641002",
  number:"1234567890",
  mail:"karurgoldfinance@gmail.com",

  
  mohanur: "Mohanur",
  erode: "Erode",

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

      <footer className="bg-gray-100 text-black-100 text-center relative shadow-lg">
        <div className="lg:flex   lg:ml-64 lg:mr-64 ml-20 mr-20">
      <div className="lg:text-left ">
      <b><FormattedMessage id="karur"/></b>
        <p><FormattedMessage id="addressOne"/></p>
        <p><FormattedMessage id="addressTwo"/></p>
        <p><FormattedMessage id="addressThree"/></p>
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
          </svg><FormattedMessage id="number"/></p>
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

        <div className="lg:text-left lg:m-auto">
        <b><FormattedMessage id="erode"/></b>
        <p><FormattedMessage id="addressOne"/></p>
        <p><FormattedMessage id="addressTwo"/></p>
        <p><FormattedMessage id="addressThree"/></p>
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
          </svg><FormattedMessage id="number"/></p>
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

        <div className=" lg:text-left ">
        <b><FormattedMessage id="Mohanur"/></b>
        <p><FormattedMessage id="addressOne"/></p>
        <p><FormattedMessage id="addressTwo"/></p>
        <p><FormattedMessage id="addressThree"/></p>
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
          </svg><FormattedMessage id="number"/></p>
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
        <div>
          <p className="p-3  mt-2"><FormattedMessage id="copyRight"/><br/><FormattedMessage id="rights"/></p>
          <a href="https://karurtech.com/" target="_blank"><FormattedMessage id="ktsLove"/> <span className="text-black"><FormattedMessage id="com"/></span></a>
          </div>
      </footer>

      </IntlProvider> 
</>
    );
  
}

export default Footer;