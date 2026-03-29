import React from 'react';
import heroLogo from '../../../assets/banner-main.png';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#79AE6F] min-h-[60vh] rounded-2xl mt-8 bg-linear-to-rt">
                <div className="hero-content text-center">
                    <div className="space-y-6">
                        <img src={heroLogo} alt="" className='mx-auto' />
                        <h1 className="text-4xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="text-2xl text-white">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <div className='p-1 rounded-xl  border-2 border-[#346739] inline-block'>
                            <button className="btn btn-primary rounded-lg bg-[#346739] border-none shadow-none">Claim Free Credit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;