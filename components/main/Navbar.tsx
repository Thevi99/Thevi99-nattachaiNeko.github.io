import React from 'react';
import './Navbar.css'; // Make sure to create a CSS file named 'Navbar.css'

export const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between items-center py-4'>
      <div className='flex items-center animate__animated animate__fadeIn'>
      </div>
        <div className='text-white font-extrabold text-2xl md:text-3xl'>
          By Nattachai
        </div>
    </div>
  );
};

export default Navbar;
