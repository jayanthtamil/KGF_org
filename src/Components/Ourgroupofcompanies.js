import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl'

const messagesInFrench = {}
const Companies = () => {
  return(
    <IntlProvider messages={messagesInFrench} > 
    <div className="lg:py-2">
    <div className="lg:justify-start text-center lg:px-24 pl-12">
            <h5 className="text-2xl font-bold pb-2 py-4">
              <FormattedMessage
                id="ourGroup"
                defaultMessage="Our Group Of Companies"
              />
            </h5>
          </div>

          <div className="lg:flex lg:mt-20  mt-2 mb-6 mx-20">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 ">
              <div className="px-6 ">
                <a href="https://karurtech.com/" target="blank">
                  <img
                    alt="Image"
                    src="/Image/kts.jpeg"
                    className="shadow-lg  mx-auto lg:w-3/4 w-11/12 hover:shadow-2xl"
                  />
                </a>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <a href="https://karurtech.com/" target="blank">
                  <img
                    alt="Image"
                    src="/Image/finestreet.jpeg"
                    className="shadow-lg  mx-auto lg:w-3/4 w-11/12 hover:shadow-2xl"
                  />
                </a>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <a href="https://karurtech.com/" target="blank">
                  <img
                    alt="Image"
                    src="/Image/thogaimurugan.png"
                    className="shadow-lg  mx-auto lg:w-3/4 w-11/12 hover:shadow-2xl"
                  />
                </a>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <a href="https://karurtech.com/" target="blank">
                  <img
                    alt="Image"
                    src="/Image/Logo.png"
                    className="shadow-lg  mx-auto lg:w-3/4 w-11/12 hover:shadow-2xl"
                  />
                </a>
              </div>
            </div>

            </div>
    </div>
    </IntlProvider>
  )
}

export default Companies;