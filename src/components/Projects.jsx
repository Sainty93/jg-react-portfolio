import React, { useState } from 'react';
import UmsImage from '../assets/images/UMS.png';
import RealRecipesImg from '../assets/images/real-recipes.png';
import Horiseon from '../assets/images/horiseon3.png';
import PetFinder from '../assets/images/pet-finder.png';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


const Project = () => {
    const projects = [
        {
            title: 'Universal Movie Search',
            url: 'https://b3nl99.github.io/UMS-universal-movie-searcher/',
            repo: 'https://github.com/b3nl99/UMS-universal-movie-searcher',
            image: UmsImage,
            description: 'Universal Movie Search',
        },
        {
            title: 'Real Recipes',
            url: 'https://floating-lowlands-40637.herokuapp.com/',
            repo: 'https://github.com/kabdomora/Proj2Grp2',
            image: RealRecipesImg,
            description: 'Real Recipes',
        },
        {
            title: 'Horiseon',
            url: 'https://sainty93.github.io/JG-Horiseon/',
            repo: 'https://github.com/Sainty93/horiseon-accessibility-refactor',
            image: Horiseon,
            description: 'Horiseon',
        },
        {
            title: 'Pet Finder',
            url: 'https://pet-picker-mern.herokuapp.com/',
            repo: 'https://github.com/wiilki/pet-picker',
            image: PetFinder,
            description: 'Petfinder',
        },
    ];
    const [currectIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currectIndex === 0;
        const newIndex = isFirstSlide ? projects.length -1 : currectIndex -1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currectIndex === projects.length -1;
        const newIndex = isLastSlide ? 0 : currectIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (projectIndex) => {
        setCurrentIndex(projectIndex);
    };

    const gitHubRepo = projects[currectIndex].repo;

    return (
        <div className='max-w-[1400px] h-auto w-full mx-auto py-28 px-8 relative group'>
            <div className='flex justify-center mb-6'>
                <div className='max-w-[1400px] text-2xl md:text-4xl'>
                    {projects[currectIndex].title}
                </div>
            </div>
           <a  
           href ={projects[currectIndex].url} 
           target='_blank' 
           rel='noreferrer'
           className='cursor-pointer'>
            
            <img className='w-full rounded-2xl bg-center bg-cover duration-500'
            src={projects[currectIndex].image}
            alt={projects.description} />
            </a>
            
          
            <div className='hidden group-hover:block absolute top-[40%] -translate-y-[-40%] md:top-[50%] md:-translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer items-center'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[40%]-translate-y-[40%] md:top-[50%] md:-translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-center p-2'>
                    {projects.map((project, projectIndex) => (
                    <div
                    key ={projectIndex}
                    onClick={() => goToSlide(projectIndex)}
                    className='cursor-pointer'>
                        <RxDotFilled size={30} />
            </div>
        ))}
        </div>
        <div className='max-w-[1400px] flex justify-center'>
            <a href={gitHubRepo} target='_blank' rel='noreferrer'>
                <button className='border-2 border-slate-600 mt-2 rounded-md text-2xl p-2 hover:bg-slate-600'>
                    View Code Here!
                </button>
            </a>
            </div>
        </div>
    </div>
        
    
    
    );
    };

    export default Project;