import React from "react";
import {IntlProvider, FormattedMessage} from 'react-intl'

const messagesInFrench = {
  name: "Karur Gold Finance",
  nameOne:"Our story began in 1991 in Kerala. We have been producing natural and organic fruits and vegetables and sourced those to the local market. Our passion for natural products and our nose for food trends led our company to the next big step now.",
  goldRate:"Today Gold Rate One Gram = 4301"        
}

const About = () => {
    return(

    <div>

<IntlProvider messages={messagesInFrench} >
      
    <div className="lg:flex mt-24 lg:ml-24">
           
             <div className=" lg:w-2/4  ">
               <img alt="..." className="align-middle border-none max-w-full h-auto rounded-lg" src="/Image/Banner1.jpg" />
           </div>
           
           <div className="lg:w-2/4  lg:mr-24  text-justify ">
             <b className="lg:text-2xl text-xl lg:pl-12 focus:bg-red-800"> <FormattedMessage id="name"/> </b>
             <p className="lg:text-xl text-sm lg:pl-12"><FormattedMessage id="nameOne"/> </p> 
             <p className="lg:pt-12 lg:text-2xl lg:pl-12 pt-4 text-xl italic underline"><FormattedMessage id="goldRate"/></p>
            </div>
           
         </div>
        
    </IntlProvider>

         </div>

    )}

export default About;