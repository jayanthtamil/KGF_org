import React from "react";
import Footer from "./Footer";
import {IntlProvider, FormattedMessage} from 'react-intl'

const messagesInFrench = {
  karur: "Karur",
  addressOne:"1st floor, Ashoka Towers,",
  addressTwo:"Kovai Main Rd,",
  addressThree:"op.Ajantha Theater,",
  addressfour:"Karur,",
  addressfive:"Tamil Nadu",
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
}

const Contact = () => {
  return (
    <>

<IntlProvider messages={messagesInFrench} >    
    <div className="lg:flex  lg:ml-48 lg:mr-48 ml-20 mr-20">
      <div className="lg:mt-20 mt-6">
        <b><FormattedMessage id="karur"/></b>
        <hr />
        <p><FormattedMessage id="addressOne"/></p>
        <p><FormattedMessage id="addressTwo"/></p>
        <p ><FormattedMessage id="addressThree"/></p>
         <p ><FormattedMessage id="addressfour"/></p>
          <p ><FormattedMessage id="addressfive"/></p>
        <p className="flex leading-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" w-6 "
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
          </svg>
          <FormattedMessage id="phone"/>
          <FormattedMessage id="no1"/>
        </p>
        <p className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <FormattedMessage id="mail"/>
        </p>
      </div>

      <div className="lg:mx-auto  lg:mt-20 mt-6">
        <b><FormattedMessage id="mohanur"/></b>
        <hr />
        <p><FormattedMessage id="address6"/></p>
        <p><FormattedMessage id="address7"/></p>
        <p><FormattedMessage id="address8"/></p>
         <p><FormattedMessage id="address9"/></p>
          <p><FormattedMessage id="address10"/></p>
        <p className="flex leading-8">
          <svg
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
          </svg>
          <FormattedMessage id="phone"/>
           <FormattedMessage id="no2"/>
        </p>
        <p className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <FormattedMessage id="mail"/>
        </p>
      </div>

      <div className=" lg:mt-20 mt-6">
        <b><FormattedMessage id="erode"/></b>
        <hr />
        <p><FormattedMessage id="address11"/></p>
        <p><FormattedMessage id="address12"/></p>
        <p><FormattedMessage id="address13"/></p>
         <p><FormattedMessage id="address14"/></p>
          <p><FormattedMessage id="address15"/></p>
        <p className="flex leading-8">
          <svg
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
          </svg>
          <FormattedMessage id="phone"/>
           <FormattedMessage id="no3"/>
        </p>
        <p className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <FormattedMessage id="mail"/>
        </p>
      </div>
    </div>

    

    
 
            <div className=" lg:pl-36 lg:py-12 lg:flex mx-12"> 

              <form>
              <label> <FormattedMessage id="name"/><br/>
                  <input
                    type="text"
                    placeholder="Jayanth..."
                    className=" border-2 border-gray-900 lg:w-80 w-72 py-2 rounded-lg"
                  />
                </label><br />

                <label> <FormattedMessage id="phone"/><br/>
                  <input
                    type="text"
                    placeholder="9876543210..."
                    className="border-2 border-gray-600 lg:w-80 w-72 py-2 rounded-lg"
                  />
                </label><br />

                <label> <FormattedMessage id="mailId"/><br/>
                  <input
                    type="text"
                    placeholder="kgf123@gmail.com..."
                    className="border-2 border-gray-600  lg:w-80 w-72 py-2 rounded-lg"
                  />
                </label><br />

                <label> <FormattedMessage id="message"/>
                  <textarea
                    class=" border-2 border-gray-600   block lg:w-80 w-72 rounded-lg"
                    rows="4"
                   
                    placeholder=" convey here..."
                  ></textarea>
                </label>

                <div className="text-center ">
                <button className="rounded-full border-4 px-12 py-2 font-bold
      text-sm bg-blue-400 border-blue-500 w-72 mt-5"><b><FormattedMessage id="sumbit"/></b></button>
      </div>
                <br />
              </form>

              {/* <p className="border-2 border-gray-600 h-3/6 lg:mt-12 lg:ml-44 lg:w-6/12 rounded-lg "> 
          <iframe className="w-full h-60" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.525763531106!2d78.00630591468204!3d11.07413809211988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2bdc237d8b45%3A0x5e8700fb185a186e!2snila%20mobiles!5e0!3m2!1sen!2sin!4v1627101144277!5m2!1sen!2sin"
          ></iframe>
        </p> */}
        <p className="border-2 border-gray-600 h-3/6 lg:mt-12 lg:ml-44 lg:w-6/12 rounded-lg "> 
        <iframe className="w-full h-60"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0480195295204!2d78.07096441468096!3d10.95974539219728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2ffe718a05b3%3A0x50bf56b19bec7613!2sKarur%20Gold%20Finance%20-%20KGF!5e0!3m2!1sen!2sin!4v1628315898300!5m2!1sen!2sin"  ></iframe>
        </p>

              </div>
             
             
              <Footer />
              </IntlProvider>
    </>
  );
};

export default Contact;
