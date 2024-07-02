import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 p-10 lg:p-24  bg-gray-900'>
             <div>
                <h1 className='text-3xl md:text-6xl mb-3 font-bold'>Get In Touch</h1>
                <p>I am Sayem  Hossin. Passionate about creating <br className='hidden md:inline' /> and  developing eye catching website.</p>

                <div className='flex items-center mt-5 md:mt-0 gap-6 md:pt-6'>
                    <a target='_blank' href='https://www.facebook.com/sayem.hossin.982'><FaFacebook className='text-3xl md:text-4xl' /></a>
                    <a  target='_blank' href='https://x.com/Sayem112233?t=7aKc7xcqzAB-CC6byTPcwg&s=09'><FaXTwitter className='text-3xl md:text-4xl' /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/md-sayem-hossin"><FaLinkedin className='text-3xl md:text-4xl' /></a>
                    <a  target='_blank' href="https://github.com/sayemhossin"><FaGithub className='text-3xl md:text-4xl' /></a>
                    

                </div>
            </div>


            <div className='flex flex-col md:flex-row mt-6 gap-4 md:gap-10 lg:gap-20'>
                <div className='p-6  md:w-fit shadow-md bg-blue-950 shadow-gray-300 '>
                    <div className='flex flex-col justify-center'>
                        <div className='flex justify-center'>
                            <p className='mb-6'> <MdEmail className='text-2xl text-[#E5B80B]' /></p>
                        </div>
                        <h1 className='text-[#E5B80B]'>sayemhossin157@gmail.com</h1>
                        <h1 className='text-[#E5B80B]'>sayemhossin22@gmail.com</h1>
                    </div>
                </div>
                <div className='p-6 md:w-60 shadow-md bg-blue-950 shadow-gray-300 '>
                    <div className='flex flex-col justify-center'>
                        <div className='flex justify-center'>
                            <p className='mb-6'> <FaSquareWhatsapp  className='text-2xl text-[#E5B80B]' /></p>
                        </div>
                        <h1 className='text-[#E5B80B] mt-2 md:mt-4 text-center text-xl'>01788576261</h1>
                      
                    </div>
                </div>
            </div>

           
        </div>
    );
};

export default Footer;