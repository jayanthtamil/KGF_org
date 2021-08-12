import React from "react";
import {Link} from "react-router-dom";
import {IntlProvider, FormattedMessage} from 'react-intl'
// import { AiFillLinkedin } from "react-icons/si";
import { AiFillLinkedin, AiOutlineInstagram , AiFillFacebook , AiOutlineYoutube} from "react-icons/ai";

const messagesInFrench = {
 home:"Home",
about:"About Us",
ourServices:"Our Services",
branches: "Branches",
calculator: " Calculator",
blog:"Blog",
contact:"Contact"
}


const Header = ({ toggle }) => {
    return(

<IntlProvider messages={messagesInFrench} > 

<nav>
  
  <div className='bg-black text-white lg:flex '> 

            <p className="flex lg:ml-96  ml-6  mt-2 mb-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
</svg> + 9876543210</p> 

<p className="flex lg:ml-12  ml-6  mt-2 mb-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg> karurgoldfinance@gmail.com</p>

<div className="flex ">
<p  className="flex lg:ml-80 ml-6 mt-3 mb-2" > < AiFillFacebook/> </p>

<p  className="flex lg:ml-4 ml-4 mt-3 mb-2" > <AiOutlineInstagram/> </p>

<p  className="flex lg:ml-4 ml-4   mt-3 mb-2" > <AiFillLinkedin/> </p>

<p  className="flex lg:ml-4  ml-4 mt-3 mb-2" > <AiOutlineYoutube/> </p>

</div>

                 </div></nav>

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