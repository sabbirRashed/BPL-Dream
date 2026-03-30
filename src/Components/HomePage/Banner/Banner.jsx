import React from 'react';
import heroLogo from '../../../assets/banner-main.png';
import bannerImage from '../../../assets/banner-_syl.png';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[60vh] rounded-2xl mt-8 bg-cover bg-center relative bg-blend-overlay"
                style={{backgroundImage:`url(${bannerImage})`}}>
                <div className="hero-content text-center z-10">
                    <div className="space-y-6">
                        <img src={heroLogo} alt="" className='mx-auto' />
                        <h1 className="text-4xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="text-2xl text-white">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <div className='p-1 rounded-xl  border-2 border-white inline-block'>
                            <button className="btn btn-primary rounded-lg bg-white text-[#346739] border-none shadow-none  hover:bg-[#79AE6F] hover:text-white">Claim Free Credit</button>
                        </div>
                    </div>
                </div>
                <div className='absolute inset-0 bg-[#285A48] rounded-2xl opacity-95 z-0'></div>
            </div>
            
        </div>
    );
};

export default Banner;