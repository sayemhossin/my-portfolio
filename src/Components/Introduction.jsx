
import React from 'react';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Introduction = () => {
    return (
        <div id='About' className='mt-8 md:mt-32 mb-12 lg:mb-52 lg:mt-52 flex justify-around flex-col lg:flex-row items-center'>
            <div className='flex flex-col justify-center items-center'>
                <div data-aos="flip-left" className="avatar">
                    <div className="ring-[#E5B80B] w-40 lg:w-80 md:w-72  rounded-full ring-8 ring-[#E5B80B]-4">
                        <img src="profile.jpg" />
                    </div>

                </div>
                <h2 data-aos="zoom-in-up" className='md:w-[600px] lg:w-[400px] text-gray-300 text-center mt-5'>Hi I am Sayem. emerging  <span className='text-[#E5B80B]'>web developer</span> creating intuitive and actionable online spaces that perfectly suit your needs. Of course, code is where I shine, because I can connect creativity with technical skills while transforming innovative ideas into actuality. </h2>
            </div>



            <div className='space-y-4 md:mt-10 mt-8'>
                <h1 data-aos="fade-down-left" className='text-2xl md:text-3xl lg:text-6xl text-[#E5B80B]'>Md. Sayem Hossin</h1>
                <p data-aos="fade-right" className='md:text-xl lg:text-3xl'><span className='text-[#E5B80B]'>Email:</span> sayemhossin157@gmail.com</p>
                <p data-aos="fade-right" className='md:text-xl lg:text-3xl'><span className='text-[#E5B80B]'>Email:</span> sayemhossin22@gmail.com</p>

                <p data-aos="fade-down-left" className='md:text-xl lg:text-3xl'><span className='text-[#E5B80B]'>Whatsapp:</span> 01788576261</p>
                <div className='flex items-center gap-6 md:pt-6'>
                    <a data-aos="zoom-in-up" target='_blank' href='https://www.facebook.com/sayem.hossin.982'><FaFacebook className='text-3xl md:text-4xl' /></a>
                    <a data-aos="zoom-in-down" target='_blank' href='https://x.com/Sayem112233?t=7aKc7xcqzAB-CC6byTPcwg&s=09'><FaXTwitter className='text-3xl md:text-4xl' /></a>
                    <a data-aos="zoom-in-up" target='_blank' href="https://www.linkedin.com/in/md-sayem-hossin"><FaLinkedin className='text-3xl md:text-4xl' /></a>
                    <a data-aos="zoom-in-down" target='_blank' href="https://github.com/sayemhossin"><FaGithub className='text-3xl md:text-4xl' /></a>
                    <a data-aos="zoom-in-up" className='flex justify-center items-center gap-2 border-2 hover:text-[#ffc400] border-[#E5B80B] lg:text-xl p-1 md:p-2' href="https://docs.google.com/document/d/1nsK8QW8pGi1eccjHsAZVtdWp-jvc5HCV4_2xzWBdQ0U/export?format=pdf">Resume<FaDownload className='lg:text-3xl text-xl text-[#E5B80B] ' /></a>

                </div>
            </div>
        </div>
    );
};

export default Introduction;