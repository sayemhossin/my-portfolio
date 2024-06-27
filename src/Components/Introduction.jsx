
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Introduction = () => {
    return (
        <div  className='mt-8 md:mt-32 mb-12 lg:mb-52 lg:mt-52 flex justify-around items-center'>
            <div data-aos="flip-left" className="avatar">
                <div className="ring-[#E5B80B] w-20 lg:w-96 md:w-72  rounded-full ring-8 ring-[#E5B80B]-4">
                    <img src="profile.jpg" />
                </div>
            </div>



            <div  className='space-y-4'>
                <h1 data-aos="fade-down-left" className='text-2xl md:text-3xl lg:text-6xl text-[#E5B80B]'>Md. Sayem Hossin</h1>
                <p data-aos="fade-right" className='md:text-xl lg:text-3xl'><span className='text-[#E5B80B]'>Email:</span> sayemhossin157@gmail.com</p>
                <p data-aos="fade-right" className='md:text-xl lg:text-3xl'><span className='text-[#E5B80B]'>Email:</span> sayemhossin22@gmail.com</p>
               
                <p data-aos="fade-down-left" className='md:text-xl lg:text-3xl'><span className='text-[#E5B80B]'>Whatsapp:</span> 01788576261</p>
                <div className='flex gap-6 md:pt-6'>
                    <a data-aos="zoom-in-up" target='_blank' href='https://www.facebook.com/sayem.hossin.982'><FaFacebook className='text-3xl md:text-4xl' /></a>
                    <a data-aos="zoom-in-down" target='_blank' href='https://x.com/i/flow/login?redirect_after_login=%2FSayem112233'><FaXTwitter className='text-3xl md:text-4xl' /></a>
                    <a data-aos="zoom-in-up" target='_blank'  href="https://www.linkedin.com/in/md-sayem-hossin"><FaLinkedin  className='text-3xl md:text-4xl' /></a>
                    <a data-aos="zoom-in-down" target='_blank'  href="https://github.com/sayemhossin"><FaGithub  className='text-3xl md:text-4xl' /></a>
                </div>
            </div>
        </div>
    );
};

export default Introduction;