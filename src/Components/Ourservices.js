import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import Footer from "./Footer";
import { Link} from "react-router-dom";

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
  servicehead4: "Agricultute Loan",
  servicehead5: "Personal Loan"
};
const Ourservices = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} >

      <div className=" lg:mt-24 mt-12 lg:mx-32 ">
           <h1 className="font-bold text-2xl">MINIMUM DOCUMENTS REUIRED</h1>
           <p>* Aadhaar Card</p>
           <p>* Pan Card</p>
       </div>


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

       <div className="lg:flex lg:mt-24 mt-12 ">
           <div className="lg:w-1/3">
           <div className=" lg:w-1/2 w-1/2 m-auto">
             <img className="lg:h-96  lg:w-96" alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="/Image/mortgage.jpg" />
         </div>
         </div>
         <div className="lg:w-2/3">
         <div className="  lg:mr-24 mx-12  text-justify ">
           <b className="lg:text-2xl text-xl "> <FormattedMessage id="servicehead4"/> </b>
           <p className="lg:text-xl text-sm "><FormattedMessage id="servicepara3"/> </p> 
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
           <b className="lg:text-2xl text-xl "> <FormattedMessage id="servicehead5"/> </b>
           <p className="lg:text-xl text-sm "><FormattedMessage id="servicepara3"/> </p> 
            </div>
            </div>
       </div>

       

       <Footer />
     </IntlProvider>
    </>
  );
};

export default Ourservices;


