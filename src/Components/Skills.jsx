import React from 'react';

const Skills = () => {
    return (
        <div className='md:pb-32 pb-20'>
            <h1 className='md:text-5xl text-4xl lg:text-7xl underline text-gray-300 text-center mt-8 mb-5 lg:mb-24 md:mb-8'>Technical Skills</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mx-6 md:mx-12">
          <div data-aos="flip-left" className='text-xl p-4 border-2  border-[#E5B80B]'>
                <h1
                    className='text-3xl text-center '>FrontEnd</h1>
                <ol class="ml-10 mt-5 list-disc md:text-2xl  text-[#ffcc01]">
                    <li class="ml-4">HTML</li>
                    <li class="ml-4">CSS</li>
                    <li class="ml-4">Tailwind CSS</li>
                    <li class="ml-4">JavaScript</li>
                    <li class="ml-4">React.Js</li>
                    <li class="ml-4">Next.Js - <span className='text-[17px]'>beginner level</span></li>
                </ol>
            </div>
            <div data-aos="flip-right" className='text-xl h-72 p-4 border-2  border-[#E5B80B]'>
                <h1
                    className='text-3xl text-center '>BackEnd</h1>
                <ol class="ml-10 mt-5 list-disc md:text-2xl  text-[#ffcc01]">
                    <li class="ml-4">Node.js</li>
                    <li class="ml-4">Express.js</li>
                   
                </ol>
            </div>
            <div data-aos="flip-left" className='text-xl h-72 p-4 border-2  border-[#E5B80B]'>
                <h1
                    className='text-3xl text-center '>Authentication</h1>
                <ol class="ml-10 mt-5 list-disc md:text-2xl  text-[#ffcc01]">
                    <li class="ml-4">Firebase</li>
                </ol>
            </div>
            <div data-aos="flip-right" className='text-xl h-72 p-4 border-2  border-[#E5B80B]'>
                <h1
                    className='text-3xl text-center '>Database</h1>
                <ol class="ml-10 mt-5 list-disc md:text-2xl  text-[#ffcc01]">
                    <li class="ml-4">Mongodb</li>
                </ol>
            </div>
            <div data-aos="flip-left" className='text-xl h-72 p-4 border-2  border-[#E5B80B]'>
                <h1
                    className='text-3xl text-center '>Tools</h1>
                <ol class="ml-10 mt-5 list-disc md:text-2xl  text-[#ffcc01]">
                    <li class="ml-4">Git</li>
                    <li class="ml-4">GitHub</li>
                    <li class="ml-4">Vercel</li>
                    <li class="ml-4">Netlify</li>
                    <li class="ml-4">Surge</li>
                </ol>
            </div>
          </div>
        </div>
    );
};

export default Skills;