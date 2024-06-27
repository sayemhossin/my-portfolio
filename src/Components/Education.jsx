import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Education = () => {
    return (
        <div className='md:my-32 lg:my-60'>
            <div className='flex  flex-col lg:flex-row justify-evenly'>
            <div className='text-[#E5B80B] mx-10 md:mx-20'>
                <h1 data-aos="zoom-in-up" className='text-3xl md:text-5xl text-center text-white'>Education</h1>
                <h1 data-aos="zoom-in-down" className='md:text-2xl mt-5 md:mt-14'>Diploma in Engineering at ...</h1>
                <h1 data-aos="zoom-in-down" className='text-xl md:text-3xl'>Bogura Government  Polytechnic Institute, Bogura,Bangladesh</h1>
                <h2 data-aos="zoom-in-down" className='md:text-2xl mt-3'>Department  : Electronics</h2>
                <h2 data-aos="zoom-in-down" className='md:text-2xl'>Duration:  2019 - 2023</h2>
                
            </div>
            <div className="divider lg:border-l-2 lg:h-60"></div>
            
            <div className='text-[#E5B80B] mx-10 md:mx-20'>
                <h1 data-aos="zoom-in-up" className='text-3xl md:text-5xl text-center text-white'>Courses</h1>
                <h1 data-aos="zoom-in-down" className=' md:text-2xl mt-5 md:mt-14'>Complete Web development course with Jhankar mahbub , </h1>
                <h1 data-aos="zoom-in-down" className='text-xl md:text-3xl'>Website Name: Programming Hero</h1>
                <h2 data-aos="zoom-in-down" className='md:text-2xl'>Duration: 6 month</h2>
                <div className='text-end mt-6'>
                    <a  target='_blank' href="https://docs.google.com/document/d/1jTF0jx0CTwSPxoBO-x93pK6Is_LA0Kop2es-RQkb774/edit?usp=sharing"><button data-aos="flip-right" className='btn text-[#1596ff] btn-link text-xl md:text-3xl'>View Certificate <FaArrowRight/></button></a>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Education;