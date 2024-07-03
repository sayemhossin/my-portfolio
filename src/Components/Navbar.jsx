import React from 'react';

const Navbar = () => {
    return (
        <div className="flex  gap-5 md:gap-10 md:right-9 lg:font-semibold text-[18px] md:text-2xl lg:text-3xl p-4 lg:p-10 absolute  z-10">
            <a  className='hover:text-[#ffcc01] hover:underline' href="#About">
                <p>About</p>
            </a>
            <a className='hover:text-[#ffcc01] hover:underline' href="#Education">
                <p>Education</p>
            </a>
            <a className='hover:text-[#ffcc01] hover:underline' href="#Skills">
                <p>Skills</p>
            </a>
            <a className='hover:text-[#ffcc01] hover:underline' href="#Projects">
                <p>Project</p>
            </a>
        </div>
    );
};

export default Navbar;