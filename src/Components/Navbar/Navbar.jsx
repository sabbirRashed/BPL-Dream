import React from 'react';
import logo from '../../assets/logo.png';
import dolerCoin from '../../assets/dollar_1.png';

const Navbar = ({ coin }) => {
    return (
        <div>
            <div className="navbar pt-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <img src={logo} alt="BPL Logo" className='w-' />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 font-medium">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className='flex items-center gap-2 px-4 py-2 rounded-lg font-semibold border border-[#79AE6F] bg-[#EAB308] text-white hover:bg-[#1B4332] hover:text-white transition-all duration-300'>
                        <span className='text-sm sm:text-[1rem]'>{coin} coins</span>
                        <div><img src={dolerCoin} alt="" className='w-5 h-auto' /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;