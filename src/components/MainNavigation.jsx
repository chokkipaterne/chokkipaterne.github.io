import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { navLinks } from '../constants';
import { FaStream } from 'react-icons/fa';
import Switcher from './Switcher';

function MainNavigation() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <div className='z-50'>
      <div className='container mx-auto'>
        <header className='flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[999999]'>
          <div className='flex justify-between w-full px-4 lg:px-0 bg-[#F8F8F8] lg:bg-transparent lg:dark:bg-transparent dark:bg-black'>
            <div className='flex justify-between w-full items-center space-x-4 my-2'>
              <Link className='text-5xl font-semibold' to='/'>
                <img
                  width='160'
                  className='h-[28px] lg:h-[32px]'
                  src={logo}
                  alt='logo'
                />
              </Link>
              <div className='flex items-center'>
                <span className='flex h-[40px] lg:hidden justify-center items-center cursor-pointer ml-2'>
                  <Switcher />
                </span>
                <span
                  className='lg:opacity-0 lg:invisible visible opacity-100 bg-gradient-to-r from-primary to-secondary w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-2xl ml-3'
                  onClick={() => {
                    setToggleDropdown((prev) => !prev);
                  }}
                >
                  <FaStream />
                </span>
                {toggleDropdown && (
                  <div className='dropdown'>
                    {navLinks.map((navlink) => {
                      return (
                        <Link
                          to={navlink.path}
                          className='dropdown_link mb-1'
                          onClick={() => {
                            setToggleDropdown(false);
                          }}
                        >
                          {navlink.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className='hidden lg:block'>
            <ul className='flex my-8 justify-between'>
              {navLinks.map((navlink) => {
                return (
                  <li key={navlink.id} className='mb-1'>
                    <Link
                      to={navlink.path}
                      className='px-2 rounded-md cursor-pointer bg-white font-medium mx-2.5 flex py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-dark hover:text-white hover:bg-gradient-to-r from-primary to-secondary dark:text-[#A6A6A6]'
                    >
                      <span className='mr-2 text-xl'>
                        <navlink.icon />
                      </span>
                      {navlink.name}
                    </Link>
                  </li>
                );
              })}
              <span className='h-[40px] hidden lg:flex justify-center items-center cursor-pointer ml-2'>
                <Switcher />
              </span>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default MainNavigation;
