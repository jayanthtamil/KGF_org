import React from "react";
import {IntlProvider, FormattedMessage} from 'react-intl'

const messagesInFrench = {
  karur: "KARUR",
  address:"Address",
  addressOne:"1st floor, Ashoka Towers,",
  addressTwo:"Kovai Main Rd,",
  addressThree:"op.Ajantha Theater, Karur,",
  addressFour:"Tamil Nadu 639002",
  phone:"Phone",
  number:"1234567890",
  started:"Started",
  year:"2019",

}

const Branches = () => {
  return (
    <>
    <IntlProvider messages={messagesInFrench} >
      {/* <div className=" lg:w-2/3 lg:h-60 border-4 border-gray-500 lg:ml-auto lg:mr-auto mt-20 hover:-mt-4">
        <b className="lg:pl-96 lg:text-2xl text-xl pl-36"><FormattedMessage id="karur"/></b>
        <hr />
        <div className="lg:flex mt-4 pl-8">
          <div className="lg:pl-6 lg:text-xl text-sm">
            <p>
            <FormattedMessage id="address"/><span className=" lg:ml-10 ml-11">:</span>
              <span className=" lg:pl-8 ">
              <FormattedMessage id="addressOne"/>
              </span>

            </p>
            <p className="lg:pl-40 pl-28"><FormattedMessage id="addressTwo"/></p>
            <p className="lg:pl-40 pl-28"><FormattedMessage id="addressThree"/></p>
            <p className="lg:pl-40 pl-28"><FormattedMessage id="addressFour"/></p>
            <p>
            <FormattedMessage id="phone"/><span className="pl-14">:</span>{" "}
              <span className="lg:pl-9"><FormattedMessage id="number"/></span>
            </p>
            <p>
            <FormattedMessage id="started"/><span className="pl-12">:</span>{" "}
              <span className="lg:pl-9"><FormattedMessage id="year"/></span>
            </p>
          </div>

          <div className="lg:ml-36  ">
          <p >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.525763531106!2d78.00630591468204!3d11.07413809211988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2bdc237d8b45%3A0x5e8700fb185a186e!2snila%20mobiles!5e0!3m2!1sen!2sin!4v1627101144277!5m2!1sen!2sin"
           w-24
          ></iframe>
        </p>
          </div>
        </div>
      </div> */}

      <div className="lg:flex lg:mt-12 lg:mb-12 ml-12 mr-12 lg:ml-24 lg:mr-24">
      
       <div className="card h- transform hover:scale-110 lg:w-1/4 shadow-2xl text-center rounded-2xl mt-4 mb-8 ">

         <div >
                <b>KARUR</b>
                <hr />
                <p>1st floor, Ashoka Towers,</p>
                <p>Kovai Main Rd,</p>
                <p>op.Ajantha Theater,</p>
                <p>Karur,</p>
                <p>Tamil Nadu</p>
                <p>94890 43333,94890 53333</p>
                <p>karurgoldfinance@gmail.com</p>
                </div>

                <div className="lg:mt-6 mt-6  lg:ml-4  ml-3 mr-2 lg:mb-2">
                <p  >
          <iframe className="lg:w-72 w-72 mb-2 py-2 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.525763531106!2d78.00630591468204!3d11.07413809211988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2bdc237d8b45%3A0x5e8700fb185a186e!2snila%20mobiles!5e0!3m2!1sen!2sin!4v1627101144277!5m2!1sen!2sin"
           
          ></iframe>
        </p>
       </div>
       
      </div>
      
      <div className="card transform hover:scale-110 lg:w-1/4 shadow-2xl text-center   lg:mx-auto  rounded-2xl mt-4 mb-8">
                <b>MOHANUR</b>
                <hr />
                <p>1st floor,CKP Complex,</p>
                <p>Namakkal Road,</p>
                <p>Near BusStand,</p>
                <p>Mohanur,</p>
                <p>Tamilnadu</p>
                <p>94861 93333,94871 83333</p>
                <p>karurgoldfinance@gmail.com</p>

                <div className="lg:mt-6 mt-6  lg:ml-4  ml-3 mr-2 lg:mb-2">
                <p >
          <iframe className="lg:w-72 w-72 mb-2 py-2 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.525763531106!2d78.00630591468204!3d11.07413809211988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2bdc237d8b45%3A0x5e8700fb185a186e!2snila%20mobiles!5e0!3m2!1sen!2sin!4v1627101144277!5m2!1sen!2sin"
           w-24
          ></iframe>
        </p>
       </div>
      </div>

      <div className="card transform hover:scale-110 lg:w-1/4 shadow-2xl  text-center     rounded-2xl mt-4 mb-8">
                <b>ERODE</b>
                <hr />
                <p>275/7, EVN Road</p>
                <p>palam muthir nilayan,</p>
                <p>2nd floor,EB Office Opposite, </p>
                <p>Erode,</p>
                <p>Tamil Nadu</p>
                <p>94861 93333,94871 83333</p>
                <p>karurgoldfinance@gmail.com</p>

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


      

      

      </IntlProvider>
    </>
  );
};

export default Branches;
