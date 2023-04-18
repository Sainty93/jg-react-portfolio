import React from 'react';


const Resume = () => {
    return (
        <div name='about' className='w-full h-screen bg-slate-400'>
            <div className='flex flec-col justify-center items-center w-full h-[65vh]'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4 mb-10'>
                        <p classname='text-3xl sm:text-5xl font_bold inline bprder-b-4 border-red-700'>Resume</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-left text-4xl'>
                        <h2  className='text-3xl font-bold text-center'>Front-End</h2>
                        <li className='text-xl'>HTML</li>
                        <li className='text-xl'>JavaScript</li>
                        <li className='text-xl'>REACT</li>
                        <li className='text-xl'>Tailwind CSS</li>
                        <li className='text-xl'>JQuery</li>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-3xl font-bold text-center'>Back-End</h2>
                            <li className='text-xl'>Node JS</li>
                            <li className='text-xl'>Express JS</li>
                            <li className='text-xl'>MongoDB</li>
                            <li className='text-xl'>GraphQL</li>
                            <li className='text-xl'>MySQL</li>
                            <li className='text-xl'>APIs</li>
                        </div>
                    </div>
                </div>
                <div className='mt-8 sm:mt-20 w-full text-center'>
                    <a href='./assets/resume.pdf' download>
                        <button className='border-2 border-slate-300 rounded-md hover:bg-slate-800 hover:text-white p-2 group'>Download My Resume</button>
                    </a>
                    </div>
                </div>
            </div>
        
    );
};

export default Resume;
