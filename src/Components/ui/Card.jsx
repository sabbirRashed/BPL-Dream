import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaFlag } from "react-icons/fa6";

const Card = ({player}) => {

    const { playerName, playerCountry, battingStyle, bowlingStyle, price, playerType, playerImage } = player;
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                    src={playerImage}
                    alt="player" className='w-full h-50' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <FaUser></FaUser>
                    {playerName}
                </h2>

                <div className='flex justify-between items-center'>
                    <p className='flex gap-2 items-center'>
                        <FaFlag />
                        {playerCountry}
                    </p>
                    <button className='btn'>{playerType}</button>
                </div>

                <div className="divider m-0"></div>

                <h2 className='font-bold'>Rating</h2>
                <div className='flex justify-between items-center '>
                    <p className='font-semibold'>{battingStyle}</p>
                    <p className='text-end'>{bowlingStyle}</p>
                </div>

                <div className='flex justify-between items-center '>
                    <p className='font-semibold'>price: ${price}</p>
                    <button className='btn'>Choose Player</button>
                </div>

            </div>
        </div>
    );
};

export default Card;