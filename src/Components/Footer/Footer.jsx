import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#091413] text-white mt-30'>
            <div className='py-15 md:py-30 w-11/12 max-w-330 mx-auto flex flex-col lg:flex-row gap-6 justify-between'>
                <div>
                    <h2 className='text-lg font-bold mb-6'>About Us</h2>
                    <p className='max-w-60'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div>
                    <h2 className='text-lg font-bold'>Quick Links</h2>
                    <ul className='mt-6 space-y-4'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-bold '>Subscribe</h2>
                    <p className='mt-6 mb-4'>Subscribe to our newsletter for the latest updates.</p>
                    <form className='border overflow-hidden border-green-900 text-center flex justify-between rounded-lg'>
                        <input type="email" placeholder='Inter your email' className='text-center'  />
                        <button className='btn bg-[#1B4332] rounded-none border-none shadow-none text-white'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;