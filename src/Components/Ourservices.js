import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const messagesInFrench = {
  name:
    "A gold loan or a loan against gold is a secured loan which customers can avail from Muthoot Finance in lieu of gold ornaments like gold jewellery. It is the easiest way to fulfil your financial needs and proves to be a sensible alternative to availing loans from banking channels. ",
  nameOne:
    "A gold loan or a loan against gold is a secured loan which customers can avail from Muthoot Finance in lieu of gold ornaments like gold jewellery. It is the easiest way to fulfil your financial needs and proves to be a sensible alternative to availing loans from banking channels.",
  nameTwo:
    "A gold loan or a loan against gold is a secured loan which customers can avail from Muthoot Finance in lieu of gold ornaments like gold jewellery. It is the easiest way to fulfil your financial needs and proves to be a sensible alternative to availing loans from banking channels.",
  nameThree:
    "A gold loan or a loan against gold is a secured loan which customers can avail from Muthoot Finance in lieu of gold ornaments like gold jewellery. It is the easiest way to fulfil your financial needs and proves to be a sensible alternative to availing loans from banking channels.",
  goldloan: "Gold Loan",
  goldBuy: "Old Gold Buying",
  bank: "Taking Loan From Bank",
  
};
const Ourservices = () => {
  return (
    <>
      <IntlProvider messages={messagesInFrench} >
      <div className="lg:flex lg:mt-24 mt-12 lg:ml-24">
           
           <div className=" lg:w-2/6  w-1/2 m-auto">
             <img alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="/Image/Agriculture.jpg" />
         </div>
         
         <div className="  lg:mr-24  text-justify ">
           <b className="lg:text-2xl text-xl lg:pl-12"> <FormattedMessage id="goldLoan"/> </b>
           <p className="lg:text-xl text-sm lg:pl-12"><FormattedMessage id="nameOne"/> </p> 
            </div>
         
       </div>

       <div className="lg:flex lg:mt-24 mt-12 lg:ml-24">
           
           <div className=" lg:w-2/6  w-1/2 m-auto">
             <img alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="/Image/Oldgold.jpg" />
         </div>
         
         <div className="  lg:mr-24  text-justify ">
           <b className="lg:text-2xl text-xl lg:pl-12"> <FormattedMessage id="goldBuy"/> </b>
           <p className="lg:text-xl text-sm lg:pl-12"><FormattedMessage id="nameOne"/> </p> 
            </div>
         
       </div>

       <div className="lg:flex lg:mt-24 mt-12 lg:ml-24">
           
           <div className=" lg:w-2/6  w-1/2 m-auto">
             <img alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="/Image/Bank.jpg" />
         </div>
         
         <div className="  lg:mr-24  text-justify ">
           <b className="lg:text-2xl text-xl lg:pl-12"> <FormattedMessage id="bank"/> </b>
           <p className="lg:text-xl text-sm lg:pl-12"><FormattedMessage id="nameOne"/> </p> 
            </div>
         
       </div>
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