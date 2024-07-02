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
                        <a data-aos="zoom-in-up"  target='_blank' href="https://docs.google.com/document/d/1jTF0jx0CTwSPxoBO-x93pK6Is_LA0Kop2es-RQkb774/edit?usp=sharing" class="relative  inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-3xl group">
                            <span class="w-32 h-32  rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span class="absolute  top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gray-300 opacity-100 group-hover:-translate-x-8"></span>
                            <span class="relative  w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">View Certificate </span>
                            <span class="absolute border-[#E5B80B] inset-0 border-2  rounded-3xl"></span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Education;