import React, { useSate } from 'react';
import { Fabars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [navToggle, setNavToggle] = useSate(false);
    const handleNavToggle = () => setNavToggle(!navToggle);
return (
    <nav className='bg-slate-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
            <a href='/jg-react-portfolio/' className='flex items-center'>
                <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Jennifer Garcia</span>
            </a>
         
         <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
                    <ul className='flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-500 dark:bg-gray-900 dark:border-gray-700'>
            
                        <li>
                            <NavLink 
                            to='/jg-react-portfolio/about' 
                            className={({ isActive, isPending }) => 
                            isPending 
                            ? 'block py-2 pl-3 pr-4 md:hover:text-blue-700 md:p-0 dark:text-white'
                            : isActive 
                            ? 'block py-2 pl-3 pr-4 md:hover:text-blue-700 md:border-b-2 md:text-red-700 md:border-red-700 md:p-0 dark:text-white'
                            : ''
                            }
                             >
                            About Me
                            </NavLink >
                        </li>

                        <li>
                            <Navlink 
                            to='/jg-react-portfolio/portfolio'
                            className={({ isActive, isPending }) => 
                            isPending
                            ? 'block py-2 pl-3 pr-4 md:hover:text-blue-700 md:p-0 dark:text-white'
                            : isActive
                            ? 'block py-2 pl-3 pr-4 md:hover:text-blue-700 md:border-b-2 md:text-red-700 md:border-red-700 md:p-0 dark:text-white'
                            : ''
                            }
                            >Portfolio
                            
                        

                        <li>
                            <NavLink
                            to='/jg-react-portfolio/resume'
                            className={({ isActive, isPending }) => 
                            isPending 
                            ? 'block py-2 pl-3 pr-4 md:hover:text-blue-700 md:p-0 dark:text-white'
                            : isActive
                            ? 'block py-2 pl-3 pr-4 md:hover:text-blue-700 md:border-b-2 md:text-red-700 md:border-red-700 md:p-0 dark:text-white'
                            : ''
                            }
                            >Resume
                            </NavLink >
                         </li>
                             
                        <li>
                            <NavLink
                            to='/jg-react-portfolio/contact'
                            className={({ isActive, isPending }) =>
                            isPending 
                            ? 'block py-2 pl-3 pr-4 md:hover:text-blue-700 md:p-0 dark:text-white'
                            : isActive
                            ? 'block py-2 pl-3 pr-4 md:hover:text-blue-700 md:border-b-2 md:text-red-700 md:border-red-700 md:p-0 dark:text-white'
                            :''
                            }
                            >Contact Me
                            </NavLink >
                        </li>
                    </ul>
           </div>

            <div
            onClick={handleNavToggle} 
            className='cursor-pointer md:hidden z-20'>
                {!navToggle ? <FaBars /> : <FaTimes />}
            </div>
                <ul 
                className={!navToggle ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-600 flex flex-col justify-center items-center z-10'}>
                    
                    <li className='py-6 text-4xl'>
                        <a href='/jg-react-portfolio/about' className=''>About Me</a>
                    </li>

                    <li className='py-6 text-4xl'>
                        <a href='/jg-react-portfolio/portfolio' className=''>Portfolio</a>
                    </li>

                    <li className='py-6 text-4xl'>
                        <a href='/jg-react-portfolio/resume' className=''>Resume</a>
                    </li>

                    <li className='py-6 text-4xl'>
                        <a href='/ jg-react-portfolio/contact' className=''>Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
   );
};

export default Navbar;
           
               
                        