import React from "react";
import {Link} from "react-router-dom";
import {IntlProvider, FormattedMessage} from 'react-intl'

const messagesInFrench = {
 home:"Home",
about:"About Us",
ourServices:"Our Services",
branches: "Branches",
calculator: "Loan Calculator",
blog:"Blog",
contact:"Contact"
}

const Header = ({ toggle }) => {
    return(

<IntlProvider messages={messagesInFrench} > 
      <nav
      className='flex justify-between items-center h-24 bg-gray-100 text-black relative shadow-lg lg:pl-24 lg:pr-24  text-lg fixed'
      role='navigation'
    >
      <Link to='/' className='pl-8  '>
      <img alt="Image is loading" className="align-middle border-none max-w-full h-auto rounded-lg"src="/Image/logo.png"/>

      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>

     
          <div className='pr-8 md:block flex  hidden '>
            
          <Link to='/' className='p-4 green hover:text-red-600' ><FormattedMessage id="home"/></Link>
          <Link to='/about' className='p-4  hover:text-red-600'><FormattedMessage id="about"/></Link>
          <Link to="/ourservices" className='p-4 hover:text-red-600'><FormattedMessage id="ourServices"/></Link>
          <Link to="/Branches" className='p-4 hover:text-red-600'><FormattedMessage id="branches"/></Link>
          <Link to="/calculator" className='p-4 hover:text-red-600'><FormattedMessage id="calculator"/></Link>
          <Link to="blog" className='p-4 hover:text-red-600'><FormattedMessage id="blog"/></Link>
          <Link to='/contact' className='p-4 hover:text-red-600'><FormattedMessage id="contact"/></Link>
         
          
           </div>
           </nav>
           </IntlProvider>
    )

}

export default Header;