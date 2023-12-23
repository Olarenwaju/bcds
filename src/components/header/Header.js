import React from 'react'
import logo from '../../assets/hero-logo.png'

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='/'>
          <img src={logo} alt='logo'/>
        </a>

        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">

          <button class="inline-flex items-center bg-white border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0 mr-5 rounded-lg">
           Login
          </button>

          <button class="inline-flex items-center text-white bg-[#EF1B73] border-0 py-3 px-6 focus:outline-none hover:bg-[#ef1b73a0] text-base mt-4 md:mt-0 rounded-lg">
           Sign up for free
          </button>
        </nav>

      </div>
    </header>
  );
};

export default Header;