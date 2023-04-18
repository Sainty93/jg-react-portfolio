import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div className='w-full h-screen bg-slate-400'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-red-700 text-xl font-bold'>Hello, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold'>Jennifer Garcia</h1>
                <h2 className='text-2xl sm:text-5xl'>Im a full stack developer</h2>
                <p className='text-xl sm:text-2xl py-4 max-w-[700px]'>
                A full stack developer certified through the UCLA extension Program.I am knowledeable in javascript,html,css,sql,nosql, and various frameworks like react,nodejs,expressjs,and tailwind.
                </p>
            <div>
            <a href='/about'>
                <button className='border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-slate-800 hover:text-white group'>Get to know me!
                <span className='group-hover:text-4xl'>
                    <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
            </a>
        </div>
    </div>
    </div>
    
);
};

export default Home;