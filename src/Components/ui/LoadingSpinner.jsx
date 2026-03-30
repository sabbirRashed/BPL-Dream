import React from 'react';
import { Bars } from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <Bars></Bars>
        </div>
    );
};

export default LoadingSpinner;