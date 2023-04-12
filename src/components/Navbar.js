import React from 'react';

const Navbar = () => {
return (
    <nav className='bg-slate-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded
     dark:bg-gray-900'>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='/' className='flex items-center'>
           <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Jennifer Garcia
            </span>
        </a>
            {/* button data-collapse-toggle='navbar-default' type='button' className='inline-flex items-center
            p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                aria-controls='navbar-default'
                aria-expanded='false'>
                    <span className='sr-only'>Main Menu</span>
                    <svg className='w-6 h-6'
                    aria-hidden='true'
                    fill='currentColor'
                    viewbox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd'
                         d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                         clipRule='evenodd'></path>
                    </svg>
</button>*/}
                <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
                    <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 
                        md:text-sm md:font-medium md:border-0 md:bg-slate-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                            <li>
                                <a href='/pages/Home' className='block py-2 pl-3 pr-4 text-white md:hover:text-blue-700 rounded 
                                md:bg-transparent md:text-gray-700 md:p-0 dark:text-white' aria-current='page'>Home</a>
                            </li>

                            <li>
                                <a href='/pages/Portfolio' className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 
                                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-white md:dark:hover:bog-transparent'>Portfolio</a>
                            </li>

                            <li>
                                <a href='/pages/AboutMe' className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 
                                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-white md:dark:hover:bog-transparent'>About Me</a>
                            </li>

                            <li> 
                                <a href='/pages/Resume' className='block py-2 pl-3 pr-4  rounded hover:bg-gray-100 
                                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-white md:dark:hover:bog-transparent'>Resume</a>
                            </li>

                            <li>
                            <a href='/pages/ContactMe' className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 
                                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-white md:dark:hover:bog-transparent'>Contact Me </a>
                            </li>

                        </ul>

                </div>
                        
                        
            </div>
        
     </nav>



);
};

export default Navbar;