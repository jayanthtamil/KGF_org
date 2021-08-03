import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl'

const messagesInFrench = {}
const Companies = () => {
  return(
    <IntlProvider messages={messagesInFrench} > 
    <div className="lg:py-12">
    <div className="justify-start lg:px-20">
            <h5 className="text-xl font-bold pb-2  bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 py-4">
              <FormattedMessage
                id="ourGroup"
                defaultMessage="OUR GROUP OF COMPANIES"
              />
            </h5>
          </div>

          <div className="lg:flex lg:mt-20  mt-6 mb-6">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 ">
              <div className="px-6">
                <a href="https://karurtech.com/" target="blank">
                  <img
                    alt="Image"
                    src="/Image/Oldgold.jpg"
                    className="shadow-lg  mx-auto w-3/4 hover:shadow-2xl"
                  />
                </a>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <a href="https://karurtech.com/" target="blank">
                  <img
                    alt="Image"
                    src="/Image/Agriculture.jpg"
                    className="shadow-lg  mx-auto w-3/4 hover:shadow-2xl"
                  />
                </a>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <a href="https://karurtech.com/" target="blank">
                  <img
                    alt="Image"
                    src="/Image/Bank.jpg"
                    className="shadow-lg  mx-auto w-3/4 hover:shadow-2xl"
                  />
                </a>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <a href="https://karurtech.com/" target="blank">
                  <img
                    alt="Image"
                    src="/Image/Agriculture.jpg"
                    className="shadow-lg  mx-auto w-3/4 hover:shadow-2xl"
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