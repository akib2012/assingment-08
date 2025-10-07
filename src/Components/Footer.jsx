import React from 'react';
import logoimg from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="bg-[#021C33] text-white py-6 mt-10">
            <div className="max-w-10/12 mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <img className='h-8 w-8' src={logoimg} alt="" />
                    <h2 className="text-lg font-semibold tracking-wide">HERO.IO</h2>
                </div>

                <div className="text-center md:text-right">
                    <h3 className="text-sm mb-2 font-medium">Social Links</h3>
                    <div className="flex justify-center md:justify-end gap-4 text-sm text-gray-300">
                        <a href="#" className="hover:text-teal-400 transition">
                            <i class="fa-brands fa-x-twitter"></i> Twitter
                        </a>
                        <a href="#" className="hover:text-teal-400 transition">
                            <i class="fa-brands fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="#" className="hover:text-teal-400 transition">
                            <i class="fa-brands fa-facebook"></i> Facebook
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-600 mt-4"></div>

            <p className="text-center text-sm mt-3 text-gray-300">
                Copyright © 2025 - All rights reserved
            </p>
        </div>


    );
};

export default Footer;