import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-[#1ed760] fixed bottom-0 w-screen h-10 sm:hidden'>
            <div className="flex items-center w-full h-full justify-center" >
                <ul className="flex space-x-8  text-lg">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="musics">
                            <span className="text-base py-1 pr-2  md:py-2 md:pr-4 md:pl-3 text-gray-700  hover:text-white">Musics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="about">
                            <span className="text-base py-1 pr-2  md:py-2 md:pr-4 md:pl-3 text-gray-700 hover:text-white">About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="images">
                            <span className="text-base py-1 pr-2  md:py-2 md:pr-4 md:pl-3 text-gray-700 hover:text-white">Images</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer