import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import Footer from "./Footer";

const messagesInFrench = {
  servicepara2:
    "Need to sell gold? Yeah, we are here for you. You may need money for several reasons like medical emergency or you want to buy some other asset instead of gold or you need to buy home. Whichever the case may be, we are here to understand the need and buy your old gold and offer quick and efficient cash for your old gold. The process is instant and you can trust us to provide with the best rates.",
  servicepara1:
    "A gold loan or a loan against gold is a secured loan which customers can avail from Karur Gold Finance in lieu of gold ornaments like gold jewellery. It is the easiest way to fulfil your financial needs and proves to be a sensible alternative to availing Gold loans from bankingchannels.",
  servicepara3:
    "Tired of paying huge dues for mortgage gold in bank and other finance, we are here to reduce your stress by paying mortgage gold in bank or finance and providing best loan for your gold with high market value at low interest.For loan interest use our loan calculator to know our best loan value for your gold.",
  servicehead1: "Gold Loan",
  servicehead2: "Old Gold Buying",
  servicehead3: "Taking mortgage gold from bank",
  
};
const Ourservices = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} >
      <div className="lg:flex lg:mt-24 mt-12  ">
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

       <div className="lg:flex lg:mt-24 mt-12  ">
           
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

       <div className="lg:flex lg:mt-24 mt-12 ">
           <div className="lg:w-1/3">
           <div className=" lg:w-1/2 w-1/2 m-auto">
             <img className="lg:h-96  lg:w-96" alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="/Image/mortgage.jpg" />
         </div>
         </div>
         <div className="lg:w-2/3">
         <div className="  lg:mr-24 mx-12  text-justify ">
           <b className="lg:text-2xl text-xl "> <FormattedMessage id="servicehead3"/> </b>
           <p className="lg:text-xl text-sm "><FormattedMessage id="servicepara3"/> </p> 
            </div>
            </div>
       </div>

       









       {/* <div className="lg:flex lg:mt-24 mt-12 lg:ml-24">
           
       <div className="lg:w-1/2 w-1/2 m-auto">
         <img className="lg:h-96  lg:w-96" className="align-middle border-none max-w-full h-auto rounded-lg" src="/Image/oldgold.jpg" /> 
        </div>
         
         <div className="  lg:mr-24 mx-12  text-justify ">
           <b className="lg:text-2xl text-xl lg:pl-12"> <FormattedMessage id="servicehead2"/> </b>
           <p className="lg:text-xl text-sm lg:pl-12"><FormattedMessage id="servicepara2"/> </p> 
            </div>
         
       </div>

       <div className="lg:flex lg:mt-24 mt-12 lg:ml-24">
           
       <div className="lg:w-1/2 w-1/2 m-auto">
       <img className=" lg:h-96  lg:w-96" alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="/Image/mortgage.jpg" />
       </div>
         
         <div className="  lg:mr-24 mx-12 text-justify ">
           <b className="lg:text-2xl text-xl lg:pl-12"> <FormattedMessage id="servicehead3"/> </b>
           <p className="lg:text-xl text-sm lg:pl-12"><FormattedMessage id="servicepara3"/> </p> 
            </div>
         
       </div> */}
      



       <Footer />
     </IntlProvider>
    </>
  );
};

export default Ourservices;


{/* <div className="lg:flex mt-12 lg:mx-48">
          <div className="lg:mt-24 lg:w-1/4">
            <img
              alt="..."
              className=" lg:h-44  h:24 w-40 m-auto rounded-lg"
              src="/Image/Gold.jpg"
            />
          </div>
          <div className="lg:mt-24  lg:w-3/4  lg:text-justify">
            <b className=" lg:text-2xl text-xl text-center ">
              <FormattedMessage id="head" />
            </b>
            <p className=" lg:text-xl text-sm text-justify">
              <FormattedMessage id="name" />{" "}
            </p>{" "}
          </div>
        </div>

        <div className="lg:mt-24 text-center ">
          <b className=" lg:text-2xl text-xl ">
            <FormattedMessage id="headOne" />
          </b>
          <div className="lg:flex  ">
            <img
              alt="..."
              className="lg:h-44 w-48 lg:ml-24  m-auto rounded-lg"
              src="/Image/Agriculture.jpg"
            />
            <p className="  lg:text-xl text-sm lg:mr-24 lg:pl-12">
              <FormattedMessage id="nameOne" />{" "}
            </p>{" "}
          </div>
        </div>

        <div className="lg:mt-24 text-center">
          <b className="lg:ml-48 lg:text-2xl text-xl ">
            <FormattedMessage id="headTwo" />
          </b>
          <div className="lg:flex  ">
            <img
              alt="..."
              className="lg:h-44 w-48 lg:ml-48 m-auto border-none   rounded-lg"
              src="/Image/Vehicle.png"
            />
            <p className="lg:mr-48 lg:ml-8 sm:m-auto  lg:text-xl text-sm">
              <FormattedMessage id="nameOne" />
            </p>{" "}
          </div>
        </div>

        <div className="lg:mt-24 text-center">
          <b className="lg:ml-48 lg:text-2xl text-xl ">
            <FormattedMessage id="headThree" />
          </b>
          <div className="lg:flex  ">
            <img
              alt="..."
              className="lg:h-44 w-48 lg:ml-48 m-auto border-none   rounded-lg"
              src="/Image/Personal.jpg"
            />
            <p className="lg:mr-48 lg:ml-8 sm:m-auto  lg:text-xl text-sm">
              <FormattedMessage id="nameOne" />{" "}
            </p>{" "}
          </div>
        </div> */}