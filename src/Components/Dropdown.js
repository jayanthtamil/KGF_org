import React from "react";
import {Link} from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-3 text-center items-center bg-white'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-4'>
        Home
      </Link>
      <Link to='/about' className='p-4'>
      About Us
      </Link>
      <Link to='/ourservices' className='p-4'>
      Our Services
      </Link>
      <Link to='/branches' className='p-4'>
      Branches
      </Link>
      <Link to='/calculator' className='p-4'>
       Calculator
      </Link>
      <Link to='/blogs' className='p-4'>
      Blogs
      </Link>
      <Link to='/contact' className='p-4'>
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;