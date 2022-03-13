import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="px-2  py-2.5  bg-[#1ed760] shadow-xl min-h-[50px] sticky top-0 z-50">
            <div className="container flex  justify-between items-center mx-auto">
                <Link className="flex items-center" to="/">
                    <span className="text-xl font-bold text-white">Bergenfy</span>
                </Link>
                <div className="items-center flex w-auto " >
                    <ul className="flex space-x-0   md:space-x-3 text-sm">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="musics">
                                <span className="text-base py-1 pr-2  md:py-2 md:pr-4 md:pl-3 text-gray-700  hover:text-white">Musics</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="abaut">
                                <span className="text-base py-1 pr-2  md:py-2 md:pr-4 md:pl-3 text-gray-700 hover:text-white">Abaut</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="images">
                                <span className="text-base py-1 pr-2  md:py-2 md:pr-4 md:pl-3 text-gray-700 hover:text-white">İmages</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar