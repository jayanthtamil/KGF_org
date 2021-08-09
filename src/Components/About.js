import React from "react";
import {IntlProvider, FormattedMessage} from 'react-intl'
import Footer from "./Footer";


const messagesInFrench = {
  abouthead1: "Our Story",
  
  aboutpara1:"Karur Gold Finance, with a reputation that has been shaped over decades with high quality practices, total customer satisfaction and steady growth, spanning decades in the field of business, is a legacy built on God-given values of trust, truth, transparency and tradition and has become one of the top business houses today by the grace of God.we have three branches in tamilnadu with over 50 employees. we have walk in customer of over 2000 happy customers.",
}

const About = () => {
    return(

    <div>

<IntlProvider messages={messagesInFrench} >
      
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
       
     
       <Footer />
    </IntlProvider>
         </div>

    )}

export default About;